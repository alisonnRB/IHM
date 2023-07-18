import React from 'react';
import './perfil.css';
import perfil from '../../../imgs/perfilLight.png';
import edit from '../../../imgs/editar-texto.png';


function Perfil() {
  return (
    <div>
        <section className='boxName'>
        <p id='titlePerfil'>Perfil</p>
        <img id='fotoPerfil' src={perfil}></img>
            <span>
                <div id='nome'><p>alison</p></div>
                <img className='edit' src={edit} alt="" />
            </span>
        </section>

        <section className='boxGenero'>
            <span>
                <p id='titleGen'>Gêneros favoritos</p>
                <img className='edit' src={edit} alt="" />
            </span><br />
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