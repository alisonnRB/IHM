
import React from 'react';
import './gender.css';

import volta from '../../../imgs/voltar.jpeg';
import api from '../../../backend/controler/api_gender';
import apiEdit from '../../../backend/controler/api_GenderEdit'
import { useEffect, useState } from 'react';


export default function Gender(props) {
    const [genero, setgenero] = useState('...');
    const [selecionados, setSelecionado] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,

    });
    const [limit, setLimit] = useState(0);

    const Busca = async () => {
        const resposta = await api.enviar();
        if (resposta.ok == true) {
            setgenero(resposta.gender);
        }

    };


    useEffect(() => {
        if (props.user) {
            const generos = JSON.parse(props.user.genero)
            console.log(generos);
            for(let i = 0; i<generos.length; i++){
                selecao(generos[i]);
            }
            setLimit(generos.length);
            
        }
      }, [props.user]);


    useEffect(() => {
        Busca();
    }, []);

    function selecao(index) {
        if (limit < 7) {
            marcador(index, true);
        } else {
            marcador(index, false);
        }
    }
    function marcador(index, livre) {
        if (livre == true) {
            if (selecionados[index] == false) {
                setLimit(limit + 1);
                setSelecionado((prevState) => ({
                    ...prevState,
                    [index]: true
                }));
            }
        }
        if (selecionados[index] == true) {
            setLimit(limit - 1);
            setSelecionado((prevState) => ({
                ...prevState,
                [index]: false
            }));
        }
    }
    const alterar = async (event) => {
        const id = localStorage.getItem('id');

        await apiEdit.enviar(id, selecionados);
    }

    const gen = document.getElementsByClassName('gender');
    for (let i = 0; i < gen.length; i++) {
        gen[i].style.backgroundColor = selecionados[i] ? '#3392a6' : '';
        gen[i].style.color = selecionados[i] ? 'white' : '';
    }

    return (
        <div className='boxGender'>
            <span id='boxTittleGender'>
                <img src={volta} id='imgVoltaG' />
                <p>GÊNEROS FAVORITOS</p>
                <p>{limit + '/7'}</p>
            </span>
            <form className='genderTable' onSubmit={alterar}>
                <span>
                    <div className='gender' onClick={() => selecao(0)} >{genero[1]}</div>
                    <div className='gender' onClick={() => selecao(1)}>{genero[2]}</div>
                </span>
                <span>
                    <div className='gender' onClick={() => selecao(2)}>{genero[3]}</div>
                    <div className='gender' onClick={() => selecao(3)}>{genero[4]}</div>
                    <div className='gender' onClick={() => selecao(4)}>{genero[5]}</div>
                </span>
                <span>
                    <div className='gender' onClick={() => selecao(5)}>{genero[6]}</div>
                    <div className='gender' onClick={() => selecao(6)}>{genero[7]}</div>
                </span>
                <span>
                    <div className='gender' onClick={() => selecao(7)}>{genero[8]}</div>
                    <div className='gender' onClick={() => selecao(8)}>{genero[9]}</div>
                    <div className='gender' onClick={() => selecao(9)}>{genero[10]}</div>
                </span>
                <span>
                    <div className='gender' onClick={() => selecao(10)}>{genero[11]}</div>
                    <div className='gender' onClick={() => selecao(11)}>{genero[12]}</div>
                </span>
                <span>
                    <div className='gender' onClick={() => selecao(12)}>{genero[13]}</div>
                    <div className='gender' onClick={() => selecao(13)}>{genero[14]}</div>
                    <div className='gender' onClick={() => selecao(14)}>{genero[15]}</div>
                </span>
                <span>
                    <div className='gender' onClick={() => selecao(15)}>{genero[16]}</div>
                    <div className='gender' onClick={() => selecao(16)}>{genero[17]}</div>
                </span>

                <div className='submitGenderF'>
                    <button type='submit'>SALVAR</button>
                </div>
            </form>
        </div>
    );
}