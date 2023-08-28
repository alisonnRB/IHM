import React from "react";
import './novoLivro.css';


import Header from "../../components/header/header";
import Create from './createLivro/createLivro';


export default function NovoLivro() {
    return (
        <div className="boxNewBook">
            <Header />
            <div className="ConfigBook">
                <Create />
            </div>
        </div>
    );

}