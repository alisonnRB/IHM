import React from 'react';
import './livros.css';
import { useState, useEffect } from 'react';

import Selecao from '../../livroSelectGen/select.jsx';
import Interruptor from '../../interruptor/interruptor';
import MostraLivros from './mostraLivros/mostraLivros.jsx';
import Noti from "../../notificacao/notificacao.jsx";

import livre from '../../../imgs/livre.jpeg';
import dez from '../../../imgs/dez.jpeg';
import doze from '../../../imgs/doze.jpeg';
import quatorze from '../../../imgs/quatorze.jpeg';
import dezeseis from '../../../imgs/dezeseis.jpeg';
import dezoito from '../../../imgs/dezoito.jpeg';

import api from "../../../backend/controler/api_search";

import words from './livros.json';


export default function Livros() {
    const [conta, setConta] = useState(0);
    const [Livro, setLivro] = useState('');
    const [classe, setClasse] = useState('fecha');
    const [Caracter, setCaracter] = useState(false);


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
    const [open, setOpen] = useState(false);
    const [openClass, setOpenClass] = useState(false);
    const [Class, setClass] = useState('');


    const [Novo, setNovo] = useState(false);
    const [Finalizado, setFinalizado] = useState(false);
    const [nome, setNome] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const [Uword, setUword] = useState('EN');


    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
            idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
    }

    const Busca = async () => {
        if (!open) {
            const resposta = await api.enviar(nome, null, null, null, null);
            if (resposta.ok) {
                setLivro(resposta.informacoes);
            }
        } else {
            const resposta = await api.enviar(nome, Novo, Finalizado, classificacao, selecao);
            if (resposta.ok) {
                setLivro(resposta.informacoes);
            }
        }
    }
    const selecionaClass = () => {
        return (
            <div className="opsClass">
                <img className={`imgC`} src={livre} onClick={() => { setClassificacao('livre'); setOpenClass(!openClass) }} />
                <img className={`imgC`} src={dez} onClick={() => { setClassificacao('dez'); setOpenClass(!openClass) }} />
                <img className={`imgC`} src={doze} onClick={() => { setClassificacao('doze'); setOpenClass(!openClass) }} />
                <img className={`imgC`} src={quatorze} onClick={() => { setClassificacao('quatorze'); setOpenClass(!openClass) }} />
                <img className={`imgC`} src={dezeseis} onClick={() => { setClassificacao('dezeseis'); setOpenClass(!openClass) }} />
                <img className={`imgC`} src={dezoito} onClick={() => { setClassificacao('dezoito'); setOpenClass(!openClass) }} />
            </div>
        );
    };

    const Classificado = () => {
        return (
            <div className="opsClass">
                <div className='caixaDeClass'>
                    <img src={Class} onClick={()=>{setClassificacao('')}} id='imagemClass'/>
                </div>
            </div>
        );
    }

    useEffect(() => {
        switch (classificacao) {
            case 'livre':
                setClass(livre);
                break;
            case 'dez':
                setClass(dez);
                break;
            case 'doze':
                setClass(doze);
                break;
            case 'quatorze':
                setClass(quatorze);
                break;
            case 'dezeseis':
                setClass(dezeseis);
                break;
            case 'dezoito':
                setClass(dezoito);
                break;
        }
    }, [classificacao]);

    const Filters = () => {

        return (
            <>
                <span className={`BOXS ${classe}`}>

                    <div className='boxSelection Gener'>
                        <Selecao setConta={setConta} setSelecao={setSelecao} Quantos={1} />
                    </div>

                    <div className='boxSelection'>
                        <span className='indi' onClick={() => { setOpenClass(!openClass) }}>{Uword.classificacao}</span>
                        {!openClass && classificacao != '' ? Classificado() : null}
                        {openClass ? selecionaClass() : null}
                    </div>

                    <div className='boxSelection inter'>
                        <Interruptor key={1} id={1} title={Uword.Novo_livro} alvo={Novo} setAlvo={setNovo} />

                        <Interruptor key={2} id={2} title={Uword.finalizado} alvo={Finalizado} setAlvo={setFinalizado} />
                    </div>

                </span>
            </>
        );
    };

    useEffect(() => {
        select_idioma();
        Busca();
    }, []);

    useEffect(() => {
        Busca();
    }, [Novo, Finalizado, nome, classificacao, selecao]);

    const abreFilter = () => {
        if (classe === 'abre') {
            setClasse('fecha');
            setCaracter(!Caracter);
            setTimeout(() => {
                setOpen(!open);
            }, 200);
        } else {
            setCaracter(!Caracter);
            setClasse('abre');
            setOpen(!open);
        }
    }

    return (
        <div className='TelaLivros'>
            <Noti />
            <span id='titlePerfil'>{Uword.title}</span>
            <div id='pesquisa'>
                <span className='boxLivros'>
                    <input type='text' id='searchText' placeholder={Uword.buscar} value={nome} onChange={(e) => { setNome(e.target.value); Busca(); }} />
                    <div id='searchImg'></div>
                </span>

                <div className='filtros'>
                    <span id='title'><p onClick={() => { abreFilter() }}>{Uword.filtros} {Caracter ? <>&and;</> : <>&or;</>}</p></span>
                    {open ? Filters() : null}
                </div>
            </div>

            <section className='buscaLivros'>
                {Livro != '' ? <MostraLivros Livro={Livro}/> : <p id='notFound'>{Uword.notFound}</p>}
            </section>


        </div>
    );
}