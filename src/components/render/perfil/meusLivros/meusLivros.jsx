import React from "react";
import './meusLivros.css';
import { useEffect } from "react";
import { useState } from "react";

import FloatBt from "../../../BtFloat/btFloat";
import Livro from "../../../cardLivro/cardLivro";

import api from "../../../../backend/controler/api_meusLivros";

import words from './meusLivros.json';

export default function MeusLivros() {

    const [livro, setLivro] = useState('');
    const [Uword, setUword] = useState('EN');

    const Busca = async () => {
        const resposta = await api.enviar('i');
        if (resposta.ok) {
            setLivro(resposta.informacoes);
        }
    }


    const renderizarItens = () => {
        const elementos = [];
        let tempRow = [];
        let count = 0;

        for (let i = 0; i < livro.length; i++) {
            count++;
            tempRow.push(<div className="coluna" key={i}><Livro mine={true} info={livro[i]} /></div>);

            if (count === 3 || i === livro.length - 1) {
                count = 0;
                elementos.push(<span className="linha" key={i}>{tempRow}</span>);
                tempRow = [];
            }
        }

        return elementos;
    };


    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
          idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
      }


    useEffect(() => {
        Busca();
        select_idioma();
    }, []);

    return (
        <div className="boxCardMeusLivro">
            <span id='titlePerfil'>{Uword.title}</span>


                {renderizarItens()}

            <FloatBt />
            <div id="margem"></div>
        </div>
    );
}