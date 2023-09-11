import React from "react";
import './escrever.css';

import BarraCap from './barraCap/barraCap';
import Paginas from "./contentWrite/content";
import BtFloat from './btFloatH/btFloatH';

import image from '../../imgs/makeitmeme_NztUi.jpeg';


export default function Escreve() {

    return (
        <div className="boxAttBook">
            <span className="infosDoLivro">
                <div className="boxIMG">
                    <img src={image} />
                </div>
                <div className="infos-text">
                    <div className="boxNAME">
                        <p>Contos de um Minion</p>
                    </div>
                    <div className="boxGEN">
                        <div className='gender'>não-ficção</div>
                        <div className='gender'>aventura</div>
                        <div className='gender'>...</div>
                    </div>
                </div>
            </span>
            <div className="tela">
                <BarraCap/>
                <Paginas/>
            </div>
            <BtFloat />
        </div>
    );

}