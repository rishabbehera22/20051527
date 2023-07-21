import React from 'react'
import audit from '../src/components/audit.jpg'
const Analyst = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="flex justify-center items-center h-screen">
  <div className="bg-white shadow-md rounded p-4 flex flex-col w-96">
    <h2 className="text-2xl font-bold mb-4">Train Booking</h2>
    <form>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="from">
          From
        </label>
        <select
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          id="from"
          name="from"
        >
          <option value="" disabled="" selected="">
            Select city
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
          {/* Add more Indian cities here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="to">
          To
        </label>
        <select
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          id="to"
          name="to"
        >
          <option value="" disabled="" selected="">
            Select city
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
          {/* Add more Indian cities here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="date"
          id="date"
          name="date"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="class">
          Class
        </label>
        <select
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          id="class"
          name="class"
        >
          <option value="" disabled="" selected="">
            Select class
          </option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Book Now
      </button>
    </form>
  </div>
</div>
        </div>
    );
};

export default Analyst;