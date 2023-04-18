import './App.css';
import FarmerNav from './components/farmer/FarmerNav';
import MyAnimals from './components/farmer/myAnimals/MyAnimals';
import AnimalUpdator from './components/farmer/myAnimals/AnimalUpdator';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import AddSell from './components/farmer/AddSell';
import Orders from './components/farmer/Orders/Orders';
import Profile from './components/farmer/Profile';



function App() {
  return (
    <Provider store = {store}>
      <FarmerNav />
      <Routes>
        <Route path={'/for_sale'} element={<MyAnimals/>} ></Route>
        <Route path={'/add_for_sale'} element={<AddSell/>} ></Route>
        <Route path={'/orders'} element={<Orders/>} ></Route>
        <Route path={'/profile'} element={<Profile />} ></Route>
        <Route path={'/animals/:animalsName'} element={<AnimalUpdator/>} ></Route>
      </Routes>
    </Provider>
  );
}

export default App;
