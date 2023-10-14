import React from "react";
import './ler.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from '../../backend/controler/api_info';

import curtida from '../../backend/controler/api_curtir';
import curtiram from '../../backend/controler/api_buscaCurtidas';

import favorito from '../../backend/controler/api_favoritar';
import favoritou from '../../backend/controler/api_buscaFavoritos';

import Seguir from '../../backend/controler/api_seguir';
import Seguindo from '../../backend/controler/api_buscaSeguidores';

import logo from '../../imgs/logo.png';
import Fav from "../../imgs/estrela.png";
import Curti from "../../imgs/coracao.png";

import Page from "./paginas/page";
import BtFloatH from "../escrever/btFloatH/btFloatH";

export default function Ler() {
    const location = useLocation();
    const [idLivro, setIdLivro] = useState(0);
    const id = localStorage.getItem('id');

    const [userId, setUserId] = useState(0);
    const [infos, setInfos] = useState('');

    const [cor, setCor] = useState('');

    const [tituloL, setTituloL] = useState('');
    const [foto, setFoto] = useState('');

    const [openRes, setOpenRes] = useState('');

    const [curtidas, setCurtidas] = useState('');
    const [curtido, setCurtido] = useState(false);
    const [curtindo, setCurtindo] = useState(false);

    const [fav, setFav] = useState(false);

    const [seguido, setSeguido] = useState(false);

    const [hoverC, setHoverC] = useState(false);
    const [hoverF, setHoverF] = useState(false);

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
        if (idLivroG) {
            fetch('http://192.168.255.56/server/visus.php', {
              method: 'POST', // Use POST para atualizar o servidor
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: idLivroG }),
            })
        }
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

        let id = localStorage.getItem('id');
        const responseFav = await favoritou.enviar(id, idLivro);
        if (responseFav.favoritos[0] && responseFav.favoritos[0].user_id == id) {
            setFav(true);
        }

        const responseSeg = await Seguindo.enviar(id, userId);
        if (responseSeg.seguidores[0] && responseSeg.seguidores[0].user_id == id) {
            setSeguido(true);
        }

    };

    const curtir = async () => {
        let id = localStorage.getItem('id');
        const resposta = await curtida.enviar(id, idLivro, 'livro', 0);
        if (resposta.ok) {
            Busca();
        }
    }

    const favoritar = async () => {
        let id = localStorage.getItem('id');
        const resposta = await favorito.enviar(id, idLivro);
        if (resposta.ok) {
            Busca();
        }
    }

    const seguir = async () => {
        let id = localStorage.getItem('id');
        const resposta = await Seguir.enviar(id, userId);
        if (resposta.ok) {
            Busca();
        }
    }

    const styleC = {
        backgroundColor: curtido
            ? ('#FF7070')
            : (hoverC ? ('#FF7070') : '#C4BFB2'),
    };

    const styleF = {
        backgroundColor: fav
            ? ('#FFBD59')
            : (hoverF ? ('#FFBD59') : '#C4BFB2'),
    };

    return (
        <div className="PageLer" onClick={() => { setOpenRes('fechado') }}>
            <header>
                <img id="logoP" src={logo} />
                <div id="CurtiL">
                    <span className="tituloBox">{tituloL && tituloL != '' ? tituloL : 'Nome Do Livro'}</span>

                    <span id="BOXCURTI">
                        <div className="BoxVisu fav">
                            <span onClick={() => { favoritar(); setFav(!fav) }} onMouseEnter={() => { setHoverF(true) }} onMouseLeave={() => { setHoverF(false) }} style={styleF} ><img src={Fav} /> Favoritar</span>
                        </div>
                        <div className="BoxVisu curti" >
                            <span onClick={() => { curtir() }} onMouseEnter={() => { setHoverC(true) }} onMouseLeave={() => { setHoverC(false) }} style={styleC}><img src={Curti} /> Curtir</span>
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
                {id != userId? <div className="btSeguir" style={{ backgroundColor: cor }} onClick={() => { seguir() }} >{seguido? 'SEGUINDO' : 'SEGUIR'}</div>:null}
            </div>
            <BtFloatH />
        </div>
    );
}