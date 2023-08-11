import { Navigate } from "react-router-dom";


//? o paramento {children} indica que o elementp recebera outro como filho e posso tratar dele na função
export default function PrivateRoute({ children }){

    //? busca no storage do browser a chave Authorization que recebe o code token do server
    const user = localStorage.getItem('Authorization');
    return(
        //TODO verifica a validade do campo de token para permitir acesso ao children
        user === 'logado' ? children : <Navigate to='/login'/>
        //! É NECESSARIO CRIAR AINDA O SISTEMA DE VERIFICAÇÃO COM CODIGOS VALIDOS E SEGUROS
        //! A VERIFICAÇÃO COMO ESTÁ E TEMPORARIA
    );
}