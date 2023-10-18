export default {
    //? prepara o objeto para enviar no padrão RESTful
      enviar: async (id_user, id_ref, tipo, coment) => {
        let user = {
          id_user: id_user,
          id_ref: id_ref,
          tipo: tipo,
          coment: coment,
        };
        //? prepara as informações de methodo e cabeçalhos para fazer a requisição
        let requisição = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        };
        
        //TODO faz a requisição
  
        //! coloque o seu ip ali
        const response = await fetch('http://10.1.1.211/server/curtir.php', requisição);
        fetch('http://10.1.1.211/server/contaCurtidas.php');
  
        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        return data;
      },
    };
    
    