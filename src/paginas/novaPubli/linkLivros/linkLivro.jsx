import React from "react";
import './linklivro.css';
import { useState, useEffect } from "react";

import api from "../../../backend/controler/api_search";

import Card from "./cardLivro/cardLivro";
import x from "../../../imgs/cancel.png";

export default function LinkLivro(props) {
    const [livro, setLivro] = useState('');

    const [selecionado, setSelecionado] = useState('');

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
                <span className="titleBox">ANEXAR LIVRO</span>
                <span className="boxLivros">
                    <input type='text' id='searchText' placeholder='Buscar' onChange={(e) => {  Pesquisa(e.target.value)}} />
                </span>

                <div className="Buscas">
                    {geraLivros()}
                </div>
            </div>
        </div>
    );
}