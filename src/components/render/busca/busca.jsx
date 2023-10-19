import React from "react";
import { useState, useEffect } from "react";
import './busca.css';

import api from '../../../backend/controler/api_Usuarios';


import CardPessoa from "./cardPessoa/cardPessoa";

export default function Busca(props) {
    const [pesquisa, setPesquisa] = useState('');

    const [users, setUsers] = useState('');

    const Busca = async () => {
        const resposta = await api.enviar(pesquisa);
        if (resposta.ok) {
            setUsers(resposta.informacoes);
        }

    }

    useEffect(() => {
        Busca();
    }, []);

    useEffect(() => {
        Busca();
    }, [pesquisa]);

    const geraUser = () => {
        let keys = Object.keys(users).length;
        const list = [];
        for (let i = 0; i < keys; i++) {

            let a = <CardPessoa key={i} user={users[i]} id={props.user.id} />

            list.push(a);
        }

        return list;
    }

    return (
        <div className='TelaBusca'>
            <span id='titlePerfil'>USUÁRIOS</span>
            <span className='boxLivros'>
                <input type='text' id='searchText' placeholder='Buscar' value={pesquisa} onChange={(e) => { setPesquisa(e.target.value) }} />
                <div id='searchImg'></div>
            </span>
            <div className="pessoasBOX">

                {geraUser()}

            </div>
        </div>
    );
}