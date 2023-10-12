import React from "react";
import './ler.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from '../../backend/controler/api_info';
import curtida from '../../backend/controler/api_curtir';
import curtiram from '../../backend/controler/api_buscaCurtidas';

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

    const [openRes, setOpenRes] = useState('');

    const [curtidas, setCurtidas] = useState('');
    const [curtido, setCurtido] = useState(false);
    const [curtindo, setCurtindo] = useState(false);

    const [hover, setHover] = useState(false);

    useEffect(() => {
        setOpenRes(openRes);
    }, [openRes]);

    useEffect(() => {
        if (curtindo) {
            Busca();
            setCurtindo(false);
        }
    }, [curtindo])

    useEffect(() => {
        if (curtidas != undefined) {
            let keys = Object.keys(curtidas).length;
            let id = localStorage.getItem('id');
            for (let i = 0; i < keys; i++) {
                if (curtidas[i].coment == 0 && curtidas[i].id_user == id) {
                    setCurtido(true);
                    return;
                }
            }
        }
        setCurtido(false);
    }, [curtidas]);


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

        const response = await curtiram.enviar(userId, idLivro, 'livro');

        setCurtidas(response.curtidas);
    };

    const curtir = async () => {
        let id = localStorage.getItem('id');
        const resposta = await curtida.enviar(id, idLivro, 'livro', 0);
        if (resposta.ok) {
            Busca();
        }
    }

    const style = {
        backgroundColor: curtido
            ? ('#FF7070')
            : (hover ? ('#FF7070') : '#C4BFB2'),
    };

    return (
        <div className="PageLer" onClick={() => { setOpenRes('fechado') }}>
            <header>
                <img id="logoP" src={logo} />
                <div id="CurtiL">
                    <span className="tituloBox">{tituloL && tituloL != '' ? tituloL : 'Nome Do Livro'}</span>

                    <span id="BOXCURTI">
                        <div className="BoxVisu fav">
                            <span ><img src={Fav} /> Favoritar</span>
                        </div>
                        <div className="BoxVisu curti" >
                            <span onClick={() => { curtir() }} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} style={style}><img src={Curti} /> Curtir</span>
                        </div>
                    </span>

                </div>
            </header>

            <span className="filtro"></span>
            <div className="BOXLER">
                <Page setCurtindo={setCurtindo} curtidas={curtidas} idLivro={idLivro} setCor={setCor} setTituloL={setTituloL} setUserId={setUserId} setOpenRes={setOpenRes} openRes={openRes} />
            </div>

            <div className="infosAutor">
                <img id="perfil" src={foto} style={{ border: 'solid 4px' + cor }} />
                <p>{infos.nome && infos.nome != '' ? infos.nome : "Autor"}</p>
                <div className="btSeguir" style={{ backgroundColor: cor }}>Seguir</div>
            </div>
            <BtFloatH />
        </div>
    );
}