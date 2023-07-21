import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
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
      <tr>
        <td className="py-2 px-4">Shatabdi Express</td>
        <td className="py-2 px-4">12345</td>
        <td className="py-2 px-4">08:30 AM</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Rajdhani Express</td>
        <td className="py-2 px-4">67890</td>
        <td className="py-2 px-4">06:45 PM</td>
      </tr>
  
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Newsletter