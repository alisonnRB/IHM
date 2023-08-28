import React, { useEffect, useState } from "react";
import './cardLivro.css';

import { Link } from "react-router-dom";


export default function Livro(props){
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


    return(
        <span className="CardLivro">
            <p>{nome}</p>
            <img className="Livro" src={fotoCapa}></img>
            <Link to={{ pathname: '/editaLivros', state: { livro } }} id="link"><button className="Edicao">editar</button></Link>
        </span>
    );
}