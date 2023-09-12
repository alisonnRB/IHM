import React, { useState, useMemo } from 'react';
import JoditEditor from "jodit-react";
import './editor.css';

const Editor = ({ placeholder }) => {
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || 'Esperando uma história incrivel aqui!! :)'
    }),
    [placeholder]
  );

  return (
    <div className="minha-div-pai"> {/* Certifique-se de definir a classe na div pai */}
      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
      />
    </div>
  );
};

export default Editor;