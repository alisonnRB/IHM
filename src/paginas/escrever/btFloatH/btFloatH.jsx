import React from "react";
import './btFloatH.css';
import { Link } from "react-router-dom";




export default function BtFloat(props) {
    return (
        <>
            <div className="btSave" onClick={()=>{props.setSalvar(true)}}>

            </div>
            <Link id="linnk" to='/perfil'>
                <div className="btFloat">

                </div>
            </Link>
        </>
    );

}