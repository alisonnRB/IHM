import React from 'react';
import {Routes, Route} from 'react-router-dom';


import './render.css';

import PrivateRoute from "../../privateRoute";

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
        <Route path='/perfil' element={<PrivateRoute><Perfil user={props.user}/></PrivateRoute>}></Route>
        <Route path='/perfil/gender' element={<PrivateRoute><Gender user={props.user}/></PrivateRoute>}></Route>
        <Route path='/perfil/MeusLivros' element={<PrivateRoute><MeusLivros/></PrivateRoute> }></Route>
        <Route path='/perfil/MeusFavoritos' element={<PrivateRoute><MeusFav/></PrivateRoute> }></Route>
        <Route path='/perfil/editaLivros' element={<PrivateRoute><EditaLivros/></PrivateRoute> }></Route>
        <Route path='/Busca' element={<PrivateRoute><Busca user={props.user}/></PrivateRoute> }></Route>
        <Route path='/Busca/user' element={<PrivateRoute><User/></PrivateRoute>}></Route>
        <Route path='/Livros' element={<PrivateRoute><Livros /></PrivateRoute>}></Route>
        <Route path='/Chat' element={<PrivateRoute><Chat /></PrivateRoute>}></Route>
        <Route path='/Feed' element={<PrivateRoute><Feed /></PrivateRoute>}></Route>
        <Route path='/Config' element={<PrivateRoute><Option /></PrivateRoute>}></Route>
      </Routes>
    </div>
    );
  }
  
  export default Render;