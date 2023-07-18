import React from 'react';
import Head from '../../components/header/header';
import './homepage.css';
import Barraop from '../../components/optionPage/optionPage';
import Render from '../../components/render/render';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function Home() {
  return (
    <div className='boxHome'>
      <div >
        <Head />
      </div>

      <Router>

      <div className='pagina'>
        <Barraop />
        <div className='boxOnPage'>
          <Render />
        </div>
      </div>

      </Router>
      
    </div>
  );
}

export default Home;