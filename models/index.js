// THIS IS THE PLACE WHERE WE CONNECT MODELS AND THE DATABASE WITH MONGOOSE
var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/pokemon-api-v2");

// THIS IS JUST TO LET US USE THE PROMISE SYNTAX AND CHAIN THEM
mongoose.Promise = Promise;

module.exports.Trainer = require("./trainer");
module.exports.Pokemon = require("./pokemon");