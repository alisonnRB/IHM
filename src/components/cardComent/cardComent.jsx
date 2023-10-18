import React from "react";
import './cardComent.css';
import { useState, useEffect } from "react";


import api from '../../backend/controler/api_info';
import curtida from '../../backend/controler/api_curtir';
import like from '../../imgs/like.png';
import enviar from '../../imgs/enviar.png';

export default function Comentarios(props) {
    const [infos, setInfos] = useState('');
    const [data, setData] = useState('');
    const [dataTime, setDataTime] = useState('');

    const [user, setUser] = useState('');
    const [foto, setFoto] = useState('');

    const [resposta, setResposta] = useState('');

    const [salva, setSalva] = useState(false);

    const [nomeRes, setNomeRes] = useState(false);

    const [hover, setHover] = useState(false);

    const [curtido, setCurtido] = useState(false);
    const [quantCurti, setQuantCurti] = useState(0);

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
        props.setConversa(props.idConv);

        setSalva(true);
    }

    const curtir = async () => {
        let id = localStorage.getItem('id');
        const resposta = await curtida.enviar(id, infos.id_ref, 'livro', infos.id);
        if (resposta.ok) {
            props.setCurtindo(true);
        }
    }



    useEffect(() => {
        if (props.curtidas != 'none') {
            let keys = Object.keys(props.curtidas).length;
            let id = localStorage.getItem('id');
            for (let i = 0; i < keys; i++) {
                if (props.curtidas[i].id_user == id && infos.id == props.curtidas[i].coment) {
                    setCurtido(true);
    
                    return;
                }
            }
        }
        setCurtido(false);

    }, [props.curtidas]);

    useEffect(() => {
        if (props.res) {
            Busca(false);
        }
    }, [props.res]);

    useEffect(() => {
        setResposta(props.rest);
    }, [props.rest])

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
        if (infos && infos['curtidas']) {
            let a = infos['curtidas'];
            if (infos['curtidas'] > 1000000) {
                a = infos['curtidas'] / 1000000 + 'M';
            }
            else if (infos['curtidas'] > 1000) {
                a = infos['curtidas'] / 1000 + 'K';
            }
            setQuantCurti(a);
        }
    }, [infos, props.curtidas]);

    useEffect(() => {
        if (infos.user) {
            Busca(true);
        }
    }, [infos.user]);

    useEffect(() => {
        if (typeof user.fotoPerfil == "string") {
            setFoto("http://10.1.1.211/imagens/" + user.fotoPerfil);
        }
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

    const style = {
        backgroundColor: curtido
            ? (props.cor ? props.cor : '#C4BFB2')
            : (hover ? (props.cor ? props.cor : '#0A6E7D') : '#C4BFB2'),
    };

    return (
        <>
            <span id="comentary">
                <img className="userComent" src={foto} />

                <div className="boxComent" >
                    <span className="nomeComent">{user.nome && !props.res ? user.nome : `${user.nome} > ${nomeRes}`}</span>
                    <div className="coment">{infos.texto ? infos.texto : '...'}</div>
                </div>

                <div className="btsCurti" >
                    <div className="boxDEimg" style={style}>
                        <img src={like} onClick={() => { curtir();}} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} />
                    </div>
                    <span className="likeNUM">{quantCurti}</span>
                </div>
            </span>

            <span id="infosComent" onClick={(e) => { e.stopPropagation() }} >
                <p>{`${dataTime != 'hoje' ? 'há' : ''} ${dataTime != 'hoje' ? data : ''} ${dataTime}`} </p>
                <p className="reply" onClick={() => { props.setOpenRes(props.chave) }} style={props.cor && props.cor != '' ? { color: props.cor } : { color: '#0A6E7D' }}>RESPONDER</p>
            </span>

            {props.openRes == props.chave ? <form id="resposta" onClick={(e) => { e.stopPropagation() }} onSubmit={(event) => { respondendo(event) }}>
                <input type="text" placeholder="Responder..." value={resposta} onChange={(event) => { setResposta(event.target.value) }} /><img id="enviaRes" onClick={(event) => { respondendo(event) }} src={enviar} />
            </form> : null}


        </>
    );
}