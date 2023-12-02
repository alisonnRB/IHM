import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from 'react-intersection-observer';
import './busca.css';

import api from '../../../backend/controler/api_Usuarios';

import CardPessoa from "./cardPessoa/cardPessoa.jsx";
import Load from "../../loading/loading.jsx";

import words from './busca.json';

export default function Busca() {
    const num = useRef(0);
    const [ref, inView] = useInView();
    const [Loadi, setLoad] = useState(false);
    const [usersList, setUsersList] = useState([]);
    let init = false;
    const [control, setControl] = useState(false);


    const [theme, setTheme] = useState('light');
    const [pesquisa, setPesquisa] = useState('');

    const [users, setUsers] = useState('');

    const [Uword, setUword] = useState('EN');

    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
            idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
    }

    const Busca = async () => {
        if (Loadi || users == 'nao' || (users == 'naoM' && num.current != 0)) {
            return;
        }

        setLoad(true);

        const resposta = await api.enviar(pesquisa, num.current);
        if (resposta.ok) {
            setUsers(resposta.informacoes);
            if (resposta.informacoes == 'naoM') {
                setLoad(false);
                return;
            }

            setUsersList((prevPublicacoes) => [
                ...prevPublicacoes,
                ...Object.values(resposta.informacoes),
            ]);

            num.current += 20;
        }


        setLoad(false);
    }
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const debouncedSearch = useCallback(
        debounce(() => {
            setUsersList([]);
            setUsers('');
            num.current = 0;
            setControl(true);
        }, 1000),
        []
    );


    useEffect(() => {
        select_idioma();
        let a = localStorage.getItem('tema');
        if (a) {
            setTheme(a);
        }

        if (!init) {
            Busca();

            init = true;
        }
    }, []);


    useEffect(() => {
        setUsersList([]);
        num.current = 0;
        debouncedSearch();
    }, [pesquisa, debouncedSearch]);

    useEffect(() => {
        if (control) {
            setControl(false);
            Busca();
        }
    }, [control]);

    const geraUser = () => {
        return usersList.map((usuario, index) => (
            <CardPessoa key={index} user={usuario} />
        ));
    }

    useEffect(() => {
        if (inView && !Loadi) {
            Busca();
        }
    }, [inView, Loadi]);

    return (
        <div className='TelaBusca'>
            <span id='titlePerfil' className={`${theme == 'light' ? null : 'dark'}`}>{Uword.title}</span>
            <span className='boxLivros'>
                <input type='text' id='searchText' placeholder={Uword.buscar} value={pesquisa} onChange={(e) => { setPesquisa(e.target.value) }} />
                <div id='searchImg' className={`${theme == 'light' ? '' : 'dark'}`}></div>
            </span>
            <div className="pessoasBOX">

                {users == 'nao' ? <p id='notFound'>Não achamu ninguem</p> : geraUser()}

            </div>

            <div className='disparador' ref={ref}>
                {users == 'naoM' ? <p id='notMore'>NÃO HÁ mais Pessoas</p> : null}
                {Loadi ? <Load /> : null}
            </div>
        </div>
    );
}