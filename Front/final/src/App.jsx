import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mainlayout from './layouts/Mainlayout';
import Faq from './pages/Faq';
import CardsDetail from './pages/CardsDetail';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Error from './pages/Error';
import AdminPanel from './pages/AdminPanel';
import CardsPanel from './components/CardsPanel';
import UserPanel from './components/UserPanel';
import PrivateRoute from './pages/Routes';
import About from './pages/About';
import Events from './pages/Events';
import SearchDetail from './components/SearchDetail';
import CardUpdatePanel from './components/CardUpdatePanel';
import UserUpdate from './components/UserUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/card/:id' element={< CardsDetail />}></Route>
          <Route path='/shop/:id' element={< SearchDetail />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>

          <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path='/add' element={<AdminPanel />}></Route>
            <Route path='/cardsPanel' element={<CardsPanel />}></Route>
            <Route path='/cardUpdate/:id' element={<CardUpdatePanel />}></Route>
            <Route path='/userUpdate/:id' element={<UserUpdate />}></Route>
            <Route path='/usersPanel' element={<UserPanel />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<Error />}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
