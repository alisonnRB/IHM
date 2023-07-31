import { useState } from 'react';
import React from "react";
import './edit.css';

export default function Edit() {
    const [imagePreview, setImagePreview] = useState(null);
    const [userName, setUserName] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
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

    return (
        <div className="box_editP">
            <span className="edit_form">
                <form className="form_op">
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
