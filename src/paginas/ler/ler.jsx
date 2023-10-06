import React from "react";
import './ler.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from '../../imgs/logo.png';

import Fav from "../../imgs/estrela.png";
import Curti from "../../imgs/coracao.png";

import Page from "./paginas/page";
import BtFloatH from "../escrever/btFloatH/btFloatH";

export default function Ler() {
    const location = useLocation();
    const [idLivro, setIdLivro] = useState(0);

    const [cor1, setCor1] = useState('');
    const [cor2, setCor2] = useState('');

    const [tituloL, setTituloL] = useState('');

    useEffect(() => {
        const idLivroG = new URLSearchParams(location.search).get('id');
        setIdLivro(idLivroG);
    }, [location]);

    return (
        <div className="PageLer">
            <header>
                <img id="logoP" src={logo} />
                <div id="CurtiL">
                    <span className="tituloBox">{tituloL && tituloL != ''? tituloL : 'Nome Do Livro'}</span>

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
                <Page idLivro={idLivro} setCor1={setCor1} setCor2={setCor2} setTituloL={setTituloL}/>
            </div>

            <div className="infosAutor">

            </div>
            <BtFloatH />
        </div>
    );
}