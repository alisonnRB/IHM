import React, { useEffect, useState } from "react";
import './cardLivro.css';

import { Link } from "react-router-dom";

import Visu from "../../imgs/olho.png";
import Fav from "../../imgs/estrela.png";
import Curti from "../../imgs/coracao.png";


export default function Livro(props) {

    const id = localStorage.getItem('id');
    const [fotoCapa, setFotoCapa] = useState('');
    const [nome, setNome] = useState('...');
    const [livro, setLivro] = useState('');


    useEffect(() => {
        if (props.info && props.info['imagem']) {
            setFotoCapa("http://192.168.255.56/livros/" + id + '/' + props.info['nome'] + '/' + props.info['imagem']);
        } else {
            setFotoCapa('');
        }
        if (props.info && props.info['nome']) {
            setNome(props.info['nome']);
        } else {
            setNome('...');
        }
        setLivro(props.info);

    }, [props.info]);






    return (
        <span className="CardLivro">

            <div className="IMGbox">
                <span className="IMGbox_Classifica">
                    <img id="classifica" src="" />
                </span>
                <img id="capa" src={fotoCapa} />
            </div>

            <div className="infos">

                <span id="nomeLivro">
                    {nome}
                </span>

                <span id="VisuLivro">
                    <div className="BoxVisu visu">
                        <span><img src={Visu} /></span><span>5</span>
                    </div>
                    <div className="BoxVisu fav">
                        <span><img src={Fav} /></span><span>5</span>
                    </div>
                    <div className="BoxVisu curti">
                        <span><img src={Curti} /></span><span>5</span>
                    </div>
                </span>

                <div id="Box_text">

                </div>

                <span id="BTs"></span>
            </div>
        </span>
    );
}