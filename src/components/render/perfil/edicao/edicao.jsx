import { useState } from 'react';
import React from "react";
import './edicao.css';

import envio from "../../../../imgs/bandeira.png";
import api from '../../../../backend/controler/api_edição';
import sair from '../../../../imgs/sair.png';

export default function Edit(props) {
    const [imagePreview, setImagePreview] = useState(props.ft.Perfil);
    const [file, setFile] = useState(null);
    const [respost, setRespost] = useState('');



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
        

        const resposta = await api.enviar(idUsuario, formData, userName);
        console.log(resposta);

        setFile(null);
        setImagePreview(null);

        //? volta para o perfil
        if (resposta.ok == true) {
            props.fecharEdicao();
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
                                {imagePreview && <img src={imagePreview}  style={{ width: '100%', height: '100%', borderRadius: '100%' }} />}
                            </div>
                        </label>
                    </div>
                    <input type="file" id="editFile" name="editFile" onChange={handleImageChange} />

                    <input type="text" id="editNome" name="newName" placeholder={props.user}/>

                    <p className='msgEdicao'>{respost}</p>

                    <div className='enviaBox'>

                        <input type="submit" className="btOculto" value="enviar"/>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
