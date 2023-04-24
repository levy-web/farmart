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
import ProtectedRoute from './ProtectedRoutes';
import FarmerLogin from './components/farmer/Login';
import FarmerRegister from './components/farmer/Register';
import FarmersProtectedRoute from './FarmersProtectedRoutes';


function App() {


  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal" element={<Animals />} />
        <Route path="/animal/:animalName" element={<Animal />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        {/* farm routes */}
        <Route path={'/farm/for_sale'} element={<ProtectedRoute><MyAnimals/></ProtectedRoute>} />
        <Route path={'/farm/add_for_sale'} element={<ProtectedRoute><AddSell/></ProtectedRoute>} />
        <Route path={'/farm/orders'} element={<ProtectedRoute><Orders/></ProtectedRoute>} />
        <Route path={'/farm/profile'} element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path={'/farm/animals/:animalsName'} element={<ProtectedRoute><AnimalUpdator/></ProtectedRoute>} />
        <Route path='/farm' element={<ProtectedRoute><Farm/></ProtectedRoute>}/>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/animal/*" element={<PageNotFound />} />
      </Routes>

    </Provider>  )
}

export default App
