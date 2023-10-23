import React from "react";
import './caixaImg.css';
import { useState, useEffect } from "react";

import x from '../../../imgs/cancel.png';

import Card from './cardIMG/cardIMG';

export default function CaixaImg(props) {
    const formData = new FormData();


    const [imagem1, setImagem1] = useState(null);
    const [imagem2, setImagem2] = useState(null);
    const [imagem3, setImagem3] = useState(null);

    const [imagem4, setImagem4] = useState(null);
    const [imagem5, setImagem5] = useState(null);
    const [imagem6, setImagem6] = useState(null);

    const [imagem7, setImagem7] = useState(null);
    const [imagem8, setImagem8] = useState(null);
    const [imagem9, setImagem9] = useState(null);

    const [imagens, setImagens] = useState(null);


    useEffect(() => {
        formData.append('image1', imagem1);
        formData.append('image2', imagem2);
        formData.append('image3', imagem3);

        formData.append('image4', imagem4);
        formData.append('image5', imagem5);
        formData.append('image6', imagem6);

        formData.append('image7', imagem7);
        formData.append('image8', imagem8);
        formData.append('image9', imagem9);

        setImagens(formData);

    }, [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9]);

    const change = () => {
        props.setIMGS(imagens);
    }

    useEffect(() => {
        if (props.imagens) {
            setImagem1(props.imagens.get('image1'));
            setImagem2(props.imagens.get('image2'));
            setImagem3(props.imagens.get('image3'));

            setImagem4(props.imagens.get('image4'));
            setImagem5(props.imagens.get('image5'));
            setImagem6(props.imagens.get('image6'));

            setImagem7(props.imagens.get('image7'));
            setImagem8(props.imagens.get('image8'));
            setImagem9(props.imagens.get('image9'));
        }
    }, [props.imagens])


    return (
        <div className="imgBox">
            <div className="cardImg">
                <img id='cancelIMG' src={x} onClick={() => { props.setCancel(true); change(); }} />
                <span className="imgsContent">

                    <div className="capaL">
                        <img src={props.livroS ? props.livroS : null} className="livroSel" />
                    </div>

                    <div className="newIMG">

                        <Card key={1} chave={1} setImagem={setImagem1} imagem={imagem1}/>
                        <Card key={2} chave={2} setImagem={setImagem2} imagem={imagem2}/>
                        <Card key={3} chave={3} setImagem={setImagem3} imagem={imagem3}/>

                        <Card key={4} chave={4} setImagem={setImagem4} imagem={imagem4}/>
                        <Card key={5} chave={5} setImagem={setImagem5} imagem={imagem5}/>
                        <Card key={6} chave={6} setImagem={setImagem6} imagem={imagem6}/>

                        <Card key={7} chave={7} setImagem={setImagem7} imagem={imagem7}/>
                        <Card key={8} chave={8} setImagem={setImagem8} imagem={imagem8}/>
                        <Card key={9} chave={9} setImagem={setImagem9} imagem={imagem9}/>

                    </div>


                </span>
            </div>
        </div>
    );
}