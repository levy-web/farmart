import React from 'react'
import Farm from './Farm'
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import { Home,Animal, Animals, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import {MyAnimals, AnimalUpdator} from './components/farmer/myAnimals'
import { Orders } from './components/farmer/Orders'
import AddSell from './components/farmer/AddSell';
import Profile from './components/farmer/Profile';


function App() {


  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal" element={<Animals />} />
        <Route path="/animal/:id" element={<Animal />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* farm routes */}
        <Route path={'/farm/for_sale'} element={<MyAnimals/>} ></Route>
        <Route path={'/farm/add_for_sale'} element={<AddSell/>} ></Route>
        <Route path={'/farm/orders'} element={<Orders/>} ></Route>
        <Route path={'/farm/profile'} element={<Profile />} ></Route>
        <Route path={'/farm/animals/:animalsName'} element={<AnimalUpdator/>} ></Route>


        <Route path='/farm' element={<Farm/>}/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/animal/*" element={<PageNotFound />} />
      </Routes>
      
    </Provider>  )
}

export default App