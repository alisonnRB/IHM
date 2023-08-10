export default {
    enviar: async (id) => {
      let user = {
        id: id,
      };

      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };
  
      const response = await fetch('http://localhost/server/info_users.php', requisição);
      const data = await response.json();
      return data;
    },
  };
  
  