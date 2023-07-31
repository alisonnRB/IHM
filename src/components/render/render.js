import React from 'react';
import {Routes, Route} from 'react-router-dom';


import './render.css';

import Perfil from './perfil/perfil';
  import Edit from './perfil/edit/edit'
import Livros from './livros/livros';
import Chat from './chat/chat';
import Feed from './feed/feed';
import Option from './option/option';




function Render() {


  
  return (
    <div className='render'>
      <Routes>
        <Route path='/Perfil' element={<Perfil />}></Route>
          <Route path='/Perfil/Edit' element={<Edit />}></Route>
        <Route path='/Livros' element={<Livros />}></Route>
        <Route path='/Chat' element={<Chat />}></Route>
        <Route path='/Feed' element={<Feed />}></Route>
        <Route path='/Config' element={<Option />}></Route>
      </Routes>
    </div>
    );
  }
  
  export default Render;