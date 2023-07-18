import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './render.css';

import Perfil from './perfil/perfil';
import Livros from './livros/livros';
import Chat from './chat/chat';
import Feed from './feed/feed';
import Option from './option/option';


function Render() {
  
  return (
    <div className='render'>
      <Routes>
        <Route exact path='/' element={<Perfil />}></Route>
        <Route path='/Livros' element={<Livros />}></Route>
        <Route path='/Chat' element={<Chat />}></Route>
        <Route path='/Feed' element={<Feed />}></Route>
        <Route path='/Config' element={<Option />}></Route>
      </Routes>
    </div>
    );
  }
  
  export default Render;