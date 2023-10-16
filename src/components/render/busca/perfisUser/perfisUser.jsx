import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './perfisUser.css';

import comum from '../../../../imgs/comum.png';
import bronze from '../../../../imgs/bronze.png';
import prata from '../../../../imgs/prata.png';
import ouro from '../../../../imgs/ouro.png';
import diamante from '../../../../imgs/diamante.png';

import api from '../../../../backend/controler/api_info';
import apiGender from '../../../../backend/controler/api_gender';
import apiLivros from '../../../../backend/controler/api_meusLivros';

import Seguir from '../../../../backend/controler/api_seguir';
import Seguindo from '../../../../backend/controler/api_buscaSeguidores';

import FloatBt from '../../../BtFloat/btFloat';
import Livro from '../../../cardLivro/cardLivro';

export default function User() {
    const location = useLocation();
    const [idUser, setIdUser] = useState('');
    const id = localStorage.getItem('id');

    const [seguidores, setSeguidores] = useState(0);
    const [seguidoresS, setSeguidoresS] = useState('');
    const [seguindo, setSeguindo] = useState(false);
    const [medalha, setMedalha] = useState(comum);

    const [infos, setInfos] = useState('');
    const [generos, setGeneros] = useState([]);
    const [meusGen, setMeusGen] = useState([]);
    const [listF, setListF] = useState([]);
    const [name, setName] = useState('');
    const [Perfil, setPerfil] = useState('');

    const [livro, setLivro] = useState([]);


    const Busca = async () => {
        const resposta = await api.enviar(idUser);
        if (resposta) {
            setInfos(resposta.userInfo);
        }
        const response = await apiGender.enviar();
        if (response) {
            setGeneros(response.gender);
        }
        const livrinhos = await apiLivros.enviar(idUser);
        if (livrinhos.ok) {
            setLivro(livrinhos.livros);
        }
        const responseSeg = await Seguindo.enviar(id, idUser);
        if (responseSeg.seguidores[0] && responseSeg.seguidores[0].user_id == id) {
            setSeguindo(true);
        }
    };

    const seguir = async () => {
        const resposta = await Seguir.enviar(id, idUser);
        if (resposta.ok) {
            Busca();
        }
    }

    const setaFavoritos = (genero) => {
        const listT = []
        for (let i = 0; i < genero.length; i++) {
            listT.push(genero[i]);
        }
        setListF(listT);
    }

    useEffect(() => {
        const idUsers = new URLSearchParams(location.search).get('id');
        setIdUser(idUsers);
    }, []);

    useEffect(() => {
        Busca();
    }, [idUser]);

    useEffect(() => {
        if (infos) {
            if (infos.genero) {
                const genero = JSON.parse(infos.genero);
                setaFavoritos(genero);
            }
            setName(infos.nome);
            if (infos.fotoPerfil) {
                setPerfil("http://192.168.255.56/imagens/" + infos.fotoPerfil);
            }

        }
        if (infos.genero) {
            setMeusGen(infos.genero);
        }
        if(infos.seguidores){
            setSeguidores(infos.seguidores);
        }
    }, [infos]);

    useEffect(() => {
        try {
            setaFavoritos(JSON.parse(meusGen));
        } catch {
            return;
        }
    }, [generos, meusGen]);

    useEffect(() => {
        if (livro) {
            Busca()
        }
    }, [livro]);

    useEffect(() => {
        if(seguidores >= 1000000){
          setSeguidoresS(` ${seguidores/1000000} MI`);
          setMedalha(diamante);
        }
        else if(seguidores >= 50000){
          setSeguidoresS(` ${seguidores/1000} K`);
          setMedalha(ouro);
        }
        else if(seguidores >= 1000){
          setSeguidoresS(` ${seguidores/1000} K`);
          setMedalha(prata);
        }
        else if(seguidores >= 500){
          setSeguidoresS(seguidores);
          setMedalha(bronze);
        }
        else{
          setSeguidoresS(seguidores);
          setMedalha(comum);
        }
      }, [seguidores]);


    const mostraGender = (index) => {
        return generos[parseInt(listF[index]) + 1] ? generos[parseInt(listF[index]) + 1] : '...';
    }

    const renderizarItens = () => {
        const elementos = [];
        let tempRow = [];
        let count = 0;

        for (let i = 0; i < livro.length; i++) {
            count++;
            tempRow.push(<div className="coluna" key={i}><Livro mine={false} info={livro[i]} text={'começar a ler'} /></div>);

            if (count === 3 || i === livro.length - 1) {
                count = 0;
                elementos.push(<span className="linha" key={i}>{tempRow}</span>);
                tempRow = [];
            }
        }

        return elementos;
    };


    return (
        <div className='perfilpagep'>

            <section className='boxNameUser'>
                <img id='fotoPerfilUser' src={Perfil} style={Perfil !== '' ? { backgroundColor: 'transparent', backgroundImage: 'none' } : null} />
                <div id='medalhasBox'>
                    <div id='nomeUser'>
                        <p>{`@${name}`}</p>
                    </div>

                    <span><img id='medalha' src={medalha} />{seguidoresS}</span>

                    <span className='seguir' onClick={()=>{seguir()}}>{seguindo? 'SEGUINDO' : "SEGUIR"}</span>

                </div>
            </section>

            <section className='boxGenero'>
                <span className='boxtitleGender'>
                    <p id='titleGen'>Gêneros favoritos</p>
                </span>
                <div className='favGen'>
                    <span>
                        <div className='boxGen'>{mostraGender(0)}</div>
                        <div className='boxGen'>{mostraGender(1)}</div>
                    </span>
                    <span>
                        <div className='boxGen'>{mostraGender(2)}</div>
                        <div className='boxGen'>{mostraGender(3)}</div>
                        <div className='boxGen'>{mostraGender(4)}</div>
                    </span>
                    <span>
                        <div className='boxGen'>{mostraGender(5)}</div>
                        <div className='boxGen'>{mostraGender(6)}</div>
                    </span>
                </div>
            </section>

            <section className='boxMeulivroUser'>
                <span className='boxTitleUser'>
                    <span>
                        <p id='titleLivro'>Livros</p>
                    </span>
                </span>
                <div className='livrosUser'>

                    {renderizarItens()}

                </div>
            </section>

            <FloatBt />
        </div>
    );
}