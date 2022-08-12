
// import axios from "axios";
import React, { useState, useEffect } from "react";
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
       <div className='list'>
       {stock.map((stock) => (
        <p >{stock.title}</p>
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
      
        <h1>This is a chart</h1>
        <select>
      <option value="actual value 1">Display Text 1</option>
      <option value="actual value 2">Display Text 2</option>
      <option value="actual value 3">Display Text 3</option>
     </select>
      </div>
    </div>
  );
}

export default App;
