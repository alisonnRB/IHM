import React from 'react';
import './loading.css';

import load from './loading.gif';

export default function Loading() {
    return (
        <div className='content-load'>
            <img src={load} id='loading'/>
        </div>
    );
}