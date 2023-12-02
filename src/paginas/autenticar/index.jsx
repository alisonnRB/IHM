import React, { useState } from 'react';
import './index.css';

import logo from "../../imgs/logo.png";
import x from "../../imgs/sair.png";

import LoginForm from "./login/index.jsx";
import Cadastro from './forms/form_cadastro.jsx';

export default function Login() {
    const [select, setSelect] = useState(false);

  return (
    <div id="box">

            <div className='card-log'>
                <span id="head-log">
                    <img src={logo} className='logo-log'/>
                    <img src={x} className='x-log'/>
                </span>

                <span id="bt-log">
                    <button onClick={()=>{setSelect(false)}} className={`bt-log ${!select ? 'this' : ''}`}>LOG-IN</button>
                    <button onClick={()=>{setSelect(true)}} className={`bt-log ${select ? 'this' : ''}`}>CADASTRE-SE</button>
                </span>

                <div id='cotente-form-log'>
                    {!select ? <LoginForm /> : <Cadastro setSelect={setSelect}/>}
                </div>
            </div>

    </div>
  );
}