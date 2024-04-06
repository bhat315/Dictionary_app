import Dicionary from "./components/Dicionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dicionary defaultKeyword="Love" />
        </main>
        <footer className="mt-5 footer">
          <p className="m-0 credit">Made with ❤️ by <a href="https://github.com/bhat315" target="_blank">Praveen Bhat</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
