
import './App.css';

function App() {
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
      </div>
    </div>
  );
}

export default App;
