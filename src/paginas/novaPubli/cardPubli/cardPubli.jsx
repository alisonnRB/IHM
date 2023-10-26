import React from "react";
import './cardPubli.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Enquete from '../enquete/enquete';
import LinkLivro from "../linkLivros/linkLivro";

import livroT from '../../../imgs/livro-true.png';
import livroF from '../../../imgs/livro-false.png';
import enqueteT from '../../../imgs/enquete-true.png';
import enqueteF from '../../../imgs/enquete-false.png';

import x from '../../../imgs/cancel.png';
import abaX from '../../../imgs/aba_cancel.png';

import api from '../../../backend/controler/api_publicacao';

export default function CardPubli() {
    const navigate = useNavigate();

    //TODO conteudo ou não
    const [livro, setlivro] = useState(false);
    const [enqueteTem, setEnqueteTem] = useState(false);


    //TODO janelas abertas
    const [aba, setAba] = useState(false);

    const [Livro, setLivro] = useState(false);
    const [cancelLivro, setCancelLivro] = useState(false);

    const [enquete, setEnquete] = useState(false);
    const [cancelEnquete, setCancelEnquete] = useState(false);



    //TODO content
    const [texto, setTexto] = useState('');
    const [limitTXT, setLimitTXT] = useState(0);
    const [linkLivro, setLinkLivro] = useState('');

    const [EnqueteS, setEnqueteS] = useState('');
    const [titleEnquete, setTitleEnquete] = useState('');

    useEffect(() => {
        var textarea = document.getElementById("textoPubli");
        textarea.focus();
    }, [])

    useEffect(() => {
        setLimitTXT(texto.length);
    }, [texto])


    useEffect(() => {
        if (linkLivro && linkLivro.id) {
            setLivro(false);
            setlivro(true);
        } else {
            setLivro(false);
        }
    }, [linkLivro])

    useEffect(() => {
        if (EnqueteS != '') {
            for (let i = 0; i < 3; i++) {
                if (EnqueteS[i] != '') {
                    setEnqueteTem(true);
                    return;
                } else {
                    setEnqueteTem(false);
                }
            }
        }
    }, [EnqueteS])

    useEffect(() => {
        if (cancelLivro) {
            setLivro(false);
            setCancelLivro(false);
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
        if (response.ok) {
            navigate(-1);
        }
    }


    return (
        <div className="cardPubli">

            {Livro ? <LinkLivro setLinkLivro={setLinkLivro} setCancel={setCancelLivro} /> : null}
            {enquete ? <Enquete setCancel={setCancelEnquete} setEnquete={setEnqueteS} setEnqueteTem={setEnqueteTem} enquete={EnqueteS} setTitle={setTitleEnquete} title={titleEnquete} /> : null}

            <span >
                {livro ?
                    <>
                        {aba ? <img src={abaX} className="cancelLivro" onMouseEnter={() => { setAba(true) }} onClick={() => { setlivro(false); setLinkLivro('') }} /> : <div style={{ width: '80px' }}></div>}
                        <div className="campoImgPubli" onMouseLeave={() => { setAba(false) }}>
                            <img src={linkLivro.imagem} id="capaSelect" onMouseEnter={() => { setAba(true) }} />
                        </div>
                    </>
                    : null}


                <div className="textPubli" >
                    <textarea
                        className={`textoPubli ${linkLivro !== '' ? 'Com' : ''}`}
                        id="textoPubli"
                        value={texto}
                        onChange={(e) => {
                            if (e.target.value.length <= 306) {
                                setTexto(e.target.value);
                            }
                        }}
                        maxLength="306"
                    />

                    {enqueteTem ?
                        <div className="caixaEnM">
                            <span id="quest" >{enqueteTem && titleEnquete ? titleEnquete : null}</span>
                            <div className="caixaEnquete">
                                {geraEnquete()}
                            </div>
                        </div> : null}

                </div>

            </span>
            <span className={`btPubli ${linkLivro != '' ? 'Com' : ''}`}>

                <img src={livro ? livroT : livroF} onClick={() => { setLivro(true) }} />


                <img src={enqueteTem ? enqueteT : enqueteF} onClick={() => { setEnquete(true) }} />

            </span>

            <p id="Publicar" onClick={() => { publicar() }}>PUBLICAR</p>

        </div>
    );
}