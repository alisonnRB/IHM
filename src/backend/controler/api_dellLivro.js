export default {
    enviar: async (id, idLivro) => {
      let user = {
        id: id,
        idLivro: idLivro,
      };


      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };

      const response = await fetch('http://192.168.255.56/server/dellLivro.php', requisição);

      const data = await response.json();
      return data;
    },
  };
  
  