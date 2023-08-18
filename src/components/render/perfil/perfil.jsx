import React, { useState, useEffect } from 'react';
import './perfil.css';
import edit from '../../../imgs/lapis.png';
import Edicao from './edicao/edicao';


//? componente que comporta o perfil

function Perfil(props) {
  const [name, setName] = useState('');
<<<<<<< HEAD
  const [Perfil, setPerfil] = useState(perfil);
=======
  const [Perfil, setPerfil] = useState('');
  const [edita, setEdita] = useState(false);
>>>>>>> develop

  
  //TODO responsavel por controlar as informações mostradas na tela de acordo com o carregamento da page sem ficar recarregando infinitamente
  useEffect(() => {
    if (props.user) {
      setName(props.user.nome);
      setPerfil("http://192.168.255.56/imagens/" + props.user.fotoPerfil);
    }
  }, [props.user]);

  const fecharEdicao = (e) => {
    setEdita(false);
    if(e == true){
      window.location.reload();
    }
    
  };

  return (
    <div className='perfilpagep'>
      <section className='boxName'>
        <p id='titlePerfil'>Perfil</p>
        <img id='fotoPerfil' src={Perfil} onClick={()=>setEdita(true)}/>
        <span>
          <div id='nome' >
            <p>{name}</p>
          </div>
            <img className='edit' src={edit} alt='Editar' onClick={()=>setEdita(true)}/>
        </span>
      </section>

      {edita && <Edicao fecharEdicao={fecharEdicao} user={props.user.nome} ft={Perfil}/>}
      
      <section className='boxGenero'>
        <span>
          <p id='titleGen'>Gêneros favoritos</p>
          <img className='edit' src={edit} alt="" />
        </span>
        <div className='favGen'>
          <span>
            <div className='boxGen'><p>Ação</p></div>
            <div className='boxGen'><p>Romance</p></div>
          </span>
          <span>
            <div className='boxGen'><p>Comunismo</p></div>
            <div className='boxGen'><p>Fisioterapia</p></div>
          </span>
          <span>
            <div className='boxGen'><p>Literatura</p></div>
            <div className='boxGen'><p>Resenha</p></div>
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

    </div>
  );
}

export default Perfil;