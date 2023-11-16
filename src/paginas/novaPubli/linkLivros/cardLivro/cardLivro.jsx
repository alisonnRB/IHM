import React from "react";
import './cardLivro.css';
import { useState, useEffect } from "react";



export default function CardLink(props) {
    const [livro, setLivro] = useState();
    const [foto, setFoto] = useState('');

    useEffect(() => {
        setLivro(props.livro);
    }, [props]);

    useEffect(() => {
        if (livro && livro.imagem) {
            setFoto("http://192.168.255.193/livros/" + livro.user_id + '/' + livro.nome + '_' + livro.id + '/' + livro.imagem);
        }
    }, [livro]);

    const selecionar = () => {
        let selecao = {
            'id': livro.id,
            'imagem': foto,
        }
        props.setSelecionado(selecao);
    }

    return (
        <div className="CardLink" onClick={()=>{selecionar()}}>
            <span className="content">
                <img src={foto} id="capa" />
                <div className="caixaInfo">
                    <span className="boxNome" >{livro && livro.nome? livro.nome : null}</span>
                    <span className="boxSinopse" dangerouslySetInnerHTML={{ __html: livro && livro.sinopse ? livro.sinopse : null }}></span>
                </div>
            </span>
        </div>
    );
}