export default {
    enviar: async (nome, usuario, dataNasc, email, senha) => {
      let user = {
        nome: nome,
        usuario: usuario,
        dataNasc: dataNasc,
        email: email,
        senha: senha,
      };

      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };
  
      const response = await fetch('http://localhost/api/', requisição);
      const data = await response.json();
      return data;
    },
  };
  
  
  
  
  