import React, { useEffect, useState } from "react";
import './cardLivro.css';

import { Link } from "react-router-dom";

import Visu from "../../imgs/olho.png";
import Fav from "../../imgs/estrela.png";
import Curti from "../../imgs/coracao.png";

import livre from '../../imgs/livre.png';
import dez from '../../imgs/dez.png';
import doze from '../../imgs/doze.png';
import quatorze from '../../imgs/quatorze.png';
import dezeseis from '../../imgs/dezeseis.png';
import dezoito from '../../imgs/dezoito.png';


export default function Livro(props) {

    const id = localStorage.getItem('id');
    const [fotoCapa, setFotoCapa] = useState('');
    const [nome, setNome] = useState('...');
    const [livro, setLivro] = useState('');
    const [sinopse, setSinopse] = useState('<p></p>');

    const [classificacao, setClassificacao] = useState('');
    const [visuClass, setVisuClass] = useState(livre);

    const [aberto, setAberto] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

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
        if (props.info && props.info['sinopse']) {
            setSinopse(props.info['sinopse']);
        }
        if (props.info && props.info['classificacao']) {
            setClassificacao(props.info['classificacao']);
        }
        setLivro(props.info);

    }, [props.info]);


    function botao(mine) {
        if (mine == true) {
            return (
                <Link to={`/perfil/MeusLivros/escreva?id=${encodeURIComponent(JSON.stringify(livro.id))}`} className="link">
                    <button className="Edicao bt">Editar</button>
                </Link>
            );
        }
    }

    const TimerAbrir = () => {
        const id = setTimeout(() => {
            setAberto('abre');
        }, 400);

        setTimeoutId(id);
    };

    const TimerCancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        setAberto('');
    };

    useEffect(()=>{
        switch(classificacao){
            case 'livre':
                setVisuClass(livre);
                break;
            case 'dez':
                setVisuClass(dez);
                break;
            case 'doze':
                setVisuClass(doze);
                break;
            case 'quatorze':
                setVisuClass(quatorze);
                break;
            case 'dezeseis':
                setVisuClass(dezeseis);
                break;
            case 'dezoito':
                setVisuClass(dezoito);
                break;
        }
    }, [classificacao]);




    return (
        <span className={`CardLivro ${aberto}`} onMouseEnter={() => { TimerAbrir() }} onMouseLeave={() => { TimerCancel() }}>

            <div className="IMGbox">
                <span className="IMGbox_Classifica">
                    <img id="classifica" src={visuClass} />
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

                <div id="Box_text" dangerouslySetInnerHTML={{ __html: sinopse }}>
                </div>

                <span id="BTs">

                    <Link className="link"><button className="Read bt">Visualizar em Modo Leitura</button></Link>

                    {botao(props.mine)}

                </span>
            </div>
        </span >
    );
}