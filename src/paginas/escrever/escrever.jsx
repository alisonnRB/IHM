import React from "react";
import './escrever.css';

import BarraCap from './barraCap/barraCap';
import Paginas from "./contentWrite/content";
import BtFloat from './btFloatH/btFloatH';

import logo from '../../imgs/livro_mine.png';
import abinha from '../../imgs/abinha.png';

/*<div className="boxIMG">
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
</div>*/

export default function Escreve() {

    return (
        <div className="boxAttBook">
            <img className="abinha" src={abinha}/>
            <span className="infosDoLivro">
                <img className="boxLogo" src={logo}/>

                <p>Sinopse</p>
            </span>
                <BarraCap/>
                <Paginas/>
            <BtFloat />
        </div>
    );

}