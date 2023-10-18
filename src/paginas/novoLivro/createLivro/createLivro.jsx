import React from "react";
import './createLivro.css';
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import x from '../../../imgs/x.jpeg';
import Selecao from '../.././../components/livroSelectGen/select';
import api from '../../../backend/controler/api_newLivro';
import apiInfo from '../../../backend/controler/api_meusLivros';

import livre from '../../../imgs/livre.jpeg';
import dez from '../../../imgs/dez.jpeg';
import doze from '../../../imgs/doze.jpeg';
import quatorze from '../../../imgs/quatorze.jpeg';
import dezeseis from '../../../imgs/dezeseis.jpeg';
import dezoito from '../../../imgs/dezoito.jpeg';

import { useEffect } from "react";

export default function NovoLivro() {
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState('');
    const [file, setFile] = useState(null);

    const [conta, setConta] = useState(0);
    const [selecao, setSelecao] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,

    });

    const [classificacao, setClassificacao] = useState('livre');

    const [openClass, setOpenClass] = useState(false);
    const [close, setClose] = useState('');

    const [visuClass, setVisuClass] = useState(livre);


    const enviar = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        const nameBook = event.target.livroNome.value;

        const idUsuario = localStorage.getItem('id');

        const resposta = await api.enviar(idUsuario, formData, nameBook, selecao, classificacao);

        if (resposta.ok) {
            const AWid = await apiInfo.enviar(idUsuario);
            const id = AWid.informacoes[Object.keys(AWid.informacoes).length - 1].id;
            navigate(`/perfil/MeusLivros/escreva?id=${encodeURIComponent(JSON.stringify(id))}`)
        }

        setFile(null);
        setImagePreview(null);

    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const selecionaClass = () => {
        return (
            <div className="fundo">
                <div className="opsClass">
                    <img className={`imgC ${close}`} src={livre} onClick={()=>{setClassificacao('livre');setClose('close')}}/>
                    <img className={`imgC ${close}`} src={dez} onClick={()=>{setClassificacao('dez');setClose('close')}}/>
                    <img className={`imgC ${close}`} src={doze} onClick={()=>{setClassificacao('doze');setClose('close')}}/>
                    <img className={`imgC ${close}`} src={quatorze} onClick={()=>{setClassificacao('quatorze');setClose('close')}}/>
                    <img className={`imgC ${close}`} src={dezeseis} onClick={()=>{setClassificacao('dezeseis');setClose('close')}}/>
                    <img className={`imgC ${close}`} src={dezoito} onClick={()=>{setClassificacao('dezoito');setClose('close')}}/>
                </div>
            </div>
        );
    }

    useEffect(()=>{
        switch(classificacao){
            case 'livre':
                setVisuClass(livre);
                break;
            case 'dez':
                setVisuClass(dez);
                break;
            case 'doze':
                setVisuClass(doze);
                break;
            case 'quatorze':
                setVisuClass(quatorze);
                break;
            case 'dezeseis':
                setVisuClass(dezeseis);
                break;
            case 'dezoito':
                setVisuClass(dezoito);
                break;
        }
    }, [classificacao]);

    useEffect(()=>{
        if(close === 'close'){
            setTimeout(()=>{
                setClose('');
                setOpenClass(false);
            }, 300)
        }
    },[close])

    return (
        <div className="boxNewBookC">
            <form className="formCreateBook" onSubmit={enviar}>

                <div className="capaDoLivro">

                    <div className="quad" onClick={()=>{setOpenClass(true)}}style={{ backgroundImage: `url(${visuClass})` }}>
                        {openClass ? selecionaClass() : null}
                    </div>

                    <div id='fileBoxC'>
                        <label htmlFor="editFile" className='labelBt'>
                            <div className="custom-input">
                                {imagePreview && <img src={imagePreview} style={{ width: '100%', height: '100%' }} />}
                            </div>
                        </label>
                    </div>

                    <input type="file" id="editFile" name="editFile" onChange={handleImageChange} />

                </div>

                <div className="Infos">

                    <span id="Nome">

                        <div className="nomeDoLivro">
                            <input type="text" name="livroNome" className="livroNome" />
                        </div>

                        <div className="xis">
                            <img src={x} onClick={()=>{navigate(-1)}}/>
                        </div>
                    </span>

                    <div className="GenBoxL">

                        <div className="generosLivro">
                            <Selecao setConta={setConta} setSelecao={setSelecao} Quantos={3} />

                        </div>
                        <span id="contadora"><p>{conta + '/3'}</p></span>
                    </div>
                </div>

                <div className="salvaLivro">
                    <button type="submit">CONTINUAR</button>
                </div>

            </form >
        </div >
    );

}