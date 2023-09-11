import React from "react";
import './barraControl.css';

import italico from "../../../../imgs/italico.png";
import alinharD from "../../../../imgs/alinhamento-de-texto-a-direita.png";
import alinharE from "../../../../imgs/alinhar-a-esquerda.png";
import justificar from "../../../../imgs/justificar.png";
import centro from "../../../../imgs/texto.png";
import negrito from "../../../../imgs/n.png";

export default function BarraControl(props) {

    function textTroca(i) {
        props.setModo(i);
    }

    function Negrito() {
        if (props.letraNegrito) {
            props.setLetraNegrito(false);
        } else {
            props.setLetraNegrito(true);
        }
    }
    function Italic() {
        if (props.letraItalic) {
            props.setLetraItalic(false);
        } else {
            props.setLetraItalic(true);
        }
    }

    return (
        <div className="barraControl">
            <span>
                <img src={alinharE} onClick={() => textTroca('start')} />
                <img src={justificar} onClick={() => textTroca('justify')} />
                <img src={alinharD} onClick={() => textTroca('end')} />
                <img src={centro} onClick={() => textTroca('center')} />
                <img src={negrito} onClick={() => Negrito()} />
                <img src={italico} onClick={() => Italic()} />
            </span>
        </div>
    );
}