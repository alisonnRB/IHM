export default {
      enviar: async (text, cap, id) => {
        let user = {
          text: text,
          cap: cap,
          id: id,
        };
        let requisição = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        };

        const response = await fetch('http://192.168.255.56/server/salvarLivro.php', requisição);
  
        const data = await response.json();
        return data;
      },
    };
    
    