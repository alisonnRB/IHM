import React from 'react';
import Login from './paginas/login';
import Homepage from './paginas/homepage/homePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivateRoute from './privateRoute';


import './App.css';


function App() {
 return (
   <Router>
      <Routes>
         <Route path='/login' element={ <Login />}/>
         <Route path='*' element={<PrivateRoute><Homepage /></PrivateRoute>}/>
      </Routes>
   </Router>
  
 );
}

export default App;