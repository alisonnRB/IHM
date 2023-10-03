import React from 'react';
import './livros.css';
import { useState, useEffect } from 'react';

import Selecao from '../../livroSelectGen/select';
import Interruptor from '../../interruptor/interruptor';
import MostraLivros from './mostraLivros/mostraLivros';

import api from "../../../backend/controler/api_search";

function Livros() {
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
    const [Novo, setNovo] = useState(false);
    const [Finalizado, setFinalizado] = useState(false);
    const [nome, setNome] = useState('');
    const [classificacao, setClassificacao] = useState('');


    const Busca = async () => {
        if (!open) {
            const resposta = await api.enviar(nome, null, null, null, null);
            if (resposta.ok) {
                setLivro(resposta.livros);
            }
        } else {
            const resposta = await api.enviar(nome, Novo, Finalizado, classificacao, selecao);
            if (resposta.ok) {
                setLivro(resposta.livros);
            }
        }



    }

    const Filters = () => {

        return (
            <>
                <span className={`BOXS ${classe}`}>

                    <div className='boxSelection Gener'>
                        <Selecao setConta={setConta} setSelecao={setSelecao} Quantos={1} />
                    </div>

                    <div className='boxSelection'>
                        <span className='indi'>class Indicativa</span>
                    </div>

                    <div className='boxSelection inter'>
                        <Interruptor key={1} id={1} title={'LivrosNovos'} alvo={Novo} setAlvo={setNovo} />

                        <Interruptor key={2} id={2} title={'Finalizados'} alvo={Finalizado} setAlvo={setFinalizado} />
                    </div>

                </span>
            </>
        );
    };

    useEffect(() => {
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
            <form>
                <span className='boxLivros'>
                    <input type='text' id='searchText' placeholder='Buscar' value={nome} onChange={(e) => { setNome(e.target.value); Busca(); }} />
                    <div id='searchImg'></div>
                </span>

                <div className='filtros'>
                    <span id='title'><p onClick={() => { abreFilter() }}>FILTRO {Caracter ? <>&and;</> : <>&or;</>}</p></span>
                    {open ? Filters() : null}
                </div>
            </form>

            <section className='buscaLivros'>
                <MostraLivros Livro={Livro} />
            </section>


        </div>
    );
}

export default Livros;