import React from "react";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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

import livre from '../../imgs/livre.jpeg';
import dez from '../../imgs/dez.jpeg';
import doze from '../../imgs/doze.jpeg';
import quatorze from '../../imgs/quatorze.jpeg';
import dezeseis from '../../imgs/dezeseis.jpeg';
import dezoito from '../../imgs/dezoito.jpeg';




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
    const [classificacao, setClassificacao] = useState('');
    const [visuClass, setVisuClass] = useState(livre);

    const [ultimo, setUltimo] = useState(0);
    const [capSelected, setCapSelected] = useState(0);
    const [cap, setCap] = useState(0);
    const [titleCap, setTitleCap] = useState({});

    const [primeira, setPrimeira] = useState(false);
    //TODO controle

    useEffect(() => {
        if (primeira) {
            salvarDadosLocalmente();
        }
        SalvaSai();
    }, [content, titulo]);

    const salvarDadosLocalmente = () => {
        if (capSelected === 0) {
            setTitulo('');
        }
        const dadosParaSalvar = {
            content: content,
            capSelected: capSelected,
            idLivro: idLivro,
            titulo: titulo,
            id: id,
        };
        const dadosString = JSON.stringify(dadosParaSalvar);
        localStorage.setItem("dadosUsuario", dadosString);
    };

    const Deleta = async () => {
        const resposta = await apiDell.enviar(capSelected, idLivro, titulo, id);
        if (resposta.ok == true) {
            localStorage.removeItem('dadosUsuario');

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
    };
    const SalvaSai = async () => {
        const dadosString = localStorage.getItem("dadosUsuario");
        if (dadosString) {
            const dadosSalvos = JSON.parse(dadosString);
            const resposta = await apiEscreve.enviar(dadosSalvos.content, dadosSalvos.capSelected, dadosSalvos.idLivro, dadosSalvos.titulo, dadosSalvos.id);
            if (resposta.ok == true) {
                return;
            }
        }
    };
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
            if (respostaBook.infos && respostaBook.infos.classificacao) {
                setClassificacao(respostaBook.infos.classificacao);
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
        SalvaSai();
        setPrimeira(true);
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


    function GeraGen(){
        const list = [];
        for(let i = 0; i<3; i++){
            if(genero[qualGen[i]]){
                let a = <div className='gender'>{genero[qualGen[i]]}</div>;
                list.push(a);
            }
        }
        return list;
    }

    const informações = () => {
        return (
            <div id="content-aba">

                <div className={`caixa-aba ${fecharAba}`}>
                    <span><Link className="link" to={`/perfil/MeusLivros/escreva/editar?id=${encodeURIComponent(idLivro)}`}><img src={config} /></Link></span>

                    <span className="boxNAME">
                        {info.nome}
                    </span>

                    <span className="caixa-info">

                        <div className="boxIMG">
                            <img id="classifica" src={visuClass} />
                            <img src={`http://192.168.255.56/livros/${id}/${info.nome}/${info.imagem}`} />
                        </div>

                        <div className="boxGEN">
                            <div className="DisplayG">
                                {GeraGen()}
                            </div>
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