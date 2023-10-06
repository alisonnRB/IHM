import React from "react";
import './cardComent.css';
import { useState, useEffect } from "react";

export default function Comentarios() {
    return (
        <>
            <span id="comentary">
                <img className="userComent" src="" />

                <div className="boxComent">
                    <span className="nomeComent">joaozinho</span>
                    <div className="coment"> KARALHOOOOO QUE LIVRO BOMMMM</div>

                </div>

                <div className="btsCurti">

                </div>
            </span>

            <span id="infosComent">
                <p>há 1 dia</p>
                <p>RESPONDER</p>
            </span>

        </>
    );
}