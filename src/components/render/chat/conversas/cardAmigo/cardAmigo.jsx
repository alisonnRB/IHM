import React from "react";
import './cardAmigo.css';
import { useState, useEffect } from "react";

import api from '../../../../../backend/controler/api_info';

export default function CardAmigo(props){
    const [user, setUser] = useState({});
    const [info, setInfo] = useState({});
    const [foto, setFoto] = useState('');
    
    const [set, setSet] = useState(false);

    useEffect(()=>{
        if(props.amigo && props.amigo[0]){
            setUser(props.amigo[0]);
        }
    },[props]);

    useEffect(()=>{
        if(user.user_id){
            Busca();
        }
    },[user]);

    useEffect(()=>{
        if(props.selecionado === info){
            setSet(true);
        }else{
            setSet(false);
        }
    },[props.selecionado])

    useEffect(() => {
        if (typeof info.fotoPerfil == "string") {
            setFoto("http://192.168.255.56/imagens/" + info.fotoPerfil);
        }
    }, [info.fotoPerfil]);


    const Busca = async () => {
        const resposta = await api.enviar(user.user_id);
        if(resposta.ok){
            setInfo(resposta.informacoes);
        }
    }

    return(
        <li className={`${set ? 'set' : null}`} onClick={()=>{props.setSelecionado(info)}}>
        <img src={foto} />
        <div className='nomes'>
          <p>{info.nome? `@${info.nome}` : '...'}</p>
          <p>{info.nome? `@${info.nome}` : '...'};;aaa</p>
        </div>
      </li>
    );
}