var mongoose = require("mongoose");

var trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please, name cannot be blank!"
    },
    age: Number,
    country: String,
    image: String
});

var Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;