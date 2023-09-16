import React, { useState, useMemo, useEffect } from 'react';
import JoditEditor from "jodit-react";
import './editor.css';

const Editor = (props, { placeholder }) => {
  const [content, setContent] = useState('');
  useEffect(()=>{
    props.setContent(content);
  }, [content]);



  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || 'Esperando uma história incrivel aqui!! :)'
    }),
    [placeholder]
  );

  return (
    <div className="minha-div-pai">
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