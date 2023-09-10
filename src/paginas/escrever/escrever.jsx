import React from "react";
import './escrever.css';


import Header from "../../components/header/header";
import BarraCap from './barraCap/barraCap';
import Paginas from "./contentWrite/content";
import BtFloat from './btFloatH/btFloatH';

import image from '../../imgs/imagem.png';


export default function Escreve() {
    return (
        <div className="boxAttBook">
            <Header />
            <span className="infosDoLivro">
                <div className="boxIMG">
                    <img src={image} />
                </div>
                <div className="boxNAME">
                    <p>Nome do livro</p>
                </div>
                <div className="boxGEN">
                    <div className='gender'>não-ficção</div>
                    <div className='gender'>aventura</div>
                    <div className='gender'>...</div>
                </div>
            </span>
            <div className="tela">
                <BarraCap />
                <Paginas />
            </div>
            <BtFloat />
        </div>
    );

}