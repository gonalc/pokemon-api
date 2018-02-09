var db = require("../models");

exports.getPokemons = function(req, res){
    db.Pokemon.find()
    .then(function(pokemons){
        res.json(pokemons);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createPokemon = function(req, res){
    db.Pokemon.create(req.body)
    .then(function(newPokemon){
        res.status(201).json(newPokemon);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.showPokemon = function(req, res){
    db.Pokemon.findById(req.params.pokemonId)
    .then(function(foundPokemon){
        res.json(foundPokemon);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updatePokemon = function(req, res){
    db.Pokemon.findOneAndUpdate({_id: req.params.pokemonId}, req.body, {new: true})
    .then(function(updatedPokemon){
        res.json(updatedPokemon);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deletePokemon = function(req, res){
    db.Pokemon.remove({_id: req.params.pokemonId})
    .then(function(){
        res.json({message: "Pokedeleted!"});
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports = exports;