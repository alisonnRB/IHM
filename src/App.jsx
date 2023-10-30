import React from 'react';
import Login from './paginas/login';
import Homepage from './paginas/homepage/homePage';
import NovoLivro from './paginas/novoLivro/novoLivro';
import Escrever from './paginas/escrever/escrever';
import Edicao from './paginas/edicao/edicao';
import Ler from './paginas/ler/ler';
import Publi from './paginas/novaPubli/novaPubli';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//? importa da biblioteca do react o sistema de rotas

import PrivateRoute from './privateRoute';


import './App.css';

function App() {

   return (
      //? a tag Router acomoda os caminhos da pagina
      <Router>
         <Routes>
            <Route path='/login' element={<Login />} />
         //TODO o elemento privateRoute é um elemento que criei para que só seja possivel acessar os elementos
            //TODO da HomePage apenas se o token for valido!!
            <Route path='/perfil/MeusLivros/escreva/editar/' element={<PrivateRoute><Edicao /></PrivateRoute>}></Route>
            <Route path='/Ler/' element={<PrivateRoute><Ler /></PrivateRoute>}></Route>
            <Route exact path='*' element={<PrivateRoute><Homepage /></PrivateRoute>} />
            <Route path='/novo-livro' element={<PrivateRoute><NovoLivro /></PrivateRoute>}></Route>
            <Route path='/novaPubli' element={<PrivateRoute><Publi /></PrivateRoute>}></Route>
            <Route path='/Perfil/MeusLivros/escreva/' element={<PrivateRoute><Escrever /></PrivateRoute>}></Route>
         </Routes>
      </Router>

   );
}

export default App;