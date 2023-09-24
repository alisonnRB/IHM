export default {
    enviar: async (cap, id, titulo, idUser) => {
      let user = {
        cap: cap,
        id: id,
        titulo: titulo,
        idUser: idUser,
      };
      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };

      const response = await fetch('http://192.168.255.56/server/DellCap.php', requisição);

      const data = await response.json();
      return data;
    },
  };
  
  