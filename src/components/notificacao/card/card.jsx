import React from "react";
import './card.css';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        } else if (infos.tipo == 'curtidas-livro' || infos.tipo == 'curtidas-coment' || infos.tipo == 'curtidas-publi' || infos.tipo == "curtidas-Pcoment") {
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
            }
        }

    }

    const Action = () => {
        switch (infos.tipo) {
            case 'seguidores':
                return 'Começou a seguir você!';
            case 'curtidas-livro':
                return "curtiu seu livro!";
            case "livros-coment":
                return "Comentou no seu Livro!";
            case "curtidas-coment":
                return "Curtiu seu Comentario em um livro!";
            case "curtidas-publi":
                return "Curtiu sua Publicação!";
            case "curtidas-Pcoment":
                return "Curtiu seu Comentario em uma Publição!";
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
            <Link id="linky" to={(infos.tipo === 'favoritos')
                ? `/Ler/?id=${encodeURIComponent(JSON.stringify(user.id))}`
                : `/IHM/Busca/user?id=${encodeURIComponent(JSON.stringify(user.id))}`}>
                <img src={
                    (infos.tipo === 'favoritos' && user.imagem)
                        ? `http://10.1.1.211/livros/${user.user_id}/${user.nome}_${user.id}/${user.imagem}`
                        : (user.fotoPerfil ? `http://10.1.1.211/imagens/${user.fotoPerfil}` : '')
                } />
            </Link>
            <div className="not-content">
                <span className="not-nome">{infos.tipo == 'favoritos' ? user.nome : `@${user.nome}`}</span>
                <span className="not-not">{Action()}</span>
            </div>
        </span>
    );
}