import React, { useEffect, useState } from 'react';
import './enquete.css';

import x from '../../../imgs/cancel.png';

export default function Enquete(props) {
    const [content, setContent] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
    });
    
    const [title, setTitle] = useState('');

    const handleInputChange = (e, index) => {
        const newValue = e.target.value;
        setContent((prevContent) => ({
            ...prevContent,
            [index]: newValue,
        }));
    };

    const save = ()=>{
        props.setEnquete(content);
        props.setCancel(true);
        props.setEnqueteTem(true);
        props.setTitle(title);
    }

    useEffect(()=>{
        if(props.enquete != ''){
            setContent(props.enquete);
            setTitle(props.title);
        }
    },[props.enquete])
    
    return (
        <div className="enquete">
            <div id="cardEnquete">
                <span className="cancelIMG">
                    <img src={x} id="cancelaEnquete" onClick={()=>{props.setCancel(true)}}/>
                </span>
                <span className="tagBox">Nova Enquete</span>

                <span className="titleEnquete">
                    <input type="text" className="titleEnqueteBox" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </span>

                <div className="contentEnquete">
                    <input
                        type="text"
                        className="enqueteBox"
                        value={content[0]}
                        onChange={(e) => handleInputChange(e, 0)}
                    />
                    <input
                        type="text"
                        className="enqueteBox"
                        value={content[1]}
                        onChange={(e) => handleInputChange(e, 1)}
                    />
                    <input
                        type="text"
                        className="enqueteBox"
                        value={content[2]}
                        onChange={(e) => handleInputChange(e, 2)}
                    />
                    <input
                        type="text"
                        className="enqueteBox"
                        value={content[3]}
                        onChange={(e) => handleInputChange(e, 3)}
                    />
                    
                
                    <p id='pronto' onClick={()=>{save()}}>PRONTO</p>

                </div>
                
            </div>
        </div>
    );
}