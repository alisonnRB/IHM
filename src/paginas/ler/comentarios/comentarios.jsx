import React from "react";
import './comentarios.css';
import { useState, useEffect } from "react";

import Card from '../../../components/cardComent/cardComent';

import api from '../../../backend/controler/api_comenta';
import apiBusca from '../../../backend/controler/api_comentarios';

export default function Comentarios(props) {
    const [comentarios, setComentarios] = useState(0);


    const [texto, setTexto] = useState('');
    const [coment, setComent] = useState('');
    const [resposta, setResposta] = useState(false);
    const [idResposta, setIdResposta] = useState(0);


    const [openRes, setOpenRes] = useState('');

    useEffect(()=>{
        props.setOpenRes(openRes);
    },[openRes]);

    useEffect(()=>{
        setOpenRes(props.openRes);
    },[props.openRes]);



    const Comentar = async (event) => {
        if (event) {
            event.preventDefault();
        }

        const id = localStorage.getItem('id');
        const response = await api.enviar(id, props.tipo, props.idLivro, texto, resposta, idResposta);
    }

    const Busca = async () => {
        const response = await apiBusca.enviar(props.idLivro, 'livro');
        if (response.ok) {
            setComentarios(response.comentarios);
        }
    }

    const GeraComents = () => {
        const list = [];

        let quant = Object.keys(comentarios).length;

        for (let i = 0; i < quant; i++) {
            if (!comentarios[i].resposta) {
                let a = <Card key={i} chave={i} infos={comentarios[i]}  openRes={openRes} setOpenRes={setOpenRes}  setTexto={setTexto} setResposta={setResposta} setIdResposta={setIdResposta} Comentar={Comentar} res={false} />;
                list.push(a);
                for (let b = i; b < quant; b++) {
                    if (comentarios[b].resposta && comentarios[b].id_resposta == comentarios[i].id && !comentarios[i].resposta) {
                        let a = <span className="replyBOX"><Card key={i + b} chave={b} infos={comentarios[b]} idRes={comentarios[i].user} openRes={openRes} setOpenRes={setOpenRes} setTexto={setTexto} setResposta={setResposta} setIdResposta={setIdResposta} Comentar={Comentar} res={true} /></span>;
                        list.push(a);
                    }
                    for (let c = b; c < quant; c++) {
                        if (comentarios[c].resposta && comentarios[b].resposta && comentarios[c].id_resposta == comentarios[b].id) {
                            let a = <span className="replyBOX"><Card key={c} chave={c} infos={comentarios[c]} idRes={comentarios[b].user} openRes={openRes} setOpenRes={setOpenRes} setTexto={setTexto} setResposta={setResposta} setIdResposta={setIdResposta} Comentar={Comentar} res={true} /></span>;
                            list.push(a);
                        }
                    }
                }
            }


        }

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
                <input type="text" value={coment} onChange={(event) => { setComent(event.target.value); setTexto(event.target.value) }} placeholder="coment..." />
            </form>

            <div className="comentarios">
                {GeraComents()}
            </div>

        </div>
    );
}