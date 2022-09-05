import './App.css';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './Products/Products';
import Product from './Products/Product/Product';

// import FormAndInput from './components/FormAndInput/FormAndInput';
// import FormWithNumber from './components/FormWithNumber/FormWithNumber';
// import NameForm from './components/NameForm/NameForm';
// import TextAndPicture from "./components/TextAndPicture/TextAndPicture"
// import StringComponent from "./components/StringComponent/StringComponent"
// import NamesLi from './components/NamesLi/NamesLi';
// import ButtonsAndCounter from './components/ButtonsAndCounter/ButtonsAndCounter';
// import ButtonOnOff from './components/ButtonOnOff/ButtonOnOff';
function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <SideBar className="SideBar" />
      <div className='main-contex'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/categorie/:id1' element={<Products />} />
          <Route path='/categorie/:id1/:id' element={<Product />} />
        </Routes>
      </div>













      {/* <FormWithNumber />
        <FormAndInput /> */}

      {/* <ButtonOnOff text={"open"} />
        <ButtonsAndCounter stepUp={3} stepDown={2} />
        <NamesLi names={["loren", "Michael", "jorf", "bogdan"]} />
        <h1>
          Hello World
        </h1>
        <TextAndPicture />
        <StringComponent text={"I love js and front-end <3"} />
        <StringComponent text={"Whole my life is study"} /> */}

    </div >
  );
}

export default App;
