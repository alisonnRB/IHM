//! PRECISA CONSTRUIR UM ESTILO PARA A PAGE


import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import './edit.css';

import api from '../../../../backend/controler/api_edição';

//? renderiza a pageina de edição do perfil

export default function Edit() {
    const [imagePreview, setImagePreview] = useState(null);
    const [userName, setUserName] = useState('');
    const [file, setFile] = useState(null);
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

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    //TODO manda para a api para que seja feito o update no banco de dados
    const alterar = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        const idUsuario = localStorage.getItem('id');

        const resposta = await api.enviar(idUsuario, formData, userName);

        setFile(null);
        setImagePreview(null);
        setUserName('');

        //? volta para o perfil
        if(resposta.ok == true){
            navigate('/Perfil');
        }
    };
        

    return (
        <div className="box_editP">
            <span className="edit_form">
                <form className="form_op" onSubmit={alterar}>
                    <label>Escolha uma foto<input type="file" name="file" onChange={handleImageChange} /></label>
                    <label>Quer alterar seu nome<input type="text" onChange={handleNameChange} /></label>

                    <input type="submit" id='sub' value='confirmar'/>
                </form>
                <div className="view_P">
                    <p>Preview</p>
                    <div className='ft_P'>
                        {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '200px', height: '200px'}} />}
                    </div>
                    <div className="nome_P"><p>{userName}</p></div>
                </div>
            </span>
        </div>
    );
}
