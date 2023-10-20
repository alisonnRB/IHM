import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import comum from '../../../../imgs/comum.png';
import bronze from '../../../../imgs/bronze.png';
import prata from '../../../../imgs/prata.png';
import ouro from '../../../../imgs/ouro.png';
import diamante from '../../../../imgs/diamante.png';

import Seguir from '../../../../backend/controler/api_seguir';
import Seguindo from '../../../../backend/controler/api_buscaSeguidores';

function CardPessoa(props) {
    const id = localStorage.getItem('id');
    const [user, setUser] = useState('');
    const [seguidores, setSeguidores] = useState(0);
    const [seguidoresS, setSeguidoresS] = useState('');
    const [medalha, setMedalha] = useState(comum);

    const [segue, setSegue] = useState(false);

    const seguir = async (user) => {
        const resposta = await Seguir.enviar(user);
        if (resposta.ok) {
            Seguidores();
        }
    }

    const Seguidores = async () => {
        if (user.id) {
            const responseSeg = await Seguindo.enviar(user.id);
            if (responseSeg.informacoes) {
                setSegue(true);
            }
        }
    }

    useEffect(() => {
        setUser(props.user);
        Seguidores();
    }, [props.user])

    useEffect(() => {
        setSeguidores(user.seguidores);
    }, [user]);

    useEffect(() => {
        if (seguidores >= 1000000) {
            setSeguidoresS(` ${seguidores / 1000000} MI`);
            setMedalha(diamante);
        }
        else if (seguidores >= 50000) {
            setSeguidoresS(` ${seguidores / 1000} K`);
            setMedalha(ouro);
        }
        else if (seguidores >= 1000) {
            setSeguidoresS(` ${seguidores / 1000} K`);
            setMedalha(prata);
        }
        else if (seguidores >= 500) {
            setSeguidoresS(seguidores);
            setMedalha(bronze);
        }
        else {
            setSeguidoresS(seguidores);
            setMedalha(comum);
        }

        Seguidores();
    }, [seguidores]);

    return (
        <span className="BoxCardPessoas">
            <span className="cardPessoa">
                <div id="perfilPessoa">
                    <Link className="Link" to={id != user.id ? `/Busca/user?id=${encodeURIComponent(JSON.stringify(user.id))}` : '/perfil'}>
                        <img src={`${'http://192.168.255.56/imagens/' + user.fotoPerfil}`} />
                    </Link>
                </div>

                <div className="infosPessoa">
                    <Link className="Link" to={id != user.id ? `/Busca/user?id=${encodeURIComponent(JSON.stringify(user.id))}` : '/perfil'}>
                        <span className="nomePessoa">{user.nome}</span>
                    </Link>
                    <span className="catPessoa">
                        <div className="categoria"><img src={medalha} id="medalhaC" />{seguidoresS}</div>
                        {user.id != id ? <div className="opSeguir"><p onClick={() => { seguir(user.id) }}>{segue ? 'SEGUINDO' : 'SEGUIR'}</p></div> : null}
                    </span>
                </div>
            </span>
        </span>
    );
}

export default CardPessoa;