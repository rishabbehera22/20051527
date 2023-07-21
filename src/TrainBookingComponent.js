import React, { useEffect, useState } from 'react';
import { fetchTrainData } from './Trainapi';


function TrainBookingComponent() {
    const [trainData, setTrainData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace 'YOUR_ACCESS_TOKEN' with the actual access token obtained from the authorization API
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk5NDExNDksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudCIsImNsaWVudElEIjoiMGRmOGY4YjctOTAwNi00MjAwLTg2NzQtYjE2YWYxMmRkMjEwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDUxNTI3In0.F-9DGTE5d2cEdueN0xWSDdUAGoB6cHFjBYWcMN-hiVs';

        // Call the fetchTrainData function from the trainApi.js file
        fetchTrainData(accessToken)
            .then((data) => {
                if (Array.isArray(data)) {
                    setTrainData(data);
                    console.log(data);
                } else {
                    setError('Invalid data format received from the API.');
                }
            })
            .catch((error) => {
                setError('Failed to fetch train data. Please try again later.');
                console.error(error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            {/* Your other React components and JSX here */}
            {error ? (
                <div className="text-red-500 font-bold mb-4">
                    {error}
                </div>
            ) : (
                <div className="bg-white mt-4 shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="py-2 px-4">Train Name</th>
                                <th className="py-2 px-4">Train Number</th>
                                <th className="py-2 px-4">Departure Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainData.map((train) => (
                                <tr key={train.trainNumber}>
                                    <td className="py-2 px-4 text-center">{train.trainName}</td>
                                    <td className="py-2 px-4 text-center">{train.trainNumber}</td>
                                    <td className="py-2 px-4 text-center">{train.departureTime.Hours}:{train.departureTime.Minutes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default TrainBookingComponent;
