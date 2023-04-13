
import './App.css';

import BuyerNavbar from './components/buyer/navbar/BuyerNavbar';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BuyerNavbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
