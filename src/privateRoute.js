import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import api from "./backend/controler/api_autenticar";
import { getVariavelGlobal} from "./GvarAuth";

export default function PrivateRoute({ children }) {
    let variavelGlobal = getVariavelGlobal();

    const navigate = useNavigate();

    const Auth = async () => {
        await api.enviar();
    }

    useEffect(() => {
        Auth();
        const intervalId = setInterval(Auth, 1800000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (variavelGlobal) {
            sessionStorage.clear();
            localStorage.clear();
            navigate('/login');
        }
    }, [variavelGlobal]);

    if (!variavelGlobal) {
        return children;
    } else {
        return null;
    }

}
