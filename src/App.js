

// import React, { useState, useEffect } from "react";
import Stock from './Stock';
import Calender from './components/Calender.jsx'
import DateRangePicker from './components/DateRangePicker'
import DateRange from './components/DateRange'
import './App.css';

function App() {
  // const [stock, setStock] = useState([]);
  
  
   

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
       {/* {stock.map((stock) => (
        <p key={stock.id}>{stock.title}</p>
      ))} */}
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
      
        {/* <h1>{stock.id}</h1> */}
        
     
      </div>
      <Stock></Stock>
      {/* <div className="graph">
      <h1>Grapthical data</h1>
     </div> */}
      <div className='time'>
      <Calender />
        <DateRange/>
        
      </div>
      <DateRangePicker/>
    </div>
  );
}

export default App;
