import React from "react";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import './busca.css';

import api from '../../../backend/controler/api_Usuarios';

export default function Busca() {
    const [pesquisa, setPesquisa] = useState('');

    const [users, setUsers] = useState('');

    const Busca = async () => {
        const resposta = await api.enviar(pesquisa);
        if (resposta.ok) {
            setUsers(resposta.users);
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

            let a =
                <span key={i} className="BoxCardPessoas">
                    <span className="cardPessoa">

                        <div id="perfilPessoa">
                            <Link className="Link" to={`/Busca/user?id=${encodeURIComponent(JSON.stringify(users[i].id))}`}>
                                <img src={`${'http://192.168.255.56/imagens/' + users[i].fotoPerfil}`} />
                            </Link>
                        </div>

                        <div className="infosPessoa">
                            <Link className="Link" to={`/Busca/user?id=${encodeURIComponent(JSON.stringify(users[i].id))}`}>
                                <span className="nomePessoa">{users[i].nome}</span>
                            </Link>
                            <span className="catPessoa">
                                <div className="categoria"><img src="" /></div>
                                <div className="opSeguir"><p>SEGUIR</p></div>
                            </span>
                        </div>

                    </span>
                </span >
                ;

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