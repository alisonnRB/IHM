import React, { useEffect, useState } from "react";
import './notificacao.css';
import noti from "../../imgs/notofica.png";
import Card from "./card/card.jsx";

import api from "../../backend/controler/api_notificacao.js";

export default function Notificações() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [notificar, setNotficar] = useState({});
    const [New, setNew] = useState(false);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            Busca();
        }, 30000);
        return () => clearTimeout(timeoutId); // Limpeza do setTimeout
    }, []);

    const handleBackgroundClick = (event) => {
        // Verifica se o clique ocorreu no elemento com a classe "fundo-notifica"
        if (event.target.classList.contains("fundo-notifica")) {
            setIsWindowOpen(false);
        }
    };

    const gera_notificacao = () => {
        const list = [];

        for (let i = 0; i < Object.keys(notificar['seguidores']).length; i++) {
            let a = <Card key={i} tipo={'seguidores'} info={notificar['seguidores'][i]} />
            list.push(a);
        }

        for (let i = 0; i < Object.keys(notificar['curtidas']).length; i++) {
            let a = <Card key={i} tipo={'curtidas'} info={notificar['curtidas'][i]} />
            list.push(a);
        }

        for (let i = 0; i < Object.keys(notificar['livros-coment']).length; i++) {
            let a = <Card key={i} tipo={'livros-coment'} info={notificar['livros-coment'][i]} />
            list.push(a);
        }

        for (let i = 0; i < Object.keys(notificar['coment-coment']).length; i++) {
            let a = <Card key={i} tipo={'coment-coment'} info={notificar['coment-coment'][i]} />
            list.push(a);
        }


        for (let i = 0; i < Object.keys(notificar['publi']).length; i++) {
            let a = <Card key={i} tipo={'publi'} info={notificar['publi'][i]} />
            list.push(a);
        }

        for (let i = 0; i < Object.keys(notificar['favoritos']).length; i++) {
            let a = <Card key={i} tipo={'favoritos'} info={notificar['favoritos'][i]} />
            list.push(a);
        }

        function comparacaoAleatoria() {
            return Math.random() - 0.5;
        }

        list.sort(comparacaoAleatoria);

        return list;
    }

    const Busca = async () => {
        const resposta = await api.enviar();
        if (resposta.ok) {
            setNotficar(resposta.informacoes);
        }
    }

    return (
        <>
            <div className="content-notifica" onClick={() => { setIsWindowOpen(true) }}>
                <img src={noti} />
                {New ? <div className="not-cot"></div> : null}
            </div>

            {isWindowOpen && (
                <div className="fundo-notifica" onClick={handleBackgroundClick}>
                    <div className="box-notifica">
                        <span className="title-notifica">Notificações</span>
                        <div className="cards-notifica">
                            {gera_notificacao()}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
