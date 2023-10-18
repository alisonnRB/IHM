import React from "react";
import './comentarios.css';
import { useState, useEffect } from "react";

import Card from '../../../components/cardComent/cardComent';

import api from '../../../backend/controler/api_comenta';
import apiBusca from '../../../backend/controler/api_comentarios';
import enviar from '../../../imgs/enviar.png';

export default function Comentarios(props) {
    const [comentarios, setComentarios] = useState(0);


    const [texto, setTexto] = useState('');
    const [rest, setRest] = useState('');
    const [coment, setComent] = useState('');
    const [resposta, setResposta] = useState(false);
    const [idResposta, setIdResposta] = useState(0);
    const [conversa, setConversa] = useState(0);

    const [cor, setCor] = useState('');


    const [openRes, setOpenRes] = useState('fechado');
    const [curtindo, setCurtindo] = useState(false);

    useEffect(() => {
        props.setOpenRes(openRes);
    }, [openRes]);

    useEffect(() => {
        setOpenRes(props.openRes);
    }, [props.openRes]);

    useEffect(() => {
        setCor(props.cor);
    }, [props.cor]);

    useEffect(() => {
        if (curtindo) {
            props.setCurtindo(true);
            setCurtindo(false);
        }
    }, [curtindo]);



    const Comentar = async (event) => {
        if (event) {
            event.preventDefault();
        }
        const id = localStorage.getItem('id');
        const response = await api.enviar(id, props.tipo, props.idLivro, texto, resposta, idResposta, conversa);
        if (response.ok) {
            setTexto('');
            setComent('');
            setResposta(0);
            setConversa(0);
            setRest('');
            Busca();
        }
    }

    const Busca = async () => {
        
        const response = await apiBusca.enviar(props.idLivro, 'livro');
        console.log(response);
        if (response.ok) {
            setComentarios(response.informacoes);
        }
    }

    const GeraComents = () => {
        const list = [];

        let quant = Object.keys(comentarios).length;

        for (let i = 0; i < quant; i++) {
            if (!comentarios[i].resposta) {
                let a = <span className="comentaP"><Card
                    rest={rest}
                    setConversa={setConversa}
                    idConv={comentarios[i].id}
                    key={`${i}`}
                    cor={cor}
                    chave={`${i}`}
                    infos={comentarios[i]}
                    openRes={openRes}
                    setOpenRes={setOpenRes}
                    setTexto={setTexto}
                    setResposta={setResposta}
                    setIdResposta={setIdResposta}
                    Comentar={Comentar}
                    res={false}
                    setCurtindo={setCurtindo}
                    curtindo={curtindo}
                    curtidas={props.curtidas ? props.curtidas : "none"}
                /></span>;
                list.push(a);

                for (let b = 0; b < quant; b++) {
                    if (comentarios[b].resposta && comentarios[b].id_resposta == comentarios[i].id && comentarios[b].id_resposta == comentarios[b].conversa) {
                        let a = <span className="replyBOX">
                            <Card
                                rest={rest}
                                setConversa={setConversa}
                                key={`${i}-${b}`}
                                cor={cor}
                                chave={`${i}-${b}`}
                                infos={comentarios[b]}
                                idRes={comentarios[i].user}
                                idConv={comentarios[i].id}
                                openRes={openRes}
                                setOpenRes={setOpenRes}
                                setTexto={setTexto}
                                setResposta={setResposta}
                                setIdResposta={setIdResposta}
                                Comentar={Comentar}
                                res={true}
                                curtindo={curtindo}
                                setCurtindo={setCurtindo}
                                curtidas={props.curtidas ? props.curtidas : "none"}
                            /></span>;
                        list.push(a);

                    }
                    for (let c = 0; c < quant; c++) {
                        if (comentarios[c].resposta && comentarios[c].id_resposta == comentarios[b].id && comentarios[c].id_resposta != comentarios[c].conversa && comentarios[c].conversa == comentarios[i].id) {
                            let a = <span className="replyBOX">
                                <Card
                                    rest={rest}
                                    setConversa={setConversa}
                                    idConv={comentarios[i].id}
                                    key={`${i}-${b}-${c}`}
                                    cor={cor}
                                    chave={`${i}-${b}-${c}`}
                                    infos={comentarios[c]}
                                    idRes={comentarios[b].user}
                                    openRes={openRes}
                                    setOpenRes={setOpenRes}
                                    setTexto={setTexto}
                                    setResposta={setResposta}
                                    setIdResposta={setIdResposta}
                                    Comentar={Comentar}
                                    curtindo={curtindo}
                                    curtidas={props.curtidas ? props.curtidas : "none"}
                                    setCurtindo={setCurtindo}
                                    res={true} /></span>;
                            list.push(a);
                        }
                    }
                }
            }

        }

        let a = <span className="interval"></span>;
        list.push(a);

        return list;

    }

    useEffect(() => {
        if (props.idLivro) {
            Busca();
        }
    }, [props.idLivro])

    return (
        <div id="boxComent">
            <form className="campoComent" onSubmit={(event) => { Comentar(event) }}>
                <input type="text" value={coment} onChange={(event) => { setComent(event.target.value); setTexto(event.target.value) }} placeholder="Escreva um comentario..." />
                <img id="enviaCom" src={enviar} onClick={(event) => { Comentar(event) }} />
            </form>

            <div className="comentarios">
                {GeraComents()}
            </div>

        </div>
    );
}