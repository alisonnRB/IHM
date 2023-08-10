export default {
  enviar: async (id, formData, nome) => {
      formData.append('id', id);
      formData.append('nome', nome);

      const response = await fetch('http://localhost/server/config_perfil.php', {
          method: 'POST',
          body: formData,
      });

      const data = await response.json();
      return data;
  },
};
