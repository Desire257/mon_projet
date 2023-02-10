import logo from './logo.svg';
import './App.css';
import image from './image.jpg';
function App() {
  return (
    <div className="App">

      <h1> Bienvenu au cfitech  koekelberg merci</h1>
      <img src={image} alt='' />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
