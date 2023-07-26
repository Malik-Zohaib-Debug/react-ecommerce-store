import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css'; 

//components
import PromotionBanner from './components/PromotionBanner';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App(){
  return(
    <div>
      <PromotionBanner />
      <Navbar />
      <Section />
    </div>
  );
}

export default App;