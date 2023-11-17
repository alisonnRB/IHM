import React from 'react';
import './warning.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../../backend/controler/api_DellConta';

import words from './warning.json';

export default function Warning(props) {
    const navigate = useNavigate();
    const [senha, setSenha] = useState('');
    const [message, setmessage] = useState('');

    const [Uword, setUword] = useState('EN');
    
    useEffect(() => {
        select_idioma();
    }, [])

    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
            idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
    }

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
                    {Uword.confirmar}
                </div>
                <div className='inputBox'>
                    <input type='text' value={senha} onChange={(e)=>{setSenha(e.target.value)}} className='wPass'/>
                    <span className='wMSG'>{message}</span>
                </div>
                <span className='warningBts'>
                    <button className='Wbt canc' onClick={()=>{props.setAbre(false)}}>{Uword.cancelar}</button>
                    <button className='Wbt dell' onClick={()=>{Dell()}}>{Uword.excluir}</button>
                </span>
            </div>

        </div>
    );
}