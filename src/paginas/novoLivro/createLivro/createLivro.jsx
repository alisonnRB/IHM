import React from "react";
import './createLivro.css';
import { useState } from "react";

import x from '../../../imgs/sair.png';


export default function NovoLivro() {
    const [imagePreview, setImagePreview] = useState('');
    const [file, setFile] = useState(null);

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

    return (
        <div className="boxNewBookC">
            <span>
                <p>LIVRO NOVO</p>
                <img src={x} id="xSair" />
            </span>
            <form className="formCreateBook">

                <div className="nomeDoLivro">
                    <label htmlFor="livroNome">nome:</label>
                    <input type="text" name="livroNome" />
                </div>

                <div className="capaDoLivro">
                    <div id='fileBox'>
                        <label htmlFor="editFile" className='labelBt'>
                            <div className="custom-input">
                                {imagePreview && <img src={imagePreview} style={{ width: '100%', height: '100%', borderRadius: '100%' }} />}
                            </div>
                        </label>
                    </div>
                    <input type="file" id="editFile" name="editFile" onChange={handleImageChange} />
                </div>

            

                <div className="salvaLivro">
                    <button>a</button>
                </div>
            </form>
        </div>
    );

}