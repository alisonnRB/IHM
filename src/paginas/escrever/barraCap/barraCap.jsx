import React from "react";
import { useEffect, useState } from "react";
import './barraCap.css';

import mais from '../../../imgs/mais.png';
import lixo from '../../../imgs/lixeira.png';

export default function BarraCap(props) {
    const [numCaps, setNumCaps] = useState(0);
    const [titulo, setTitulo] = useState('c');
    const [Selecionado, setSelecionado] = useState(0);


    useEffect(() => {
        setNumCaps(props.cap);
    }, [props])

    useEffect(() => {
        if (typeof props.titulo === 'string') {

            const tituloObj = JSON.parse(props.titulo);
            if (tituloObj) {
                setTitulo(tituloObj);
            }
        }
    }, [props.titulo, props.selected]);



    const capitulos = () => {

        const list = [];
        for (let i = 1; i <= numCaps; i++) {
            let a = <span className={`${Selecionado === i ? 'Selecionado' : ''}`} key={i} onClick={() => { props.setUltimo(Selecionado); props.setSalvar(true); props.setCapSelected(i); setSelecionado(i)}}>
                {!titulo[i] ? 'Novo Capitulo' : titulo[i]}
                <div key={i} className={`abaApaga ${Selecionado === i && Selecionado != 0 ? 'Selecionado' : 'some'}`}><img src={lixo} /></div>
            </span>;
            list.push(a);
        }
        return list;
    }

    return (
        <>
            <div className="barraCap">
                <span  className={`${Selecionado === 0 ? 'Selecionado' : ''}`} onClick={() => { props.setUltimo(Selecionado); props.setSalvar(true); props.setCapSelected(0); setSelecionado(0)}}>Sinopse</span>

                {capitulos()}


            </div>
            <div className="caixaMais">
                <img src={mais} onClick={() => { setNumCaps(numCaps + 1); props.setCap(numCaps + 1); props.setCapSelected(numCaps + 1); setSelecionado(numCaps + 1)}} />
            </div>
        </>
    );

}