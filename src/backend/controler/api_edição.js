export default {
    enviar: async (id, file, nome) => {
      let edit = {
        id: id,
        file: file,
        nome: nome,
      };

      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(edit),
      };
  
      const response = await fetch('http://localhost/server/config_perfil.php', requisição);
      const data = await response.json();
      return data;
    },
  };
  
  