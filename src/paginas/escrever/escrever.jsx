import React from "react";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import './escrever.css';

import api from '../../backend/controler/api_gender';
import apiBook from '../../backend/controler/api_InfosLivro';
import apiEscreve from '../../backend/controler/api_salvaLivro';

import BarraCap from './barraCap/barraCap';
import Paginas from "./contentWrite/content";
import BtFloat from './btFloatH/btFloatH';

import logo from '../../imgs/livro_mine.png';
import abinha from '../../imgs/abinha.png';
import config from '../../imgs/config.png';
import fechaAba from '../../imgs/abinha-fecha.png';



export default function Escreve() {
    const location = useLocation();

    const [aberto, setAberto] = useState(false);
    const [fecharAba, setFechar] = useState('');
    const [genero, setGenero] = useState(['...']);
    const [qualGen, setGen] = useState([0, 1, 2]);
    const [capSelected, setCapSelected] = useState(0);

    const [idLivro, setIdLivro] = useState('');
    const [info, setInfo] = useState({});
    const id = localStorage.getItem('id');

    const [content, setContent] = useState('');
    const [cap, setCap] = useState(0);
    const [titulo, setTitulo] = useState('');

    const [titleCap, setTitleCap] = useState({});
    const [salvar, setSalvar] = useState(false);

    const [Sinopse, setSinopse] = useState('');

    const [ultimo, setUltimo] = useState(0);

    console.log(ultimo);

    const Salva = async () => {
        const resposta = await apiEscreve.enviar(content, ultimo, idLivro, titulo, id);
        if (resposta.ok == true) {
            Busca();
        }
    };

    useEffect(() => {
        if (salvar) {
            Salva();
            setSalvar(false);
        }
    }, [salvar]);

    useEffect(() => {
        const idLivroG = new URLSearchParams(location.search).get('id');
        setIdLivro(idLivroG);
    }, []);

    useEffect(() => {
        Busca();

    }, [idLivro]);

    useEffect(() => {
        if (info.genero != NaN && info.genero != undefined) {
            let gender = JSON.parse(info.genero);
            setGen(gender);
        }
    }, [info]);

    const Busca = async () => {
        const resposta = await api.enviar();
        if (resposta.ok === true) {
            setGenero(resposta.gender);
        }
        const respostaBook = await apiBook.enviar(idLivro);
        if (respostaBook.ok === true) {
            setInfo(respostaBook.infos);

            if (respostaBook.infos && respostaBook.infos.sinopse) {
                setSinopse(respostaBook.infos.sinopse);
            }

            if (respostaBook.infos && respostaBook.infos.texto) {
                setTitleCap(respostaBook.infos.texto);

                const cont = Object.keys(JSON.parse(respostaBook.infos.texto));
                let contador = 0;
                for (let chaves of cont) {
                    contador++;
                }
                setCap(contador);
            }
        }
    };

    const informações = () => {
        return (
            <div id="content-aba">

                <div className={`caixa-aba ${fecharAba}`}>
                    <span><img src={config} /></span>

                    <span className="boxNAME">
                        {info.nome}
                    </span>

                    <span className="caixa-info">

                        <div className="boxIMG">
                            <img src={`http://192.168.255.56/livros/${id}/${info.nome}/${info.imagem}`} />
                        </div>

                        <div className="boxGEN">
                            <div className='gender'>{genero[qualGen[0]]}</div>
                            <div className='gender'>{genero[qualGen[1]]}</div>
                            <div className='gender'>{genero[qualGen[2]]}</div>
                        </div>

                    </span>
                </div>

                <img className={`abinhaFecha ${fecharAba}`} src={fechaAba} onClick={() => {
                    setFechar('fechar');
                    setTimeout(() => {
                        setAberto(!aberto);
                    }, 1000);
                }} />

            </div>);
    }

    return (
        <div className="boxAttBook">

            {aberto ? (
                informações()
            ) : (
                <img className="abinha" src={abinha} onClick={() => { setAberto(!aberto); setFechar('abrir'); }} />
            )}

            <span className="infosDoLivro">
                <img className="boxLogo" src={logo} />
                <p>{capSelected == 0 ? 'Sinopse' : 'Capitulo ' + capSelected}</p>
            </span>
            <BarraCap setCap={setCap} cap={cap} setCapSelected={setCapSelected} titulo={titleCap} setUltimo={setUltimo} setSalvar={setSalvar}/>
            <Paginas idLivro={idLivro} info={info} setContent={setContent} cap={cap} setTitulo={setTitulo} titulo={titleCap} selected={capSelected} sinopse={Sinopse} />
            <BtFloat setSalvar={setSalvar} />
        </div>
    );

}