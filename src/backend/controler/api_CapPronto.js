export default {
    enviar: async (id, pronto, cap, idLivro) => {
      let user = {
        id: id,
        pronto: pronto,
        cap: cap,
        idLivro: idLivro,
      };

      let requisição = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };

      const response = await fetch('http://10.1.1.211/server/cap_pronto.php', requisição);

      const data = await response.json();
      return data;
    },
  };
  
  