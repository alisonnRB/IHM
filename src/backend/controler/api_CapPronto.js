import auth from "./api_autenticar";

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

    const response = await fetch('http://10.1.1.211server/cap_pronto.php', requisição);

    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

