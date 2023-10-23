import React from "react";
import './cardPubli.css';
import { useState, useEffect } from "react";

import Enquete from '../enquete/enquete';
import LinkLivro from "../linkLivros/linkLivro";
import CaixaImg from "../caixaIMG/caixaImg";

import livroT from '../../../imgs/livro-true.png';
import livroF from '../../../imgs/livro-false.png';
import imagemT from '../../../imgs/image-true.png';
import imagemF from '../../../imgs/image-false.png';
import enqueteT from '../../../imgs/enquete-true.png';
import enqueteF from '../../../imgs/enquete-false.png';

export default function CardPubli() {
    //TODO conteudo ou não
    const [sendIMG, setSendIMG] = useState(false);
    const [enquete, setEnquete] = useState(false);
    const [livro, setlivro] = useState(false);


    //TODO janelas abertas
    const [Livro, setLivro] = useState(false);
    const [cancelLivro, setCancelLivro] = useState(false);

    const [imagem, setImagem] = useState(false);
    const [cancelIMG, setCancelImg] = useState(false);


    //TODO content
    const [texto, setTexto] = useState('');
    const [linkLivro, setLinkLivro] = useState('');
    const [seleçãoIMG, setSelecaoIMG] = useState('');


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
        if (seleçãoIMG != null) {
            let foundNonNullValue = false;

            for (const pair of seleçãoIMG) {
                for (let i = 0; i < 9; i++) {
                    if (pair[i] != null) {
                        foundNonNullValue = true;
                        break;
                    }
                }
                if (foundNonNullValue) {
                    break;
                }
            }

            setSendIMG(foundNonNullValue);
        }
    }, [seleçãoIMG]);


    useEffect(() => {
        if (cancelIMG) {
            setImagem(false);
            setCancelImg(false);
        }
    }, [cancelIMG])


    const publicar = async () => {

    }

    return (
        <div className="cardPubli">

            {Livro ? <LinkLivro setLinkLivro={setLinkLivro} setCancel={setCancelLivro} /> : null}
            {imagem ? <CaixaImg imagens={seleçãoIMG != null ? seleçãoIMG : false} setCancel={setCancelImg} setIMGS={setSelecaoIMG} livroS={linkLivro.imagem ? linkLivro.imagem : false} /> : null}

            <span >
                {imagem || livro ?
                    <div className="campoImgPubli">
                        <img src={linkLivro.imagem} id="capaSelect" />
                    </div>
                    : <div className="campoImgPubli"></div>}


                <div className="textPubli">
                    <textarea id="textoPubli" value={texto} onChange={(e) => { setTexto(e.target.value) }}></textarea>

                    {enquete ? <Enquete /> : null}

                </div>

            </span>
            <span className="btPubli">

                <img src={livro ? livroT : livroF} onClick={() => { setLivro(true) }} />

                <img src={sendIMG ? imagemT : imagemF} onClick={() => { setImagem(true) }} />

                <img src={enquete ? enqueteT : enqueteF} onClick={() => { setEnquete(!enquete) }} />

            </span>

            <p id="Publicar" onClick={() => { publicar() }}>PUBLICAR</p>

        </div>
    );
}