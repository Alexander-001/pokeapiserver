const axios = require('axios').default;

const getPokemons = async (request, response) => {
    try {
        const { limit } = request.body;
        let urlServerPokemon = `https://pokeapi.co/api/v2/pokemon/${limit}/`;
        const pokeApi = await axios({ url: urlServerPokemon, method: 'GET' });
        response.json({ pokeApi: pokeApi.data });
    } catch (error) {
        response.status(500).json({
            msg: 'Internal server error',
            error: error.message
        });
    };
};

module.exports = {
    getPokemons
} 