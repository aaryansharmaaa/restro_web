import React, { useEffect, useState } from 'react'
import './Css/tablebooking.css';
import tablebboking from '../Components/Assets/tablebooking.jpg';
import tablebookigntable from '../Components/Assets/tablebooking-image.jpeg';

const TableBooking = () => {
  const [tables, setTables] = useState([
    { id: 1, name: 'Table-1', capacity: 2 },
    { id: 2, name: 'Table-2', capacity: 4 },
    { id: 3, name: 'Table-3', capacity: 2 },
    { id: 4, name: 'Table-4', capacity: 6 },
    { id: 5, name: 'Table-5', capacity: 4 },
    { id: 6, name: 'Table-6', capacity: 2 },
    { id: 7, name: 'Table-7', capacity: 2 },
    { id: 8, name: 'Table-8', capacity: 2 },
  ])

  const [info, setinfo] = useState([
    {
      name: '',
      email: '',
      date: '',
      time: '',
      numberofpeople: '',
    }
  ])

  const [booktab, setbooktab] = useState(
    { tabName: '' },
  )

  const [booked, setbooked] = useState([]);

  useEffect(() => {
    if (tables.length === 0) {
      alert('No table is empty kindly contact the manager to book the table for you');
    }
  }, [tables])

  const handleClick = (itemId) => {
    const remantab = tables.filter((prevtab) => prevtab.id !== itemId);
    setTables(remantab);
    const liclicked = tables.find((e) => e.id === itemId);
    setbooked((prev) => [...prev, liclicked]);
    setbooktab(() => ({
      tabName: tables.find((e) => e.id === itemId).name,
    }))
  }

  const submithandler = (e) => {
    e.preventDefault();
    

    alert(`Congratulation you table has benn booked 
    Your refrence id is 12548Xcf
    bookig has been made by name ${info.name}
    for ${info.capacity} number of people
    on ${info.date}
    WE ARE EAGERLY WAITING TO SERV YOU`);

    setinfo({
      name: '',
      email: '',
      date: '',
      time: '',
      numberofpeople: '',
    })

    setbooktab({
      tabName: '',
    })
  }

  const changehandler = (e) => {
    setinfo((prev) => ({
      ...prev, [e.target.name]: e.target.value,
    }))
  }


  return (
    <div className='tablebooking'>
      <div className="tablebooking-banner">
        <img src={tablebboking} />
      </div>
      <div className="tablebooking-parent">

        <div className="tablebooking-left">
          <div className="tablebooking-left-avlable">
            <ul className='tablebooking-ul'>
            <h1>Available tables...</h1>
              {
                tables && tables.map((item) => (
                  <li key={item.id} onClick={() => handleClick(item.id)}>
                    {item.name}  (Capacity)-{item.capacity} <img src={tablebookigntable} />
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="tablebooking-left-booked">
            <ul className='tablebooking-ul'>
            <h1>Booked tables...</h1>
              {
                booked && booked.map((item, index) => (
                  <li key={index}>
                    {item.name} (Capacity)-{item.capacity}
                    <img src={tablebookigntable} />

                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="tablebooking-right">
          <form onSubmit={submithandler}>
            <div className="information-container">
            <h1>Basic information...</h1>
              <label>
                Name:
                <br />
                <input type="text" required name='name' onChange={changehandler} value={info.name} />
              </label>
              <label>
                Email:
                <br />
                <input type="email" required name='email' onChange={changehandler} value={info.email} />
              </label>
              <label>
                Date:
                <br />
                <input type="date" required name='date' onChange={changehandler} value={info.date} />
              </label>
              <label>
                Time:
                <br />
                <input type="time" required name='time' onChange={changehandler} value={info.time} />
              </label>
              <label>
                Number of people:
                <br />
                <input type="number" required name='numberofpeople' onChange={changehandler} value={info.numberofpeople} />
              </label>
              <label>
                Select table:
                <br />
                <input type="text" required readOnly name='tablename' placeholder='Please select the table...' value={booktab.tabName} />
              </label>
            </div>
            <button className='tablebooking-button' type='submit'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default TableBooking
