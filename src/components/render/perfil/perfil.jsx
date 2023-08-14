import React, { useState, useEffect } from 'react';
import './perfil.css';
import perfil from '../../../imgs/perfilLight.png';
import edit from '../../../imgs/editar-texto.png';

import { Link } from 'react-router-dom';

//? componente que comporta o perfil

function Perfil(props) {
  const [name, setName] = useState('');
  const [Perfil, setPerfil] = useState('')



  //TODO responsavel por controlar as informações mostradas na tela de acordo com o carregamento da page sem ficar recarregando infinitamente
  useEffect(() => {
    if (props.user) {
      setName(props.user.nome);
      setPerfil("http://localhost/imagens/"+props.user.fotoPerfil);
    } else {
      setName('...');
      setName(perfil);
    }
  }, [props.user]);

  return (
    <div className='perfilpagep'>
      <section className='boxName'>
        <p id='titlePerfil'>Perfil</p>
        <img id='fotoPerfil' src={Perfil} alt='Foto de Perfil' />
        <span>
          <div id='nome'>
            <p>{name}</p>
          </div>
          <Link to='/Perfil/Edit'>
            <img className='edit' src={edit} alt='Editar' />
          </Link>
        </span>
      </section>

        <section className='boxGenero'>
            <span>
                <p id='titleGen'>Gêneros favoritos</p>
                <img className='edit' src={edit} alt="" />
            </span>
            <span>
                <div className='boxGen'><p>Ação</p></div>
                <div className='boxGen'><p>Romance</p></div>
            </span><br />
            <span>
                <div className='boxGen'><p>Comunismo</p></div>
                <div className='boxGen'><p>Fisioterapia</p></div>
                <div className='boxGen'><p>Fantasia</p></div>
            </span><br />
            <span>
                <div className='boxGen'><p>Literatura</p></div>
                <div className='boxGen'><p>Resenha</p></div>
            </span>
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

    </div>
  );
}

export default Perfil;