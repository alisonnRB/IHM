import React, { useState } from "react";
import "./content.css";

import Editor from "../../../components/editor/editor";

export default function Paginas() {

    return (
        <div className="content-page">
            <span className="caixaCap">
                <input type="text" />
            </span>
                <Editor />
        </div>
    );
}