import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import './edicao.css';

import envio from "../../../../imgs/bandeira.png";
import api from '../../../../backend/controler/api_edição';
import sair from '../../../../imgs/sair.png';

export default function Edit(props) {
    const [imagePreview, setImagePreview] = useState(props.ft.Perfil);
    const [file, setFile] = useState(null);
    const [respost, setRespost] = useState(null);


    const navigate = useNavigate();

    //TODO função que atualiza dos estados da imagem e nome em tempo real para ter uma preview
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    //TODO manda para a api para que seja feito o update no banco de dados
    const alterar = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        const userName = event.target.newName.value;

        const idUsuario = localStorage.getItem('id');
        console.log(idUsuario);

        const resposta = await api.enviar(idUsuario, formData, userName);

        setFile(null);
        setImagePreview(null);

        //? volta para o perfil
        if (resposta.ok == true) {
            navigate('/Perfil');
        } else {
            setRespost(resposta.msg);
        }
    };
    return (
        <div className='edicao'>
            <div className='boxEdita'>
                <span id='fechaEdita' onClick={props.fecharEdicao}><img src={sair} id='sairEdita' /></span>
                <form onSubmit={alterar}>

                    <div id='fileBox'>
                        <label htmlFor="editFile" className='labelBt'>
                            <div className="custom-input">
                                {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '100%' }} />}
                            </div>
                        </label>
                    </div>
                    <input type="file" id="editFile" name="editFile" onChange={handleImageChange} />

                    <input type="text" id="editNome" name="newName" placeholder={props.user}/>

                    <div className='enviaBox'>
                        <input type='image' className='enviarEdit' src={envio} />
                        <p className='textEnviaBox'>Enviar</p>
                    </div>
                    <p>{respost}</p>

                </form>
            </div>
        </div>
    );
}
