import React, { useEffect } from "react";
import { useState } from "react";
import './mostraLivros.css';

import Livro from "../../../cardLivro/cardLivro";

export default function MostraLivros(props) {

    const [livro, setLivro] = useState('');
    
    useEffect(()=>{
        setLivro(props.Livro);
    },[props.Livro])



    const renderizarItens = () => {
        const elementos = [];
        let tempRow = [];
        let count = 0;

        for (let i = 0; i < livro.length; i++) {
            count++;
            tempRow.push(<div className="coluna" key={i}><Livro mine={false} info={livro[i]} text={'Começar a ler'}/></div>);

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