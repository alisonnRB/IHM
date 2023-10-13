export default {
    //? prepara o objeto para enviar no padrão RESTful
      enviar: async (id_user, id_ref) => {
        let user = {
          id_user: id_user,
          id_ref: id_ref,
        };
        //? prepara as informações de methodo e cabeçalhos para fazer a requisição
        let requisição = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        };
        
        //TODO faz a requisição
  
        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.56/server/favoritar.php', requisição);
        fetch('http://192.168.255.56/server/contaFavoritos.php');
  
        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        return data;
      },
    };