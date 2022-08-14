
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        📕 I know that I know nothing ...
      </header>
      <main>
        <Dictionary defaultKeyword="sunrise"/>
      </main>
      <footer className="App-footer">
        <small>
        Coded by Olha S
        </small>
      </footer>
      </div>
    </div>
  );
}
