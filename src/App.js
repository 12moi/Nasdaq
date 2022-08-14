
import React, { useState} from "react";
import Stock from './Stock';
import Calender from './components/Calender.jsx'
import DateRangePicker from './components/DateRangePicker'
import DateRange from './components/DateRange'
import './App.css';

function App() {
 
    const [company, setCompany] = useState([])
  
    const fetchData = () => {
      fetch("https://data.nasdaq.com/api/v3/company/OPEC/ORB.csv?start_date=1998-01-01&end_date=2003-03-06")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setCompany(data)
        })
    }
   

  return (
    <div className="App">
      <div className="Header">
        <div className='logo'>
          <p>Nasdaq</p>
        </div>
       <form>
       <input placeholder="Type here to search"/>
       <button onClick={fetchData}>Search</button>
       </form>
       <div className="calendar-container">
      
   </div>
       <div className='list'>
       {company.length > 0 && (
        <ul>
          {company.map(company => (
            <li key={company.id}>Name: {company.name}</li>
          ))}
        </ul>
      )}
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
      
        <h1>{company.name}</h1>
        
     
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
