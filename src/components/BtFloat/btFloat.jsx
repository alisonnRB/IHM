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
        <div class="fab">
            <button class="main" onClick={() => toggleFAB('.fab')}>
            </button>
            <ul>
                <li>
                    <label for="opcao1">Livro</label>
                    <Link>
                        <button id="opcao1"></button>
                    </Link>
                </li>
                <li>
                    <label for="opcao2">Publi</label>
                    <Link>
                        <button id="opcao2">
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}