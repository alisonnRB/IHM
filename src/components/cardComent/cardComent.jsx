import React from "react";
import './cardComent.css';
import { useState, useEffect } from "react";


import api from '../../backend/controler/api_info';

import like from '../../imgs/like.png';

export default function Comentarios(props) {
    const [infos, setInfos] = useState('');
    const [data, setData] = useState('');
    const [dataTime, setDataTime] = useState('');

    const [user, setUser] = useState('');
    const [foto, setFoto] = useState('');

    const [resposta, setResposta] = useState('');

    const [salva, setSalva] = useState(false);

    const [nomeRes, setNomeRes] = useState(false);



    const Busca = async (i) => {
        if (i) {
            const response = await api.enviar(infos.user);
            if (response) {
                setUser(response.userInfo);
            }
        } else {
            const response = await api.enviar(props.idRes);
            if (response) {
                setNomeRes(response.userInfo.nome);
            }
        }

    }

    const respondendo = (event) => {
        event.preventDefault();

        props.setTexto(resposta);
        props.setResposta(true);
        props.setIdResposta(infos.id);

        setSalva(true);
    }

    useEffect(() => {
        if (props.res) {
            Busca(false);
        }
    }, [props.res])

    useEffect(() => {
        if (salva) {
            props.Comentar();
            setSalva(false);
        }

    }, [salva])

    useEffect(() => {
        setInfos(props.infos);
    }, [props.infos]);

    useEffect(() => {
        if (infos.user) {
            Busca(true);
        }
    }, [infos.user]);

    useEffect(() => {
        setFoto("http://192.168.255.56/imagens/" + user.fotoPerfil);
    }, [user.fotoPerfil]);


    useEffect(() => {
        if (infos.tempo) {
            const dataAtual = new Date();
            const dataFornecida = new Date(infos.tempo);
            const diferencaEmMilissegundos = dataAtual - dataFornecida;
            const diasDecorridos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

            let tempo = 0;
            let time = '';

            if (diasDecorridos > 365) {
                tempo = diasDecorridos % 365;
                time = tempo > 1 ? 'ano' : 'anos';
            }
            else if (diasDecorridos > 30) {
                tempo = diasDecorridos % 30;
                time = tempo > 1 ? 'mês' : 'meses';
            }
            else if (diasDecorridos > 7) {
                tempo = diasDecorridos % 7;
                time = tempo > 1 ? 'semana' : 'semanas';
            }
            else {
                tempo = diasDecorridos;
                time = tempo < 2 ? 'hoje' : 'dias';

            }

            setData(tempo);
            setDataTime(time);
        }
    }, [infos.tempo]);

    return (
        <>
            <span id="comentary">
                <img className="userComent" src={foto} />

                <div className="boxComent">
                    <span className="nomeComent">{user.nome && !props.res ? user.nome : `${user.nome} > ${nomeRes}`}</span>
                    <div className="coment">{infos.texto ? infos.texto : '...'}</div>
                </div>

                <div className="btsCurti">
                    <div className="boxDEimg">
                        <img src={like} />
                    </div>
                </div>
            </span>

            <span id="infosComent" onClick={(e) => { e.stopPropagation() }}>
                <p>{`${dataTime != 'hoje' ? 'há' : ''} ${dataTime != 'hoje' ? data : ''} ${dataTime}`} </p>
                <p className="reply" onClick={() => { props.setOpenRes(props.chave) }}>RESPONDER</p>
            </span>

            {props.openRes == props.chave ? <form id="resposta" onClick={(e) => { e.stopPropagation() }} onSubmit={(event) => { respondendo(event) }}>
                <input type="text" placeholder="Responder..." value={resposta} onChange={(event) => { setResposta(event.target.value) }} />
            </form> : null}


        </>
    );
}