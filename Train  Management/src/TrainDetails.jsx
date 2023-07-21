import React from 'react';

const TrainDetails = () => {
  // Replace the placeholder data with actual train details fetched from the API or props
  const trainDetails = {
    trainName: 'Chennai Express',
    trainNumber: '2344',
    ticketsLeft: 8,
    schedule: 'Daily',
    arrivalTiming: '10:00 AM',
    departureTimingLastDay: '11:30 PM',
    departureTimingTwoDaysAgo: '11:00 PM',
    // Add the image source of the train photo here
    trainPhoto: 'https://t3.ftcdn.net/jpg/04/54/02/88/360_F_454028890_YAM5KPK9MmuSRG9ZrffVLIeuApja5DT2.jpg',
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="relative">
        <img
          src={trainDetails.trainPhoto}
          alt={trainDetails.trainName}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-black rounded-md">
          <h2 className="text-3xl font-bold text-white">{trainDetails.trainName}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mt-2">Train Number: {trainDetails.trainNumber}</p>
        <p className="text-gray-600 mt-2">Tickets Left: {trainDetails.ticketsLeft}</p>
        <p className="text-gray-600 mt-2">Schedule: {trainDetails.schedule}</p>
        <p className="text-gray-600 mt-2">Arrival Timing: {trainDetails.arrivalTiming}</p>
        <p className="text-gray-600 mt-2">Departure Timing (Last Day): {trainDetails.departureTimingLastDay}</p>
        <p className="text-gray-600 mt-2">Departure Timing (Two Days Ago): {trainDetails.departureTimingTwoDaysAgo}</p>
      </div>
    </div>
  );
};

export default TrainDetails;
