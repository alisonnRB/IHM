import React from "react";
import { useState, useEffect } from "react";
import './busca.css';


export default function Busca() {
    const [pesquisa, setPesquisa] = useState('');

    return (
        <div className='TelaBusca'>
            <span id='titlePerfil'>USUÁRIOS</span>
            <span className='boxLivros'>
                <input type='text' id='searchText' placeholder='Buscar' value={pesquisa} onChange={(e) => { setPesquisa(e.target.value); }} />
                <div id='searchImg'></div>
            </span>

            <div className="pessoasBOX">
                <span className="BoxCardPessoas">
                    <span className="cardPessoa">
                        <div id="perfilPessoa">
                            <img src=""/>
                        </div>
                        <div className="infosPessoa">
                            <span className="nomePessoa">JOOZINHO</span>
                            <span className="catPessoa">
                                <div className="categoria"><img src=""/></div>
                                <div className="opSeguir"><p>SEGUIR</p></div>
                            </span>
                        </div>
                    </span>
                </span>
            </div>
        </div>
    );
}