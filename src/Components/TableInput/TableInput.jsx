import React from 'react'
import { useState } from 'react'
import './Css/tablebooking.css';
const TableBooking = () => {

  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', capacity: 4 },
    { id: 2, name: 'Table 2', capacity: 2 },
    { id: 3, name: 'Table 3', capacity: 5 },
    { id: 4, name: 'Table 4', capacity: 8 },
    { id: 5, name: 'Table 5', capacity: 5 },

  ]);
  const [booking, setBooking] = useState([]);

  const [bookingData, setBookingdata] = useState({
    tableName: '',
    numberOfpeople: '',
  })

  const handleTableClick = ((tableId) => {
    setBookingdata({
      tableName: tables.find((tab) => tab.id === tableId).name,
      numberOfpeople: 1,
    });
  });

  const handleInputChange = (e) => {
    setBooking((pre) => ({
      ...pre, [e.targetname]: e.target.value,
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { tableName, numberOfpeople } = bookingData;
    if (tableName && numberOfpeople > 0) {
      setBooking((prevBookings) => [
        ...prevBookings,
        { tableName, numberOfpeople },
      ]);
      setBookingdata({
        tableName: '',
        numberOfpeople: 1,
      });
    }
  };

  return (
    <div className='tablebooking'>
      <h1>Table Booking System</h1>
      <div className='tablebooking-available-table'>
        <h2>Available Tables</h2>
        <ul>
          {tables.map((table) => (
            <li key={table.id} onClick={() => handleTableClick(table.id)}>
              {table.image}
              {table.name} (Capacity: {table.capacity})
            </li>
          ))}
        </ul>
      </div>

      <div className='tablebooking-available-table'>
        <h2>Booked Tables</h2>
        <ul>
          {booking.map((booking) => (
            <li key={booking.id}>
              {booking.tableName} - {booking.numberOfpeople} people
            </li>
          ))}
        </ul>
      </div>

      <div className='booking-bottom'>
        <h2 className='booking-heading'>Booking Form</h2>
        <form onSubmit={handleBookingSubmit}>
          <label>
            Selected Table:
            <input
              type="text"
              name="tableName"
              value={bookingData.tableName}
              readOnly
              required
            />
          </label>
          <br />
          <label>
            No of People:
            <input
              type="number"
              name="numberOfPeople"
              value={bookingData.numberOfpeople}
              onChange={handleInputChange}
              min="1"
              required
            />
          </label>
          <br />
            <button type="submit">Book Table</button>
        </form>
      </div>
    </div>
  );
};

export default TableBooking