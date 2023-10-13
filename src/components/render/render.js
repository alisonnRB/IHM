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
import MeusFav from './perfil/meusFav/meusFav';
import EditaLivros from './editaLivros/editaLivros';
import Busca from './busca/busca';
import User from './busca/perfisUser/perfisUser';
//? o componente render é reponsavel por renderizar as paginas do site

function Render(props) {
  //? o render está recebendo os paramentors por props para fazer a construção da page
  return (
    <div className='render' id='render'>
      <Routes>
        <Route path='/perfil' element={<Perfil user={props.user}/>}></Route>
        <Route path='/perfil/gender' element={<Gender user={props.user}/>}></Route>
        <Route path='/perfil/MeusLivros' element={<MeusLivros/> }></Route>
        <Route path='/perfil/MeusFavoritos' element={<MeusFav/> }></Route>
        <Route path='/perfil/editaLivros' element={<EditaLivros/> }></Route>
        <Route path='/Busca' element={<Busca/> }></Route>
        <Route path='/Busca/user' element={<User/>}></Route>
        <Route path='/Livros' element={<Livros />}></Route>
        <Route path='/Chat' element={<Chat />}></Route>
        <Route path='/Feed' element={<Feed />}></Route>
        <Route path='/Config' element={<Option />}></Route>
      </Routes>
    </div>
    );
  }
  
  export default Render;