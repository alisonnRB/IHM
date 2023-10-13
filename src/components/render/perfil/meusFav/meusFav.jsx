import React from "react";
import './meusFav.css';
import { useEffect } from "react";
import { useState } from "react";

import FloatBt from "../../../BtFloat/btFloat";
import Livro from "../../../cardLivro/cardLivro";

import api from "../../../../backend/controler/api_meusFavoritos";

export default function MeusFav() {

    const [livro, setLivro] = useState('');

    const Busca = async () => {
        const id = localStorage.getItem('id');

        const resposta = await api.enviar(id);
        if (resposta.ok) {
            setLivro(resposta.livros);
        }

    }


    const renderizarItens = () => {
        const elementos = [];
        let tempRow = [];
        let count = 0;

        for (let i = 0; i < Object.keys(livro).length; i++) {
            count++;
            tempRow.push(<div className="coluna" key={i}><Livro mine={true} info={livro[i]} /></div>);

            if (count === 3 || i === Object.keys(livro).length - 1) {
                count = 0;
                elementos.push(<span className="linha" key={i}>{tempRow}</span>);
                tempRow = [];
            }
        }

        return elementos;
    };


    useEffect(() => {
        Busca();
    }, []);

    return (
        <div className="boxCardMeusLivro">
            <span id='titlePerfil'>Meus Favoritos</span>


                {renderizarItens()}

            <FloatBt />
            <div id="margem"></div>
        </div>
    );
}