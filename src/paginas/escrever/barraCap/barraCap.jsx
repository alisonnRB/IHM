import React from "react";
import { useEffect, useState } from "react";
import './barraCap.css';

import mais from '../../../imgs/mais.png';

export default function BarraCap(props) {
    const [numCaps, setNumCaps] = useState(0);

    useEffect(() => {
        setNumCaps(props.cap);
    }, [props])

    const capitulos = () => {
        const list = [];
        for (let i = 1; i <= numCaps; i++) {
            let a = <span key={i} onClick={() => props.setCap(i)}>{`capitulo ${i}`}</span>;
            list.push(a);
        }
        return list;
    }


    return (
        <>
            <div className="barraCap">
                <span onClick={() => { props.setCap(0) }}>Sinopse</span>

                {capitulos()}

                
            </div>
            <div className="caixaMais">
                <img src={mais} onClick={() => { setNumCaps(numCaps + 1); props.setCap(numCaps + 1) }} />
            </div>
        </>
    );

}