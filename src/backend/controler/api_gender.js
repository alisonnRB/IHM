export default {
    enviar: async () => {
        const id = sessionStorage.getItem("session");
        let user = {
            id: id
        };

        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };

        const response = await fetch('http://192.168.255.56/server/gender.php', requisição);

        const data = await response.json();
        return data;
    },
};

