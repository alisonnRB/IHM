import React from "react";
import './ler.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/header";
import Page from "./paginas/page";
import BtFloatH from "../escrever/btFloatH/btFloatH";

export default function Ler() {
    const location = useLocation();
    const [idLivro, setIdLivro] = useState(0);

    useEffect(() => {
        const idLivroG = new URLSearchParams(location.search).get('id');
        setIdLivro(idLivroG);
    }, []);

    return (
        <div className="PageLer">
            <Header />
            <div className="BOXLER">
                <Page idLivro={idLivro}/>
            </div>
            <BtFloatH />
        </div>
    );
}