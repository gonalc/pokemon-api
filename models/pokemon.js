var mongoose = require("mongoose");

var pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank!"
    },
    level: Number,
    type: String,
    movements: [],
    image: String
});

var Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;