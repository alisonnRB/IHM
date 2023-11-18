import React, { useEffect } from "react";
import { useState } from "react";

import Livro from "../../../cardLivro/cardLivro";

import words from './mostrarLivros.json';


export default function MostraLivros(props) {

    const [livro, setLivro] = useState('');

    const [Uword, setUword] = useState('EN');

    useEffect(() => {
        select_idioma();
    }, [])

    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
            idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
    }
    
    useEffect(()=>{
        setLivro(props.Livro);
    },[props.Livro]);


    const renderizarItens = () => {
        const elementos = [];
        let tempRow = [];
        let count = 0;

        for (let i = 0; i < livro.length; i++) {
            count++;
            tempRow.push(<div className="coluna" key={i}><Livro mine={false} info={livro[i]} text={Uword.ler}/></div>);

            if (count === 3 || i === livro.length - 1) {
                count = 0;
                elementos.push(<span className="linha" key={i}>{tempRow}</span>);
                tempRow = [];
            }
        }

        return elementos;
    };


    return (
        <div className="boxCardMeusLivro">


            {renderizarItens()}

            <div id="margem"></div>
        </div>
    );
}