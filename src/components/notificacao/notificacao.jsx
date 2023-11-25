import React, { useEffect, useState } from "react";
import './notificacao.css';
import noti from "../../imgs/notofica.png";
import Card from "./card/card.jsx";

import api from "../../backend/controler/api_notificacao.js";
import ver from "../../backend/controler/api_visuNotifica.js";

export default function Notificações() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [notificar, setNotficar] = useState({});
    const [New, setNew] = useState(false);


    useEffect(() => {
        Busca();
        const intervalId = setInterval(() => {
            Busca();
        }, 30000);
        return () => clearInterval(intervalId); 
    }, []);


    const handleBackgroundClick = (event) => {
        // Verifica se o clique ocorreu no elemento com a classe "fundo-notifica"
        if (event.target.classList.contains("fundo-notifica")) {
            setIsWindowOpen(false);
        }
    };

    const gera_notificacao = () => {
        const list = [];

        if (!notificar || typeof notificar !== 'object') {

            return list;
        }

        const tiposNotificacoes = ['seguidores', 'curtidas-livro', 'curtidas-coment', 'curtidas-publi', 'curtidas-Pcoment', 'livros-coment', 'coment-coment', 'publi', 'favoritos'];

        tiposNotificacoes.forEach((tipo) => {
            if (notificar[tipo] && Array.isArray(notificar[tipo])) {
                notificar[tipo].forEach((info, i) => {
                    let a = <Card key={`${tipo}_${i}`} tipo={tipo} info={info} />;
                    list.push(a);
                });
            }
        });

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
            const hasNotifications = resposta.informacoes && typeof resposta.informacoes === 'object' &&
                (Object.values(resposta.informacoes).some(notifArray => notifArray && notifArray.length > 0));
            setNew(hasNotifications);
            console.log('hum')
        }
    }

    const visualizar = async () => {
        const resposta = await ver.enviar();
        if (resposta.ok) {
            setNew(false);
            Busca();
        }
    }

    return (
        <>
            <div className="content-notifica" onClick={() => { setIsWindowOpen(true); }}>
                <img src={noti} />
                {New ? <div className="not-cot"></div> : null}
            </div>

            {isWindowOpen && (
                <div className="fundo-notifica" onClick={(e) => { handleBackgroundClick(e); visualizar(); }}>
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
