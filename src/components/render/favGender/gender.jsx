import React from 'react';
import './gender.css';

import volta from '../../../imgs/voltar.jpeg';
import apiEdit from '../../../backend/controler/api_GenderEdit'
import Seleciona from '../../seleçãoGenero/seleciona';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Gender(props) {
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


    useEffect(() => {
        if(props.user && props.user.genero && Object.keys(props.user.genero).length > 0){
            const generos = JSON.parse(props.user.genero);
            setgeneros(generos);
        }
      }, [props.user]);




    const alterar = async () => {
        const id = localStorage.getItem('id');

        await apiEdit.enviar(id, selecao);
    }

    return (
        <div className='boxGender'>
            <span id='boxTittleGender'>
                <Link to='/perfil' id='linkVolta'><img src={volta} id='imgVoltaG' /></Link>
                <p>GÊNEROS FAVORITOS</p>
                <p>{conta + '/7'}</p>
            </span>
            <form className='genderTable' onSubmit={alterar}>
    
                <Seleciona Limit={7}  setConta={setConta} setSelecao={setSelecao} generos={generos}/>


                <div className='submitGenderF'>
                    <button type='submit'>SALVAR</button>
                </div>
            </form>
        </div>
    );
}