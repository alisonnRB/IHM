import React from "react";
import './enquete.css';
import { useState, useEffect } from "react";



export default function enquete() {

    return (
        <div className="enquete">
            <span>
                <div className="enqueteBox"></div>
                <div className="enqueteBox"></div>
            </span>
            <span>
                <div className="enqueteBox"></div>
                <div className="enqueteBox"></div>
            </span>
        </div>
    );
}