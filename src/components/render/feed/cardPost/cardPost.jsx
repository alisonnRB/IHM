import React from 'react';
import './cardPost.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import curti from '../../../../imgs/core-like.png';
import curtiT from '../../../../imgs/curtiT.png';
import coment from '../../../../imgs/bal-coment.png';

import curtida from '../../../../backend/controler/api_curtir';
import curtiram from '../../../../backend/controler/api_buscaCurtidas';

import vote from '../../../../backend/controler/api_votar';
import SearchVote from '../../../../backend/controler/api_BuscaVotos';

import Comentarios from '../../../../paginas/ler/comentarios/comentarios';

export default function Card(props) {
  const id = localStorage.getItem('id');

  //TODo coment function 
  const [openRes, setOpenRes] = useState('');
  const [curtidas, setCurtidas] = useState('');
  const [curtido, setCurtido] = useState(false);
  const [curtindo, setCurtindo] = useState(false);

  const [abreComent, setAbreComent] = useState(false);
  const [votado, setVotado] = useState(false);

 

  const [texto, setTexto] = useState('');
  const [link, setLink] = useState('');
  const [enquete, setEnquete] = useState('');
  const [autor, setAutor] = useState('');

  
  useEffect(() => {
    Busca();
  }, [props])

  useEffect(() => {
    if (props.publi) {
      if (props.publi.texto) {
        setTexto(props.publi.texto);
      }
      if (props.publi.infos_link) {
        setLink(props.publi.infos_link[0]);
      }
      if (props.publi.infos_user) {
        setAutor(props.publi.infos_user[0]);
      }
      if (props.publi.enquete) {
        setEnquete(props.publi.enquete[0]);
      }
    }
  }, [props.publi])

  useEffect(() => {
    if (curtindo) {
      Busca();
      setCurtindo(false);
    }
  }, [curtindo])

  useEffect(() => {
    Busca();
  }, [abreComent])

  useEffect(() => {
    if (curtidas != undefined) {
      let keys = Object.keys(curtidas).length;
      for (let i = 0; i < keys; i++) {
        if (curtidas[i].coment == 0 && curtidas[i].id_user == id) {
          setCurtido(true);
          return;
        }
      }
    }
    setCurtido(false);
  }, [curtidas]);

  const gera_enquete = () => {
    const list = [];
    let en = JSON.parse(enquete.quest);

    for (let i = 0; i < Object.keys(en).length; i++) {
      if (votado) {
        if (enquete.votos && enquete.votos[0]) {
          var votados = JSON.parse(enquete.votos);
          var total = votados[0] + votados[1] + votados[2] + votados[3];

        } else {
          Busca();

          return () => { gera_enquete() };
        }

        if (en[i] && en[i] != undefined) {
          let a = <span key={i} className='selectBox vote'><div className='vote' style={{ width: `${votados[i] / total * 100}%` }}><span className='votes'><p>{en[i]}</p><p>{`${Math.round(votados[i] / total * 100)}%`}</p></span></div></span>

          list.push(a);
        }

      } else {

        if (en[i] && en[i] != undefined) {
          let a = <span key={i} className='selectBox' onClick={() => { votar(i); }}>{en[i]}</span>

          list.push(a);
        }
      }


    }

    return list;
  }




  const Busca = async () => {
    if (enquete && enquete != undefined) {
      const respost = await SearchVote.enviar(enquete.id);
      if (respost.informacoes) {
        setVotado(true);
      }
    }

    const resposta = await curtiram.enviar(id, props.publi.id, 'coment');
    if (resposta.ok && resposta.informacoes.length != 0) {
      setCurtido(true);
    }
  }

  const curtir = async () => {
    const resposta = await curtida.enviar(props.publi.id, 'coment', 0);
    if (resposta.ok) {
      Busca();
    }
  }

  const votar = async (key) => {
    const resposta = await vote.enviar(enquete.id, key);
    if (resposta.ok) {
      Busca();
    }
  }



  return (
    <>
      <div className='cardPost'>
        <span className='infosPost'>

          <span className='publiUser'>
            <img className='perfilPubli' src={"http://192.168.255.56/imagens/" + autor.fotoPerfil} />
            <Link to={id != autor.id ? `/Busca/user?id=${encodeURIComponent(JSON.stringify(autor.id))}` : '/perfil'}><p>{`@${autor.nome}`}</p></Link>
          </span>

          {link && link != undefined ? <Link to={`/Ler/?id=${encodeURIComponent(JSON.stringify(link.id))}`}>
            <div className='imgLinkBox'>

              <img src={"http://192.168.255.56/livros/" + link.user_id + '/' + link.nome + '_' + link.id + '/' + link.imagem} className='imgLink' />

            </div>
          </Link> : null}


          <div className='textContent'>
            <div className='publiText' style={!link || link == undefined && !enquete || enquete == undefined ? { fontSize: '2.3em' } : null}>
              {texto != '' ? texto : '...'}
            </div>
            {enquete && enquete != undefined ?
              <div className='enquetePubli'>
                <span className='enqueteTitle'>{enquete.titulo}</span>
                <div className='enquet'>
                  <div className='renderEnquete'>
                    {gera_enquete()}
                  </div>
                </div>
              </div> : null}
          </div>

        </span>
        <span className='curtiComent'>
          <img src={coment} onClick={() => { setAbreComent(!abreComent) }} />
          <img src={curtido ? curtiT : curti} onClick={() => { curtir() }} />
        </span>
      </div>

      {abreComent ? <Comentarios setCurtindo={setCurtindo} curtidas={curtidas} idLivro={props.publi.id} tipo={'coment'} cor={'#087F97'} setOpenRes={setOpenRes} openRes={openRes} /> : null}
    </>
  );
}
