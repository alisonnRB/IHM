import React from "react";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import './escrever.css';

import api from '../../backend/controler/api_gender';
import apiBook from '../../backend/controler/api_InfosLivro';
import apiEscreve from '../../backend/controler/api_salvaLivro';
import apiDell from '../../backend/controler/api_DellCap';

import BarraCap from './barraCap/barraCap';
import Paginas from "./contentWrite/content";
import BtFloat from './btFloatH/btFloatH';

import logo from '../../imgs/livro_mine.png';
import abinha from '../../imgs/abinha.png';
import config from '../../imgs/config.png';
import fechaAba from '../../imgs/abinha-fecha.png';



export default function Escreve() {
    const location = useLocation();

    //TODO aba livro
    const [aberto, setAberto] = useState(false);
    const [fecharAba, setFechar] = useState('');
    const [genero, setGenero] = useState(['...']);
    const [qualGen, setGen] = useState([0, 1, 2]);
    const [info, setInfo] = useState({});
    //TODO aba livro

    //TODO infos user
    const [idLivro, setIdLivro] = useState('');
    const id = localStorage.getItem('id');
    //TODO infos user

    //TODO estado de conteudo    
    const [titulo, setTitulo] = useState('');
    const [Sinopse, setSinopse] = useState('');
    const [content, setContent] = useState('');
    //TODO estado de conteudo

    //TODO controle
    const [Save, setSave] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [New, setNew] = useState(false);
    const [numCaps, setNumCaps] = useState(0);

    const [ultimo, setUltimo] = useState(0);
    const [capSelected, setCapSelected] = useState(0);
    const [cap, setCap] = useState(0);
    const [titleCap, setTitleCap] = useState({});
    //TODO controle


    const Deleta = async () => {
        const resposta = await apiDell.enviar(capSelected, idLivro, titulo, id);
        if (resposta.ok == true) {
            window.location.reload();
        }
    };
    const Salva = async (i) => {
        if (i == 'i') {
            const resposta = await apiEscreve.enviar(content, capSelected, idLivro, titulo, id);
            if (resposta.ok == true) {
                Busca();
            }
        } else {
            const resposta = await apiEscreve.enviar(content, ultimo, idLivro, titulo, id);
            if (resposta.ok == true) {
                Busca();
            }
        }

    };
    const Novo = async () => {
        const resposta = await apiEscreve.enviar('', numCaps, idLivro, 'capitulo Novo', id);
        if (resposta.ok == true) {
            Salva('i');
        }
    }

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

    useEffect(() => {
        if (Save) {
            Salva();
            setSave(false);
        }
    }, [Save]);
    useEffect(() => {
        Salva();
    }, [capSelected])
    useEffect(() => {
        if (Delete) {
            Deleta();
            setDelete(false);
        }
    }, [Delete]);
    useEffect(() => {
        if (New) {
            Novo();
            setNew(false);
        }
    }, [New]);

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
            <BarraCap
                setNumCaps={setNumCaps}
                setCap={setCap}
                cap={cap}
                setCapSelected={setCapSelected}
                titulo={titleCap}
                setUltimo={setUltimo}
                setSave={setSave}
                setDelete={setDelete}
                setTitulo={setTitulo}
                setNew={setNew} />

            <Paginas
                idLivro={idLivro}
                info={info}
                setContent={setContent}
                cap={cap}
                setTitulo={setTitulo}
                titulo={titleCap}
                selected={capSelected}
                sinopse={Sinopse} />

            <BtFloat />
        </div>
    );

}