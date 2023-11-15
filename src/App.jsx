import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login';
import Homepage from './paginas/homepage/homePage';
import NovoLivro from './paginas/novoLivro/novoLivro';
import Escrever from './paginas/escrever/escrever';
import Edicao from './paginas/edicao/edicao';
import Ler from './paginas/ler/ler';
import Publi from './paginas/novaPubli/novaPubli';
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
   console.log(theme)


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
            <Route path="/login" element={<Login />} />
            <Route path="/perfil/MeusLivros/escreva/editar/" element={<PrivateRoute><Edicao /></PrivateRoute>} />
            <Route path="/Ler/" element={<PrivateRoute><Ler /></PrivateRoute>} />
            <Route exact path="*" element={<PrivateRoute><Homepage /></PrivateRoute>} />
            <Route path="/novo-livro" element={<PrivateRoute><NovoLivro /></PrivateRoute>} />
            <Route path="/novaPubli" element={<PrivateRoute><Publi /></PrivateRoute>} />
            <Route path="/Perfil/MeusLivros/escreva/" element={<PrivateRoute><Escrever /></PrivateRoute>} />
         </Routes>
      </Router>
   );
}

export default App;
