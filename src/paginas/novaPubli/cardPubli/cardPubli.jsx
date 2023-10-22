import React from "react";
import './cardPubli.css';
import { useState, useEffect } from "react";

import Enquete from '../enquete/enquete';
import x from '../../../imgs/x.jpeg';

export default function CardPubli() {
    const [imagem, setImagem] = useState(false);
    const [enquete, setEnquete] = useState(false);

    return (
        <div className="cardPubli">
            <span >
                {imagem ? <div className="campoImgPubli">
                    <img src="" />
                </div> : null}


                <div className="textPubli">
                    <textarea id="textoPubli"></textarea>

                    {enquete ? <Enquete /> : null}

                </div>

            </span>
            <span className="btPubli">
                <img src={x} />

                <img src={x} onClick={()=>{setEnquete(!enquete)}}/>

                <img src={x} onClick={()=>{setImagem(!imagem)}}/>
            </span>
        </div>
    );
}