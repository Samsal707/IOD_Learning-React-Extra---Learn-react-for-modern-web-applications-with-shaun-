import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
function App() {
  let url = "https://reactjs.org"
  return (
    <div className="App">
      <Greetings />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is cool.
        </p>
        <a
          className="App-link"
          href={url}
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
