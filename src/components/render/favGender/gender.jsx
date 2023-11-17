import React from 'react';
import './gender.css';

import volta from '../../../imgs/voltar.jpeg';
import apiEdit from '../../../backend/controler/api_GenderEdit';
import Seleciona from '../../seleçãoGenero/seleciona';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import words from './gender.json';


export default function Gender(props) {
    const Navigate = useNavigate();
    const [selecao, setSelecao] = useState({
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
    const [conta, setConta] = useState(0);
    const [generos, setgeneros] = useState('');

    const [Uword, setUword] = useState('EN');

    useEffect(() => {
        select_idioma();
    }, [])

    const select_idioma = () => {
        let idi = localStorage.getItem('idioma');
        if (!idi || (idi != 'PT' && idi != 'EN' && idi != 'ES')) {
            idi = 'EN';
        }
        let word = words[idi];
        setUword(word);
    }




    useEffect(() => {
        if (props.user && props.user.genero && Object.keys(props.user.genero).length > 0) {
            const genero = JSON.parse(props.user.genero);
            setgeneros(genero);
        }
    }, [props.user]);


    const alterar = async (e) => {
        e.preventDefault();
        const response =  await apiEdit.enviar(selecao);
        if(response.ok){
            Navigate(-1);
        }
    }

    return (
        <div className='boxGender'>
            <span id='boxTittleGender'>
                <Link to='/perfil' id='linkVolta'><img src={volta} id='imgVoltaG' /></Link>
                <p>{Uword.generos}</p>
                <p>{conta + '/7'}</p>
            </span>
            <form className='genderTable' onSubmit={alterar}>

                <Seleciona Limit={7} setConta={setConta} setSelecao={setSelecao} generos={generos} />


                <div className='submitGenderF'>
                    <button type='submit'>{Uword.salvar}</button>
                </div>
            </form>
        </div>
    );
}