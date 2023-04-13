
import './App.css';
// import { Provider } from 'react-redux';
// import store from './components/buyer/buyerpage/store';


import BuyerNavbar from './components/buyer/navbar/BuyerNavbar';
// import BuyerPage from './components/buyer/buyerpage/BuyerPage';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <BuyerNavbar />
      {/* <BuyerPage /> */}
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
