var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/pokemons");

router.route("/")
    .get(helpers.getPokemons)
    .post(helpers.createPokemon)
    
router.route("/:pokemonId")
    .get(helpers.showPokemon)
    .put(helpers.updatePokemon)
    .delete(helpers.deletePokemon)

module.exports = router;