import React from 'react';
import Head from '../../components/header/header';
import './homepage.css';
import Barraop from '../../components/optionPage/optionPage';
import Render from '../../components/render/render';






function Home() {
  return (
    <div className='boxHome'>
      <div >
        <Head />
      </div>

      <div className='pagina'>
        <Barraop />
        <div className='boxOnPage'>
          <Render />
        </div>
      </div>


    </div>
  );
}

export default Home;