import React from "react";
import './pagina.css';

import { useEffect, useState } from "react";
import api from '../../../backend/controler/api_InfosLivro';
import apiC from '../../../backend/controler/api_contentCap';

import Aba from '../abaSeleCap/abaSeleCap';

export default function Ler(props) {
    const [info, setInfo] = useState('');
    const [Sinopse, setSinopse] = useState('');
    const [titleCap, setTitleCap] = useState(null);
    const [Cap, setCap] = useState(0);

    const [content, setContent] = useState('');


    const [selecionado, setSelecionado] = useState(0);

    const Busca = async () => {
        const respostaBook = await api.enviar(props.idLivro);
        if (respostaBook.ok === true) {
            setInfo(respostaBook.infos);

            if (respostaBook.infos && respostaBook.infos.sinopse) {
                setSinopse(respostaBook.infos.sinopse);
            }

            if (respostaBook.infos && respostaBook.infos.texto) {
                if (respostaBook.infos.texto != null) {
                    let titulo = JSON.parse(respostaBook.infos.texto);
                    setTitleCap(titulo);
                }


                const cont = Object.keys(JSON.parse(respostaBook.infos.texto));
                let contador = 0;
                for (let chaves of cont) {
                    contador++;
                }
                setCap(contador);
            }
        }
    };


    const conteudo = async () => {
        const response = await apiC.enviar(info.user_id, selecionado, info.id, info.nome);
        if (response.ok === true) {
            setContent(response.conteudo);

        } else {
            setContent('');
        }
    };

    useEffect(() => {
        Busca();
    }, [props.idLivro]);

    useEffect(() => {
        if (info.user_id && selecionado && info.id && info.nome) {
            conteudo();
        }
    }, [titleCap, selecionado]);

    useEffect(() => {
        if (info.tema) {
            props.setCor1(info.tema);
        } else {
            props.setCor1('#0A6E7D')
        }
        if (info.tema2) {
            props.setCor2(info.tema2);
        } else {
            props.setCor2('#0A6E7D')
        }
    }, [info.tema, info.tema2]);

    useEffect(()=>{
        if(info.nome){
            props.setTituloL(info.nome);
        }
    },[info.nome])


    return (
        <>
            <Aba Cap={Cap} titleCap={titleCap} selecionado={selecionado} setSelecionado={setSelecionado} cor={info.tema2} />
            <div className="paginaLer">
                <span className="tituloLer">{selecionado == 0 ? 'Sinopse' : titleCap[selecionado]}</span>

                <div className="contentPagina" dangerouslySetInnerHTML={{ __html: selecionado == 0 ? Sinopse : content }}>
                </div>
            </div>
        </>
    );
}