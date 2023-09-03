import React from "react";
import './meusLivros.css';
import { useEffect } from "react";
import { useState } from "react";

import FloatBt from "../../../BtFloat/btFloat";
import Livro from "../../../cardLivro/cardLivro";

import api from "../../../../backend/controler/api_meusLivros";



export default function MeusLivros() {
    const [livro, setLivro] = useState('');

    const Busca = async () => {
        const id = localStorage.getItem('id');

        const resposta = await api.enviar(id);
        setLivro(resposta.livros);

    }

    const renderizarItens = () => {
        const elementos = [];
        let tempRow = [];
    
        for (let i = 0; i < livro.length; i++) {
          tempRow.push(<td key={i}><Livro mine={true}info={livro[i]} /></td>);
    
          if ((i + 1) % 2 === 0 || i === livro.length - 1) {
            elementos.push(<tr key={i}>{tempRow}</tr>);
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
            <span className="titleMeusLivros">MEUS LIVROS</span>
            <table className="boxCardLivros">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {renderizarItens()}
                </tbody>
            </table>
            <FloatBt />
        </div>
    );
}