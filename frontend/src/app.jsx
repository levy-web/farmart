import React from 'react'
import Farm from './Farm'
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, {persistor} from './components/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Home,Animal, Animals, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import {MyAnimals, AnimalUpdator} from './components/farmer/myAnimals'
import { Orders } from './components/farmer/Orders'
import AddSell from './components/farmer/AddSell';
import Profile from './components/farmer/Profile';
import ProtectedRoute from './ProtectedRoutes';
import FarmerLogin from './components/farmer/Login';
import FarmerRegister from './components/farmer/Register';
import FarmersProtectedRoute from './FarmersProtectedRoutes';
import {Toaster} from 'react-hot-toast';


function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal" element={<Animals />} />
        <Route path="/animal/:animalName" element={<Animal />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* farm routes */}
        <Route path={'/farm/for_sale'} element={<FarmersProtectedRoute><MyAnimals/></FarmersProtectedRoute>} />
        <Route path={'/farm/add_for_sale'} element={<FarmersProtectedRoute><AddSell/></FarmersProtectedRoute>} />
        <Route path={'/farm/orders'} element={<FarmersProtectedRoute><Orders/></FarmersProtectedRoute>} />
        <Route path={'/farm/profile'} element={<FarmersProtectedRoute><Profile /></FarmersProtectedRoute>} />
        <Route path={'/farm/animals/:animalsName'} element={<FarmersProtectedRoute><AnimalUpdator/></FarmersProtectedRoute>} />
        <Route path='/farm' element={<FarmersProtectedRoute><Farm/></FarmersProtectedRoute>}/>
        <Route path='/farmer-login' element={<FarmerLogin/>}/>
        <Route path='/farmer-register' element={<FarmerRegister/>}/>
        
        <Route path="*" element={<PageNotFound />} />
        <Route path="/animal/*" element={<PageNotFound />} />
      </Routes>

      </PersistGate>      
    </Provider>  )
}

export default App