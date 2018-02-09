var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/trainers");

router.route("/")
    .get(helpers.getTrainers)
    .post(helpers.createTrainer)
    
router.route("/:trainerId")
    .get(helpers.showTrainer)
    .put(helpers.updateTrainer)
    .delete(helpers.deleteTrainer)

module.exports = router;