import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
  enviar: async (cap, id, titulo) => {
    const id_user = sessionStorage.getItem("session");

    if (!id) {
      setVariavelGlobal(false);
      await auth.enviar();
      
    }
    
    let user = {
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

    const response = await fetch('http://localhost/server/DellCap.php', requisição);

    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

