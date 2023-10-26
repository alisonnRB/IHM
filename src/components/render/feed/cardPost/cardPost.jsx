import React from 'react';
import './cardPost.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const id = localStorage.getItem('id');

  const [texto, setTexto] = useState('');
  const [link, setLink] = useState('');
  const [enquete, setEnquete] = useState('');
  const [autor, setAutor] = useState('');

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

  const gera_enquete = () => {
    const list = [];
    let en = JSON.parse(enquete.quest);

    for (let i = 0; i < Object.keys(en).length; i++) {
      if (en[i] && en[i] != undefined) {
        let a = <span>{en[i]}</span>

        list.push(a);
      }

    }

    return list;
  }

  return (
    <div className='cardPost'>
      <span className='infosPost'>

        <span className='publiUser'>
          <img src={"http://192.168.255.56/imagens/" + autor.fotoPerfil} />
          <Link to={id != autor.id ? `/Busca/user?id=${encodeURIComponent(JSON.stringify(autor.id))}` : '/perfil'}><p>{`@${autor.nome}`}</p></Link>
        </span>

        {link && link != undefined ? <Link to={`/Ler/?id=${encodeURIComponent(JSON.stringify(link.id))}`}>
          <div className='imgLinkBox'>

            <img src={"http://192.168.255.56/livros/" + link.user_id + '/' + link.nome + '_' + link.id + '/' + link.imagem} className='imgLink' />

          </div>
        </Link> : null}


        <div className='textContent'>
          <div>
            {texto != '' ? texto : '...'}
          </div>
          {enquete && enquete != undefined ? <div className='enquetePubli'>
            <span>{enquete.titulo}</span>
            <div>
              {gera_enquete()}
            </div>
          </div> : null}
        </div>

      </span>
      <span className='curtiComent'>
        <img src="" />
        <img src="" />
      </span>
    </div>
  );
}
