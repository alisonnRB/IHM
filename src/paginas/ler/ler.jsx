import React from "react";
import './ler.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from '../../backend/controler/api_info';

import logo from '../../imgs/logo.png';
import Fav from "../../imgs/estrela.png";
import Curti from "../../imgs/coracao.png";

import Page from "./paginas/page";
import BtFloatH from "../escrever/btFloatH/btFloatH";

export default function Ler() {
    const location = useLocation();
    const [idLivro, setIdLivro] = useState(0);

    const [userId, setUserId] = useState(0);
    const [infos, setInfos] = useState('');

    const [cor, setCor] = useState('');

    const [tituloL, setTituloL] = useState('');
    const [foto, setFoto] = useState('');


    useEffect(() => {
        const idLivroG = new URLSearchParams(location.search).get('id');
        setIdLivro(idLivroG);
    }, [location]);

    useEffect(() => {
        if (userId && userId != 0) {
            Busca();
        }
    }, [userId]);

    useEffect(() => {
        if (infos && infos != '') {
           setFoto("http://192.168.255.56/imagens/" + infos.fotoPerfil);
        }
    }, [infos]);

    const Busca = async () => {
        const resposta = await api.enviar(userId);

        setInfos(resposta.userInfo);
    };

    return (
        <div className="PageLer">
            <header>
                <img id="logoP" src={logo} />
                <div id="CurtiL">
                    <span className="tituloBox">{tituloL && tituloL != '' ? tituloL : 'Nome Do Livro'}</span>

                    <span id="BOXCURTI">
                        <div className="BoxVisu fav">
                            <span><img src={Fav} /> Favoritar</span>
                        </div>
                        <div className="BoxVisu curti">
                            <span><img src={Curti} /> Curtir</span>
                        </div>
                    </span>

                </div>
            </header>

            <span className="filtro"></span>
            <div className="BOXLER">
                <Page idLivro={idLivro} setCor={setCor} setTituloL={setTituloL} setUserId={setUserId} />
            </div>

            <div className="infosAutor">
                <img id="perfil" src={foto} style={{border: 'solid 4px' + cor}}/>
                <p>{infos.nome && infos.nome != '' ? infos.nome : "Autor"}</p>
                <div className="btSeguir" style={{backgroundColor: cor}}>Seguir</div>
            </div>
            <BtFloatH />
        </div>
    );
}