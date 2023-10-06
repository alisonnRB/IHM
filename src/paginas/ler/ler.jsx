import React from "react";
import './ler.css';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import Page from "./paginas/page";
import BtFloatH from "../escrever/btFloatH/btFloatH";

export default function Ler() {
    const location = useLocation();
    const [idLivro, setIdLivro] = useState(0);
    const [cor1, setCor1] = useState('');
    const [cor2, setCor2] = useState('');

    useEffect(() => {
        const idLivroG = new URLSearchParams(location.search).get('id');
        setIdLivro(idLivroG);
    }, [location]);

    return (
        <div className="PageLer">
            <div className="BOXLER animated-gradient" style={{ background: `linear-gradient(to right, ${cor1}, ${cor2})` }}>
                <Page idLivro={idLivro} setCor1={setCor1} setCor2={setCor2} />
            </div>
            <BtFloatH />
        </div>
    );
}