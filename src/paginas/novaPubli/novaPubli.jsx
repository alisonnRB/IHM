import React from "react";
import './novaPubli.css';
import { useState, useEffect } from "react";

import x from "../../imgs/cancel.png";

import Header from '../../components/header/header';
import Card from './cardPubli/cardPubli';

export default function NovaPubli() {


    return (
        <div className="telaPubli">
            <Header />
            <span id="cancelPubli">
                <img src={x} />
            </span>
            <div className="boxPubli">
                <Card/>
            </div>
        </div>
    );
}