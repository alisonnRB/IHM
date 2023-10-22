import React from "react";
import { useEffect, useState } from "react";
import './barraCap.css';

import mais from '../../../imgs/mais.png';
import lixo from '../../../imgs/sair.png';

import Interruptor from '../../../components/interruptor/interruptor';

import api from '../../../backend/controler/api_CapPronto';

export default function BarraCap(props) {
    const [numCaps, setNumCaps] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [Selecionado, setSelecionado] = useState(0);
    const [window, setWindow] = useState(false);


    const [pronto, setPronto] = useState(false);
    const [listP, setListP] = useState(false);


    useEffect(() => {
        setNumCaps(props.cap);
    }, [props]);

    useEffect(() => {
        if (props.pronto != '') {
            let a = JSON.parse(props.pronto);
            setListP(a);
            if (a[Selecionado] == 1) {
                setPronto(true);
            } else {
                setPronto(false);
            }
        }
    }, [props.pronto, Selecionado]);


    useEffect(() => {
        if (typeof props.titulo === 'string') {

            const tituloObj = JSON.parse(props.titulo);
            if (tituloObj) {
                setTitulo(tituloObj);
            }
        }
    }, [props.titulo, props.selected]);

    const Change = async () => {

        const resposta = await api.enviar(pronto, Selecionado, props.idLivro);
        if (resposta.ok) {
        }
    }

    const capitulos = () => {

        const list = [];
    
            for (let i = 1; i <= numCaps; i++) {
                console.log(listP);
                let a = <div id="content" key={i}>
                    <span className={`${Selecionado === i ? 'Selecionado' : ''}`} onClick={() => {
                        props.setUltimo(Selecionado);
                        props.setSave(true);
                        props.setCapSelected(i);
                        setSelecionado(i);
                    }}>
                        {!titulo[i] ? 'Novo Capitulo' : titulo[i]}

                    </span>
                    <div className={`abaApaga ${Selecionado === i && Selecionado != 0 ? 'Selecionado' : 'some'}`} onClick={() => { setWindow(true) }}><img src={lixo} /></div>
                    {listP && listP[i] == 1 ? <div className="prontiCAP"></div> : null}
                </div>;
                list.push(a);
            
        }
        return list;
    }

    const Janela = () => {
        return (
            <div id="janela">
                <div className="Conteudo">
                    <span id="message">
                        Você realmente quer excluir esse capítulo??<br></br>
                        Será impossível recuperá-lo!!
                    </span>
                    <div className="BTcomport">
                        <button onClick={() => { props.setDelete(true); setWindow(false) }} className="BTS s">SIM</button>
                        <button onClick={() => { setWindow(false) }} className="BTS n">NÃO</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {window ? Janela() : null}

            <div className="barraCap">
                <span className={`SIN ${Selecionado === 0 ? 'Selecionado' : ''}`} onClick={() => {
                    props.setUltimo(Selecionado);
                    props.setSave(true);
                    props.setCapSelected(0);
                    setSelecionado(0);
                }}>Sinopse</span>

                {capitulos()}


            </div>
            <div className="caixaMais">
                <img src={mais} onClick={() => {
                    props.setNumCaps(numCaps + 1);
                    props.setNew(true);
                }} />
            </div>

            {Selecionado != 0 ? <div className="caixaINT">
                <Interruptor id={1} title={'PRONTO'} alvo={pronto} setAlvo={setPronto} func={Change} />
            </div> : null}
        </>
    );

}