import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/home.jsx';
import Login from './paginas/autenticar/index.jsx';
import Homepage from './paginas/homepage/homePage.jsx';
import NovoLivro from './paginas/novoLivro/novoLivro.jsx';
import Escrever from './paginas/escrever/escrever.jsx';
import Edicao from './paginas/edicao/edicao.jsx';
import Ler from './paginas/ler/ler.jsx';
import Publi from './paginas/novaPubli/novaPubli.jsx';
import PrivateRoute from './privateRoute';
import './App.css';

const themes = {
   dark: {
      '--header-bg': 'black',
   },
   light: {
      '--header-bg': '#B7CFD3',
   },
};

function App() {
   const [theme, setTheme] = useState('no');


   const toggleTheme = () => {
      const tema = localStorage.getItem('tema');
      setTheme(tema);
   };

   const applyTheme = () => {

      const selectedTheme = themes[theme];

      Object.entries(selectedTheme).forEach(([property, value]) => {
         document.documentElement.style.setProperty(property, value);
      });
   };

   useEffect(() => {
      toggleTheme();
   }, []); // Chama toggleTheme uma vez quando o componente é montado

   useEffect(() => {
      if(theme && theme !== 'no'){
         applyTheme();
      }
   }, [theme]); 

   return (
      <Router>
         <Routes>
            <Route exact path='*' element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/IHM/perfil/MeusLivros/escreva/editar/" element={<PrivateRoute><Edicao /></PrivateRoute>} />
            <Route path="/Ler/" element={<PrivateRoute><Ler /></PrivateRoute>} />
            <Route path="/IHM/*" element={<PrivateRoute><Homepage /></PrivateRoute>} />
            <Route path="/novo-livro" element={<PrivateRoute><NovoLivro /></PrivateRoute>} />
            <Route path="/novaPubli" element={<PrivateRoute><Publi /></PrivateRoute>} />
            <Route path="/IHM/Perfil/MeusLivros/escreva/" element={<PrivateRoute><Escrever /></PrivateRoute>} />
         </Routes>
      </Router>
   );
}

export default App;
