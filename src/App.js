import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css'; 

//components
import PromotionBanner from './components/PromotionBanner';
import Navbar from './components/Navbar';

function App(){
  return(
    <div>
      <PromotionBanner />
      <Navbar />
      </div>
  );
}

export default App;