
import './App.css';

import BuyerNavbar from './components/buyer/BuyerNavbar';

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
