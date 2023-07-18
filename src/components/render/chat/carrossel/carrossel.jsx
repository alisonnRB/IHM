import React from 'react';
import './carrossel.css';


function Carrossel() {
  return (
    <div className='carrossel'>
      <div className='tecla'>&#60;</div>

      <div className='boxScroll'>
        <div className='tittleScroll'><p>Pendentes</p></div>
        
      <ul className='scroll'>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>

        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
        <li><img src="logo.png" alt="" /></li>
      </ul>

      </div>




      <div className='tecla'>&#62;</div>
    </div>
    );
  }
  
  export default Carrossel;