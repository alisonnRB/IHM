import React, { useEffect, useState } from "react";
import './cardLivro.css';

import { Link } from "react-router-dom";


export default function Livro(props) {
    const id = localStorage.getItem('id');
    const [fotoCapa, setFotoCapa] = useState('');
    const [nome, setNome] = useState('...')
    const [livro, setLivro] = useState('');

    useEffect(() => {
        if (props.info && props.info['imagem']) {
            setFotoCapa("http://192.168.255.131/livros/" + id + '/' + props.info['imagem']);
        } else {
            setFotoCapa('');
        }
        if (props.info && props.info['nome']) {
            setNome(props.info['nome']);
        } else {
            setNome('...');
        }
        setLivro(props.info["id"]);
    }, [props.info]);

    function botao(mine) {
        if (mine == true) {
            return (
                <Link to={{ pathname: '/editaLivros', state: { livro } }} className="link">
                    <button className="Edicao">editar</button>
                </Link>
            );
        }
    }


    return (
        <span className="CardLivro">
            <span id="title">
                <h1>{nome}</h1>
                <p>publicada</p>
            </span>
            <span id="boxBox">
                <div id="boxIMG">
                    <img className="Livro" src={fotoCapa}></img>
                </div>
                <div id="sinopse">
                    <div className="infosL">
                        visu fav curti
                    </div>
                    <div className="sinopse">
                    Celaena é uma assassina, e a melhor de Adarlan. Aprisionada e fraca, ela está quase perdendo as esperanças quando recebe uma proposta. Terá de volta sualiberdade se representar o príncipe de Adarlan em uma competição, lutando contra os mais habilidosos assassinos e larápios do reino.
                    </div>
                    <div className="generoL">
                        <div className='gender' >fantasia</div>
                        <div className='gender' >humor</div>
                        <div className='gender' >selar</div>
                    </div>
                </div>
            </span>
            <span id="buttons">
                {botao(props.mine)}
                <Link className="link"><button className="Read">Ler</button></Link>
            </span>
        </span>
    );
}