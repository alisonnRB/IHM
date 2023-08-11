//! PAGE A SER TRABALHADA

import React from 'react';
import './feed.css';
import Card from './cardPost/cardPost';

//? page reponsavel por mostrar as postagens 
function Feed() {
  return (
    <div className='feed'>
      <div className='tittleFeed'><p>MEU FEED</p></div>

      <div className='renderPosts'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <button className='btPost'>+</button>

    </div>
    );
  }
  
  export default Feed;