import auth from "./api_autenticar";

export default {
  enviar: async (text, cap, id, titulo) => {
    const id_user = sessionStorage.getItem('session');
    let user = {
      text: text,
      cap: cap,
      id: id,
      titulo: titulo,
      idUser: id_user,
    };
    let requisição = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    const response = await fetch('http://10.1.1.211/server/salvaLivros.php', requisição);

    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

