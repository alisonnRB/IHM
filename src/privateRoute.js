import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import api from "./backend/controler/api_autenticar";;

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        Auth();
    }, [])

    const Auth = async () => {
        const authentic = await api.enviar();
        if (!authentic.ok) {
            navigate('/login');
        }
    }
    return children;
}