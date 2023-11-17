import React from "react";
import './linklivro.css';
import { useState, useEffect } from "react";

import api from "../../../backend/controler/api_search";

import Card from "./cardLivro/cardLivro";
import x from "../../../imgs/cancel.png";

import words from './linkLivro.json';

export default function LinkLivro(props) {
    const [livro, setLivro] = useState('');

    const [selecionado, setSelecionado] = useState('');

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
        if(selecionado && selecionado.id){
            props.setLinkLivro(selecionado);
        }
    },[selecionado])

    const Pesquisa = async (busca) => {

        const resposta = await api.enviar(busca, null, null, null, null);
        if (resposta.ok) {
            setLivro(resposta.informacoes);
        }

    }


    const geraLivros = () => {
        const list = [];
        for(let i = 0; i<Object.keys(livro).length;i++){
            let a = <Card key={i} livro={livro[i]} setSelecionado={setSelecionado}/>
            list.push(a);
        }

        return list;
    }

    return (
        <div className="BuscaLivros">
            <div className="abaPesquisa">
                <img id="cancelB" src={x} onClick={()=>{props.setCancel(true)}}/>
                <span className="titleBox">{Uword.anexo}</span>
                <span className="boxLivros">
                    <input type='text' id='searchText' placeholder={Uword.place} onChange={(e) => {  Pesquisa(e.target.value)}} />
                </span>

                <div className="Buscas">
                    {geraLivros()}
                </div>
            </div>
        </div>
    );
}