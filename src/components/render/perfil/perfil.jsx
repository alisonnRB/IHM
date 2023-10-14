import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './perfil.css';
import edit from '../../../imgs/lapis.png';
import Edicao from './edicao/edicao';
import apiGender from '../../../backend/controler/api_gender';
import FloatBt from '../../BtFloat/btFloat';

import apiCapa from "../../../backend/controler/api_meusLivros";

import MeusLivros from './slideLivro/slideLivro';
import MeusFav from '../../../backend/controler/api_meusFavoritos';

import comum from '../../../imgs/comum.png';
import bronze from '../../../imgs/bronze.png';
import prata from '../../../imgs/prata.png';
import ouro from '../../../imgs/ouro.png';
import diamante from '../../../imgs/diamante.png';


//? componente que comporta o perfil

function Perfil(props) {

  const [name, setName] = useState('');
  const [seguidores, setSeguidores] = useState(0);
  const [seguidoresS, setSeguidoresS] = useState('');
  const [medalha, setMedalha] = useState(comum);
  const [Perfil, setPerfil] = useState('');
  const [edita, setEdita] = useState(false);
  const [generos, setGeneros] = useState([]);
  const [listF, setListF] = useState([]);

  const [livro, setLivro] = useState([]);
  const [livroF, setLivroF] = useState([]);

  const Busca = async () => {
    const id = localStorage.getItem('id');

    const resposta = await apiGender.enviar();
    if (resposta.ok == true) {
      setGeneros(resposta.gender);
    }

    const respostaIMG = await apiCapa.enviar(id);
    if (respostaIMG.ok == true) {
      setLivro(respostaIMG.livros);
    }

    const respontaFav = await MeusFav.enviar(id);
    if (respontaFav.ok == true) {
      setLivroF(respontaFav.livros);
    }

  };

  //TODO responsavel por controlar as informações mostradas na tela de acordo com o carregamento da page sem ficar recarregando infinitamente
  useEffect(() => {
    if (props.user) {
      if (props.user.genero) {
        const genero = JSON.parse(props.user.genero);
        setaFavoritos(genero);
      }
      setName(props.user.nome);
      if (props.user.fotoPerfil) {
        setPerfil("http://192.168.255.56/imagens/" + props.user.fotoPerfil);
      }
      if (props.user.seguidores) {
        const seguidores = JSON.parse(props.user.seguidores);
        setSeguidores(seguidores);
      }

    }
  }, [props.user]);

  useEffect(() => {
    Busca();
  }, []);

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

  const setaFavoritos = (genero) => {
    const listT = []
    for (let i = 0; i < genero.length; i++) {
      listT.push(genero[i]);
    }
    setListF(listT);
  }

  const fecharEdicao = (e) => {
    setEdita(false);
    if (e == true) {
      window.location.reload();
    }

  };

  const mostraGender = (index) => {
    return generos[parseInt(listF[index]) + 1] ? generos[parseInt(listF[index]) + 1] : '...';
  }


  return (

    <div className='perfilpagep'>
      <section className='boxName'>
        <span id='titlePerfil'>PERFIL</span>
        <img id='fotoPerfil' src={Perfil} style={Perfil !== '' ? { backgroundColor: 'transparent', backgroundImage: 'none' } : null} onClick={() => setEdita(true)} />
        <span>
          <div id='nome' >
            <p>{name}</p>
          </div>
          <img className='edit' src={edit} alt='Editar' onClick={() => setEdita(true)} />
        </span>
        <span><img id='medalha' src={medalha} />{seguidoresS}</span>
      </section>

      {edita && <Edicao fecharEdicao={fecharEdicao} user={props.user.nome} ft={Perfil} />}

      <section className='boxGenero'>
        <span className='boxtitleGender'>
          <p id='titleGen'>Gêneros favoritos</p>
          <Link to='/perfil/gender'><img className='edit' src={edit} /></Link>
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

      <section className='boxMeulivro'>
        <span className='boxTitle'>
          <span>
            <p id='titleLivro'>Meus Livros</p>
            <Link to='/perfil/MeusLivros'><img className='edit' src={edit} /></Link>
          </span>
        </span>

        <Link to='/perfil/MeusLivros' id='link'><MeusLivros meusOrFav={'meus'} livro={livro} comp={'1'} /></Link>

      </section>

      <section className='boxMeulivro'>
        <span className='boxTitle'>
          <span>
            <p id='titleLivro'>Meus Favoritos</p>
            <Link to='/perfil/MeusFavoritos'><img className='edit' src={edit} /></Link>
          </span>
        </span>

        <Link to='/perfil/MeusFavoritos' id='link'><MeusLivros meusOrFav={'fav'} livro={livroF} comp={'2'} /></Link>

      </section>

      <FloatBt />
    </div>
  );
}

export default Perfil;