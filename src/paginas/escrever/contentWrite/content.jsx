import React, { useState, useEffect } from "react";
import "./content.css";

import Editor from "../../../components/editor/editor";

export default function Paginas(props) {
    const [content, setContent] = useState('');
    useEffect(()=>{
        props.setContent(content);
      }, [content]);    

    return (
        <div className="content-page">
            <span className="caixaCap">
                <input type="text" />
            </span>
                <Editor setContent={setContent}/>
        </div>
    );
}