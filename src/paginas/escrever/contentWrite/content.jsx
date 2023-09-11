import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Estilos do Quill
import "./content.css";
import BarraControl from "./barraControl/barraControl";
import ReactQuill from "react-quill";

export default function Paginas() {
  const [text, setText] = useState(""); // Usado para controlar o conteúdo do Quill
  const [modo, setModo] = useState("");
  const [letraNegrito, setLetraNegrito] = useState(false);
  const [letraItalic, setLetraItalic] = useState(false);

  const handleTextChange = (content) => {
    setText(content);
  };

  return (
    <div className="content-page">
      <BarraControl
        setModo={setModo}
        setLetraNegrito={setLetraNegrito}
        letraNegrito={letraNegrito}
        letraItalic={letraItalic}
        setLetraItalic={setLetraItalic}
      />

      <div>
        <span>Sinopse</span>
        <ReactQuill
          value={text}
          onChange={handleTextChange}
          style={{ textAlign: modo, fontWeight: letraNegrito ? "bold" : "normal", fontStyle: letraItalic ? "italic" : "normal" }}
        />
      </div>
    </div>
  );
}