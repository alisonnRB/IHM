import auth from "./api_autenticar";

export default {
  enviar: async (pronto, cap, idLivro) => {
    const id = sessionStorage.getItem('session');
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

    const response = await fetch('http://192.168.255.56/server/cap_pronto.php', requisição);

    const data = await response.json();
    console.log(data.informacoes);
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

