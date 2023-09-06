export default {
    //? prepara o objeto para enviar no padrão RESTful
      enviar: async (nome) => {
        let user = {
          nome: nome,
        };
        //? prepara as informações de methodo e cabeçalhos para fazer a requisição
        let requisição = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        };
        
        //TODO faz a requisição
  
        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.56/server/generos_livros.php', requisição);
  
        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        return data;
      },
    };
    
    