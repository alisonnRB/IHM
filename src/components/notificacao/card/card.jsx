import React from "react";
import './card.css';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import teste from "../../../imgs/x.jpeg";

import api from "../../../backend/controler/api_info";
import apiL from "../../../backend/controler/api_InfosLivro";

export default function Card(props) {
    const [infos, setInfos] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        setInfos(props);
    }, [props])

    useEffect(() => {
        if (infos && infos.info) {
            Busca();
        }
    }, [infos.info])

    const Busca = async () => {
        if (infos.tipo == 'seguidores') {
            const resposta = await api.enviar(infos.info.user_id);
            if (resposta.ok) {
                setUser(resposta.informacoes);
            }
        } else if (infos.tipo == 'curtidas') {
            const resposta = await api.enviar(infos.info.id_user);
            if (resposta.ok) {
                setUser(resposta.informacoes);
            }
        } else if (infos.tipo == 'livros-coment' || infos.tipo == "coment-coment" || infos.tipo == "publi") {
            const resposta = await api.enviar(infos.info.user);
            if (resposta.ok) {
                setUser(resposta.informacoes);
            }
        } else if (infos.tipo == 'favoritos') {
            const resposta = await apiL.enviar(infos.info.id_livro);
            if (resposta.ok) {
                setUser(resposta.informacoes);
                console.log(resposta.informacoes)
            }
        } 

    }

    const Action = () => {
        switch (infos.tipo) {
            case 'seguidores':
                return 'Começou a seguir você';
            case 'curtidas':
                if (infos.info.tipo == 'livro' && infos.info.coment == 0) {
                    return 'Curtiu seu Livro!';
                } else if (infos.info.tipo == 'livro' && infos.info.coment != 0) {
                    return 'Curtiu seu comentario em um livro!';
                } else if (infos.info.tipo == 'publi' && infos.info.coment == 0) {
                    return 'Curtiu sua publicação!';
                } else if (infos.info.tipo == 'publi' && infos.info.coment != 0) {
                    return 'Curtiu seu comentario em uma publicação!';
                }
            case "livros-coment":
                return "Comentou no seu Livro!";
            case "coment-coment":
                return "Respondeu seu comentario!";
            case "publi":
                return "Comentou na sua publicação!";
            case "favoritos":
                return "Tem novidades!!";

        }
    }


    return (
        <span className="not-card">
            <Link id="linky"><img src={infos.tipo == 'favoritos' ?  "http://192.168.255.56/livros/" + user.user_id + '/' + user.nome + '_' + user.id + '/' + user.imagem :  `http://192.168.255.56/imagens/` + user.fotoPerfil} /></Link>
            <div className="not-content">
                <span className="not-nome">{infos.tipo == 'favoritos' ? user.nome : `@${user.nome}`}</span>
                <span className="not-not">{Action()}</span>
            </div>
        </span>
    );
}