import React, { useState, useMemo, useEffect, useCallback } from 'react';
import JoditEditor from 'jodit-react';
import './editor.css';

const Editor = (props, { placeholder }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    props.setContent(content);
  }, [content]);

  useEffect(() => {
    if (props.sinopse !== content) {
      setContent(props.sinopse);
    }
  }, [props.sinopse]);

  useEffect(() => {
    if (props.content !== content) {
      setContent(props.content);
    }
  }, [props.content]);

  const debouncedSetContent = useCallback(
    debounce((newContent) => {
      setContent(newContent);
    }, 800),
    []
  );

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || 'Esperando uma história incrível aqui!! :)',
      ignoreDebounce: true, 
    }),
    [placeholder]
  );

  const handleChange = (newContent) => {
    debouncedSetContent(newContent);
  };

  return (
    <div className="minha-div-pai">
      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        onChange={handleChange}
      />
    </div>
  );
};


function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default Editor;
