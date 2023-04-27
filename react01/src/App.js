import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}
const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
    </div>
  )
}
const Technologies = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IT -Kamasutra <code>src/App.js</code> and save to reload.
        </p>
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
  )
}

export default App;
