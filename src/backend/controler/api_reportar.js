import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
  enviar: async (denuncia, idLivro) => {
    const id = sessionStorage.getItem('session');
    if (!id) {
      setVariavelGlobal(false);
      await auth.enviar();
    }

    let user = {
        id: id,
        denuncia: denuncia,
        idLivro: idLivro
    };

    let requisição = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

   

    const response = await fetch('http://10.1.1.211/server/reporte.php', requisição);

    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

