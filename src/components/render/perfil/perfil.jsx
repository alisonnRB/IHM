import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './perfil.css';
import edit from '../../../imgs/lapis.png';
import Edicao from './edicao/edicao';
import apiGender from '../../../backend/controler/api_gender';
import FloatBt from '../../BtFloat/btFloat';


//? componente que comporta o perfil

function Perfil(props) {
  const [name, setName] = useState('');
  const [Perfil, setPerfil] = useState('');
  const [edita, setEdita] = useState(false);
  const [generos, setGeneros] = useState([]);
  const [listF, setListF] = useState([]);

  const Busca = async () => {
    const resposta = await apiGender.enviar();
    if (resposta.ok == true) {
      setGeneros(resposta.gender);
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
      if(props.user.fotoPerfil){
        setPerfil("http://192.168.255.56/imagens/" + props.user.fotoPerfil);
      }
      
    }
  }, [props.user]);

  useEffect(() => {
    Busca();
  }, []);

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
        <p id='titlePerfil'>Perfil</p>
        <img id='fotoPerfil' src={Perfil} onClick={() => setEdita(true)} />
        <span>
          <div id='nome' >
            <p>{name}</p>
          </div>
          <img className='edit' src={edit} alt='Editar' onClick={() => setEdita(true)} />
        </span>
      </section>

      {edita && <Edicao fecharEdicao={fecharEdicao} user={props.user.nome} ft={Perfil} />}

      <section className='boxGenero'>
        <span className='boxtitleGender'>
          <p id='titleGen'>Gêneros favoritos</p>
          <Link to='/gender'><img className='edit' src={edit} /></Link>
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
        <span>
          <p id='titleLivro'>Meus Lívros</p>
          <img className='edit' src={edit} alt="" />
        </span>
        <span>
          <div className='livros'></div>
          <div className='livros'></div>
        </span>
        <span>
          <div className='livros'></div>
          <div className='livros'></div>
        </span>
      </section>
      <FloatBt />
    </div>
  );
}

export default Perfil;