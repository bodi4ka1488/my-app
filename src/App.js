import './App.css';
import FormAndInput from './components/FormAndInput/FormAndInput';
import FormWithNumber from './components/FormWithNumber/FormWithNumber';
// import NameForm from './components/NameForm/NameForm';
// import TextAndPicture from "./components/TextAndPicture/TextAndPicture"
// import StringComponent from "./components/StringComponent/StringComponent"
// import NamesLi from './components/NamesLi/NamesLi';
// import ButtonsAndCounter from './components/ButtonsAndCounter/ButtonsAndCounter';
// import ButtonOnOff from './components/ButtonOnOff/ButtonOnOff';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormWithNumber />
        <FormAndInput />

        {/* <ButtonOnOff text={"open"} />
        <ButtonsAndCounter stepUp={3} stepDown={2} />
        <NamesLi names={["loren", "Michael", "jorf", "bogdan"]} />
        <h1>
          Hello World
        </h1>
        <TextAndPicture />
        <StringComponent text={"I love js and front-end <3"} />
        <StringComponent text={"Whole my life is study"} /> */}

      </header>
    </div>
  );
}

export default App;
