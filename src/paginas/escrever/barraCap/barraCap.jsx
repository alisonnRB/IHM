import React from "react";
import './barraCap.css';

import mais from '../../../imgs/mais.png';

export default function BarraCap() {

    return (
        <div className="barraCap">
            <span>Sinopse</span>
            <span>oi</span>
            <span>tchau</span>

            <img src={mais}/>
        </div>
    );

}