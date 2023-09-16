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
            setFotoCapa("http://192.168.255.56/livros/" + id + '/' + props.info['imagem']);
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




    function botao(mine) {
        if (mine == true) {
            return (
                <Link to={`/Perfil/MeusLivros/escreva?id=${encodeURIComponent(JSON.stringify(livro.id))}`} className="link">
                    <button className="Edicao bt">Editar</button>
                </Link>
            );
        }
    }



    return (
        <span className="CardLivro">
            <span id="title">
                <h1>{nome}</h1>
                <span>
                    <p>publicado</p>
                    <div className="publico"></div>
                </span>
            </span>
            <span id="boxBox">
                <div id="boxIMG">
                    <img className="Livro" src={fotoCapa}></img>
                </div>
                <div id="sinopse">
                    <div className="infosL">

                        <div className="info-info">
                            <div>
                                <img src={Visu} className="IMGinfoL" />
                                leituras
                            </div>
                            1
                        </div>

                        <div className="info-info">
                            <div>
                                <img src={Fav} className="IMGinfoL" />
                                favoritos
                            </div>
                            1
                        </div>

                        <div className="info-info">
                            <div>
                                <img src={Curti} className="IMGinfoL" />
                                curtidas
                            </div>
                            1
                        </div>

                    </div>
                    <div className="sinopse">
                        Celaena é uma assassina, e a melhor de Adarlan. Aprisionada e fraca, ela está quase perdendo as esperanças quando recebe uma proposta. Terá de volta sualiberdade se representar o príncipe de Adarlan em uma competição, lutando contra os mais habilidosos assassinos e larápios do reino.
                    </div>
                </div>
            </span>
            <span id="buttons">
                {botao(props.mine)}
                <Link className="link"><button className="Read bt">Ler</button></Link>
            </span>
        </span>
    );
}