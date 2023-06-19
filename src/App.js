
import './App.css';
import Dictionary from "./Dictionary";
import logo from "./images/book.jpeg";

const App = () => {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <header className="App-header">
          <p>Let's find out together what you are looking for ...</p>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>Coded by Olha S</small>
          <p/>
          <a href="https://github.com/olhaSlipushchenko/dictionary-react.git">  open-source code</a>
        </footer>
      </div>
    </div>
  );
}
export default App;