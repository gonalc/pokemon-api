var express    = require("express"),
    port       = process.env.PORT || 3000,
    bodyParser = require("body-parser"),
    app        = express();

var trainersRoutes = require("./routes/trainers");
var pokemonsRoutes = require("./routes/pokemons");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.json({name: "Gonzalo", city: "Majadahonda, Madrid"});
});

app.use("/api/trainers", trainersRoutes);
app.use("/api/pokemons", pokemonsRoutes);

app.listen(port, function(){
    console.log("API Running on port " + port);
});