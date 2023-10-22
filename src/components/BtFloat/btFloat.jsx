import React from "react";
import './btFloat.css';
import { Link } from "react-router-dom";

export default function FloatBt() {

    function toggleFAB(fab) {
        if (document.querySelector(fab).classList.contains('show')) {
            document.querySelector(fab).classList.remove('show');
        } else {
            document.querySelector(fab).classList.add('show');
        }
    }


    return (
        <div className="fab">
            <button className="main" onClick={() => toggleFAB('.fab')}>
            </button>
            <ul>
                <li>
                    <label htmlFor="opcao1">Livro</label>
                    <Link to='/novo-livro'>
                        <button id="opcao1"></button>
                    </Link>
                </li>
                <li>
                    <label htmlFor="opcao2">Publi</label>
                    <Link to='/novaPubli'>
                        <button id="opcao2">
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}