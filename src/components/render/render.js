import React from 'react';
import {Routes, Route} from 'react-router-dom';


import './render.css';

import Perfil from './perfil/perfil';
import Livros from './livros/livros';
import Chat from './chat/chat';
import Feed from './feed/feed';
import Option from './option/option';
import Gender from './favGender/gender';
import MeusLivros from './perfil/meusLivros/meusLivros';
import EditaLivros from './editaLivros/editaLivros';

//? o componente render é reponsavel por renderizar as paginas do site

function Render(props) {
  //? o render está recebendo os paramentors por props para fazer a construção da page
  return (
    <div className='render' id='render'>
      <Routes>
        <Route path='/Perfil' element={<Perfil user={props.user}/>}></Route>
        <Route path='/gender' element={<Gender user={props.user}/>}></Route>
        <Route path='/MeusLivros' element={<MeusLivros/> }></Route>
        <Route path='/editaLivros' element={<EditaLivros/> }></Route>
        <Route path='/Livros' element={<Livros />}></Route>
        <Route path='/Chat' element={<Chat />}></Route>
        <Route path='/Feed' element={<Feed />}></Route>
        <Route path='/Config' element={<Option />}></Route>
      </Routes>
    </div>
    );
  }
  
  export default Render;