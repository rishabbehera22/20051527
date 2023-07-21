import requests
from flask import Flask, request, jsonify
from concurrent.futures import ThreadPoolExecutor
import json

app = Flask(__name__)


def fetch_numbers(url):
    try:
        response = requests.get(url, timeout=0.5)
        if response.ok:
            data = response.json()
            return set(data['numbers'])
    except requests.exceptions.Timeout:
        return set()
    except Exception as e:
        return set()


@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    if not urls:
        return jsonify({'numbers': []}), 400

    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(fetch_numbers, url) for url in urls]

        combined_numbers = set()
        for future in futures:
            combined_numbers.update(future.result())

        combined_numbers = sorted(list(combined_numbers))

        return jsonify({'numbers': combined_numbers})


if __name__ == '__main__':
    app.run(host='localhost', port=8008)
