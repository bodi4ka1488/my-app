import './App.css';
import TextAndPicture from "./components/TextAndPicture/TextAndPicture"
import StringComponent from "./components/StringComponent/StringComponent"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World
        </h1>
        <TextAndPicture />
        <StringComponent text={"I love js and front-end <3"} />
        <StringComponent text={"Whole my life is study"} />

      </header>
    </div>
  );
}

export default App;
