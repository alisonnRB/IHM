import React from "react";
import { useState, useEffect } from "react";
import './busca.css';

import api from '../../../backend/controler/api_Usuarios';

import CardPessoa from "./cardPessoa/cardPessoa.jsx";
import Noti from "../../notificacao/notificacao.jsx";

import words from './busca.json';

export default function Busca() {
    const [theme, setTheme] = useState('light');
    const [pesquisa, setPesquisa] = useState('');

    const [users, setUsers] = useState('');

    const [Uword, setUword] = useState('EN');

    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
            idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
    }

    const Busca = async () => {
        const resposta = await api.enviar(pesquisa);
        if (resposta.ok) {
            setUsers(resposta.informacoes);
        }
    }

    useEffect(() => {
        select_idioma();
        let a = localStorage.getItem('tema');
        if(a){
          setTheme(a);
        }
    }, []);


    useEffect(() => {
        Busca();
    }, [pesquisa]);

    const geraUser = () => {
        let keys = Object.keys(users).length;
        const list = [];
        for (let i = 0; i < keys; i++) {
            if (users && users[i]) {
                let a = <CardPessoa key={i} user={users[i]}/>

                list.push(a);
            }

        }

        return list;
    }

    return (
        <div className='TelaBusca'>
            <Noti />
            <span id='titlePerfil' className={`${theme == 'light' ? null : 'dark'}`}>{Uword.title}</span>
            <span className='boxLivros'>
                <input type='text' id='searchText' placeholder={Uword.buscar} value={pesquisa} onChange={(e) => { setPesquisa(e.target.value) }} />
                <div id='searchImg'></div>
            </span>
            <div className="pessoasBOX">

                {geraUser()}

            </div>
        </div>
    );
}