import React from "react";
import './barraControl.css';

import italico from "../../../../imgs/italico.png";
import alinharD from "../../../../imgs/alinhamento-de-texto-a-direita.png";
import alinharE from "../../../../imgs/alinhar-a-esquerda.png";
import justificar from "../../../../imgs/justificar.png";
import centro from "../../../../imgs/texto.png";
import negrito from "../../../../imgs/n.png";


export default function BarraControl() {
    return (
        <div className="barraControl">
            <span>
                <img src={alinharE} />
                <img src={justificar} />
                <img src={alinharD} />
                <img src={centro} />
                <img src={negrito} />
                <img src={italico} />
            </span>

            <span>
                <div>S</div>
                <div>C</div>
                <div>T</div>
            </span>
        </div>
    );

}