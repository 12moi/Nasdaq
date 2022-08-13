

import React, { useState, useEffect } from "react";
// import Calendar from 'react-calendar';

import './App.css';

function App() {
  const [stock, setStock] = useState([]);
  
   useEffect(() => {
      fetch('https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setStock(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div className="App">
      <div className="Header">
        <div className='logo'>
          <p>Nasdaq</p>
        </div>
       <form>
       <input placeholder="Type here to search"/>
       <button>Search</button>
       </form>
       <div className="calendar-container">
       {/* <div>
        <Calendar
          // onChange={this.onChange}
          value={this.state.date}
        />
      </div> */}
      
   </div>
   
 
       <div className='list'>
       {stock.map((stock) => (
        <p key={stock.id}>{stock.title}</p>
      ))}
        <ul>
          <li>
            Me
          </li>
          <li>
            Mey
          </li>
          <li>
            Mess
          </li>
        </ul>
      </div>
      </div>
      
      <div className='chart'>
      
        <h1>{stock.id}</h1>
        <select>
      <option value="actual value 1">Closing price</option>
      <option value="actual value 2">Opening price</option>
     
     </select>
     
      </div>
      <div className='time'>
        <button className='time-button'>june 5, 1998 - Dec 31, 2018</button>
      </div>
    </div>
  );
}

export default App;
