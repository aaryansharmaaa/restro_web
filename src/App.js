import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import TableBooking from './Pages/TableBooking';
import Footer from './Components/Footer/Footer';
import Veg from './Pages/Veg';
import NovVeg from './Pages/NovVeg';
import Chineas from './Pages/Chineas';
import vegbanner from '../src/Components/Assets/vegfoodbanner.jpg';
import nonvegBanner from '../src/Components/Assets/nonvegBanner.jpg';
import chineasfood from '../src/Components/Assets/chineasbanner.jpg';
import Searchedelement from './Pages/Searchedelement';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

const App = () => {
  const [loader,setLoader]=useState(true);
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home setLoader={setLoader}/>}></Route>
        <Route path='/veg' element={<Veg banner={vegbanner} setLoader={setLoader}/>}  ></Route>
        <Route path='/non-veg' element={<NovVeg banner={nonvegBanner} setLoader={setLoader}/>}></Route>
        <Route path='/chinese' element={<Chineas banner={chineasfood} setLoader={setLoader}/>}></Route>
        <Route path='/tablebooking' element={<TableBooking setLoader={setLoader}/>}></Route>
        <Route path='/searchedelement' element={<Searchedelement setLoader={setLoader}/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
    <Footer/>
    {
      loader && <div className='loader'>
        <div className='rotater'></div>
      </div>
    }
    </BrowserRouter>
  )
}

export default App
