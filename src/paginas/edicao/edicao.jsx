import React from "react";
import './edicao.css';


import Header from "../../components/header/header";
import Att from './att/att';


export default function NovoLivro() {
    return (
        <div className="boxNewBook">
            <Header />
            <div className="ConfigBook">
                <Att />
            </div>
        </div>
    );

}