import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home,Animal, Animals, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"


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
        <Route path="*" element={<PageNotFound />} />
        <Route path="/animal/*" element={<PageNotFound />} />
      </Routes>
    </Provider>  )
}

export default App