import React from "react";
import './abaSeleCap.css';
import { useState, useEffect } from "react";

export default function Aba(props) {
    const [Caps, setCaps] = useState(0);
    const [open, setOpen] = useState(false);
    const [titleCap, setTitleCap] = useState('');
    const classe = 'abre';

    const [cor, setCor] = useState('');

    const [ishovered, setIsHovered] = useState(0);

    const Capitulos = () => {

        const list = [];
        for (let i = 1; i <= Caps; i++) {
            let a = <span
                key={i}
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(0)}
                style={props.selecionado == i || ishovered == i ? { backgroundColor: cor } : null}
                className={`abaT ${open ? null : 'cap'} ${open ? classe : null}`}
                onClick={() => { if (open) { setOpen(false); props.setSelecionado(i); } }}>
                {open ? `Cap ${i} - ${titleCap[i]}` : null}
            </span>;
            list.push(a);
        }
        return list;
    }

    useEffect(() => {
        setCaps(props.Cap);
    }, [props.Cap]);

    useEffect(() => {
        setTitleCap(props.titleCap);
    }, [props.titleCap]);

    useEffect(() => {
        if (props.cor) {
            setCor(props.cor)
        }
    }, [props.cor])

    return (
        <div id="abaDeCap">
            <span
                key={0}
                className={`abaT ${open ? classe : null}`}
                style={!open || props.selecionado == 0?{ backgroundColor: cor }: null}
                onClick={() => { if (open) { setOpen(false); props.setSelecionado(0); } else { setOpen(true); } }}>
                {open ? 'SINOPSE' : null}
            </span>

            {Capitulos()}
        </div>
    );
}