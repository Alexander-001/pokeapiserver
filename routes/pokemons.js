const { Router } = require('express');
const { getPokemons } = require('../controllers/pokemons'); 

const router = Router();

router.post('/', getPokemons);

module.exports = router;