import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }){

    const user = localStorage.getItem('Authorization')
    return(
        user === 'logado' ? children : <Navigate to='/login'/>
    );
}