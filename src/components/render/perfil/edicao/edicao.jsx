import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import './edicao.css';

import api from '../../../../backend/controler/api_edição';

export default function Edit(props) {
    const [imagePreview, setImagePreview] = useState(null);
    const [userName, setUserName] = useState('');
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
        if (resposta.ok == true) {
            navigate('/Perfil');
        } else {
            setRespost(resposta.msg);
        }
    };
    return (
        <div className='edicao'>
            <div className='boxEdita'>
                <span id='fechaEdita' onClick={props.fecharEdicao}><img src="" /></span>
                <form onSubmit={alterar}>
                    <div id='fileBox'>
                        <label htmlFor="editFile">
                            <div className="custom-input">
                                {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '200px', height: '200px', borderRadius: '100%' }} />}
                            </div>
                        </label>
                    </div>
                    <input type="file" id="editFile" name="editFile" onChange={handleImageChange} />
                    <input type="text" onChange={handleImageChange} />
                    <p>{respost}</p>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
