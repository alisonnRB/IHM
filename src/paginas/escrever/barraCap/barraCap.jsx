import React from "react";
import './barraCap.css';

import mais from '../../../imgs/mais.png';

export default function BarraCap() {
    return (
        <div className="barraCap">
            <span>Capitulo01 - oi</span>
            <span>Capitulo02 - oi</span>
            <span>Capitulo03 - oi</span>

            <img src={mais}/>
        </div>
    );

}