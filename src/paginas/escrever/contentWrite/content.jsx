import React, { useState, useEffect } from "react";
import "./content.css";

import Editor from "../../../components/editor/editor";

export default function Paginas(props) {
    const [content, setContent] = useState('');
    const [titulo, setTitulo] = useState('');


    useEffect(() => {
        props.setContent(content);
    }, [content]);

    useEffect(() => {
        props.setTitulo(titulo);
    }, [titulo]);

    const title = (event) => {
        setTitulo(event.target.value);
    };

    return (
        <div className="content-page">
            {props.cap != 0 ? <span className="caixaCap">
                <input type="text" value={titulo} onChange={title}/>
            </span> : <span className="caixaCap"></span>}

            <Editor setContent={setContent} />
        </div>
    );
}