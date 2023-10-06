import React from "react";
import './comentarios.css';
import { useState, useEffect } from "react";

import Card from '../../../components/cardComent/cardComent'

export default function Comentarios(){
    return(
        <div id="boxComent">
            <form className="campoComent">
                <input type="text" placeholder="coment..."/>
            </form>

            <div className="comentarios">
                <Card />
            </div>

        </div>
    );
}