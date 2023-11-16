import React from 'react';
import './warning.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../../backend/controler/api_DellConta';

export default function Warning(props) {
    const navigate = useNavigate();
    const [senha, setSenha] = useState('');
    const [message, setmessage] = useState('');

    const Dell = async () =>{
        const resposta = await api.enviar(senha);
        if(resposta.ok){
            sessionStorage.clear();
            localStorage.clear();
            navigate('/login');
        }else{
            setmessage(resposta.informacoes);
        }
    }

    return(
        <div className='boxWarning'>

            <div className='warning'>
                <div className='titleWarning'>
                    confirme sua senha para excluir a conta!
                </div>
                <div className='inputBox'>
                    <input type='text' value={senha} onChange={(e)=>{setSenha(e.target.value)}} className='wPass'/>
                    <span className='wMSG'>{message}</span>
                </div>
                <span className='warningBts'>
                    <button className='Wbt canc' onClick={()=>{props.setAbre(false)}}>CANCELAR</button>
                    <button className='Wbt dell' onClick={()=>{Dell()}}>EXCLUIR</button>
                </span>
            </div>

        </div>
    );
}