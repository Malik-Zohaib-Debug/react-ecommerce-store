import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalContext from './components/GlobalContext';
import './App.css'; 

//components
import PromotionBanner from './components/PromotionBanner';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App(){
  return(
    <div>
      <PromotionBanner />
      <GlobalContext>
        <Router>
          <Navbar />
          <Section />
        </Router>
      </GlobalContext>
    </div>
  );
}

export default App;