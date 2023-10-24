import React from "react";
import './cardPubli.css';
import { useState, useEffect } from "react";

import Enquete from '../enquete/enquete';
import LinkLivro from "../linkLivros/linkLivro";

import livroT from '../../../imgs/livro-true.png';
import livroF from '../../../imgs/livro-false.png';
import enqueteT from '../../../imgs/enquete-true.png';
import enqueteF from '../../../imgs/enquete-false.png';

import api from '../../../backend/controler/api_publicacao';

export default function CardPubli() {
    //TODO conteudo ou não
    const [livro, setlivro] = useState(false);
    const [enqueteTem, setEnqueteTem] = useState(false);


    //TODO janelas abertas
    const [Livro, setLivro] = useState(false);
    const [cancelLivro, setCancelLivro] = useState(false);

    const [enquete, setEnquete] = useState(false);
    const [cancelEnquete, setCancelEnquete] = useState(false);



    //TODO content
    const [texto, setTexto] = useState('');
    const [linkLivro, setLinkLivro] = useState('');

    const [EnqueteS, setEnqueteS] = useState('');
    const [titleEnquete, setTitleEnquete] = useState('');


    useEffect(() => {
        if (linkLivro && linkLivro.id) {
            setLivro(false);
            setlivro(true);
        } else {
            setLivro(false);
        }
    }, [linkLivro])

    useEffect(() => {
        if (cancelLivro) {
            setLivro(false);
            setlivro(false);
            setLinkLivro('');
        }
    }, [cancelLivro])

    useEffect(() => {
        if (cancelEnquete) {
            setEnquete(false);
            setCancelEnquete(false);
        }
    }, [cancelEnquete])

    const geraEnquete = () => {
        const list = [];

        for (let i = 0; i < Object.keys(EnqueteS).length; i++) {
            if (EnqueteS[i] != '') {
                let a = <span className="enqueteB">{EnqueteS[i]}</span>
                list.push(a);
            }
        }

        return list;
    }



    const publicar = async () => {
        const response = await api.enviar(texto, linkLivro, EnqueteS, titleEnquete);
        if(response.ok){
            console.log(response.ok);
        }
    }

    return (
        <div className="cardPubli">

            {Livro ? <LinkLivro setLinkLivro={setLinkLivro} setCancel={setCancelLivro} /> : null}
            {enquete ? <Enquete setCancel={setCancelEnquete} setEnquete={setEnqueteS} setEnqueteTem={setEnqueteTem} enquete={EnqueteS} setTitle={setTitleEnquete} title={titleEnquete} /> : null}

            <span >
                {livro ?
                    <div className="campoImgPubli">
                        <img src={linkLivro.imagem} id="capaSelect" />
                    </div>
                    : <div className="campoImgPubli"></div>}


                <div className="textPubli">
                    <textarea id="textoPubli" value={texto} onChange={(e) => { setTexto(e.target.value) }}></textarea>

                    {enqueteTem ?
                        <div className="caixaEnM">
                            <span id="quest" >{titleEnquete? titleEnquete : '?'}</span>
                            <div className="caixaEnquete">
                                {geraEnquete()}
                            </div>
                        </div> : null}

                </div>

            </span>
            <span className="btPubli">

                <img src={livro ? livroT : livroF} onClick={() => { setLivro(true) }} />


                <img src={enqueteTem ? enqueteT : enqueteF} onClick={() => { setEnquete(true) }} />

            </span>

            <p id="Publicar" onClick={() => { publicar() }}>PUBLICAR</p>

        </div>
    );
}