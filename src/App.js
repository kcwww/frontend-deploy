import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { ip } from './hide.js'

function App() {

  const test = async () => {
    try {
      const res = await axios.get(ip.ip);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const test2 = async () => {
    try {
      const res = await axios.post(ip.ip, {
        "name": "react",},
        {
          headers: {
          'Content-Type': 'application/json',
          }
        });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={test}>GET Test</button>
        <button onClick={test2}>POST Test2</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
