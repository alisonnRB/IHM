import React from "react";
import './cardIMG.css';
import { useState, useEffect } from "react";



export default function CardIMG(props) {
    const [imagePreview, setImagePreview] = useState('');
    const [file, setFile] = useState(null);


    useEffect(() => {
        if (file != null) {
            props.setImagem(file);
        }
    }, [file])

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
        <>
            <div id='fileCard'>
                <label htmlFor={`editFile${props.chave}`} className='labelCard'>
                    <div className="customCard" style={imagePreview ? { backgroundImage: 'none' } : null}>
                        {imagePreview && <img src={imagePreview} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />}
                    </div>
                </label>
            </div>
            <input type='file' id={`editFile${props.chave}`} className="editFile" onChange={handleImageChange} />
        </>
    );
}