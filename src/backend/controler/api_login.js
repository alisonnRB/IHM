export default {
    enviar: async (email, senha) => {
      let login = {
        email: email,
        senha: senha,
      };

      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      };
  
      const response = await fetch('http://localhost/server/login.php', requisição);
      const data = await response.json();
      return data;
    },
  };
  
  