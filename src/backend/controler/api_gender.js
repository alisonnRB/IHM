export default {
    enviar: async () => {
        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };

        const response = await fetch('http://10.1.1.211/server/gender.php', requisição);

        const data = await response.json();
        return data;
    },
};

