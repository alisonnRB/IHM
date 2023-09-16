import React from "react";
import { useEffect, useState } from "react";
import './barraCap.css';

import mais from '../../../imgs/mais.png';

export default function BarraCap(props) {
    const [caps, setCaps] = useState('');

    useEffect(()=>{

    },[props])


    return (
        <div className="barraCap">
            <span>Sinopse</span>
            <span>oi</span>
            <span>tchau</span>

            <img src={mais}/>
        </div>
    );

}