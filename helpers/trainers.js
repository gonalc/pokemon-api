var db = require("../models");

exports.getTrainers = function(req, res){
    db.Trainer.find()
    .then(function(trainers){
        res.json(trainers);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createTrainer = function(req, res){
    db.Trainer.create(req.body)
    .then(function(newTrainer){
        res.status(201).json(newTrainer);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.showTrainer = function(req, res){
    db.Trainer.findById(req.params.trainerId)
    .then(function(foundTrainer){
        res.json(foundTrainer);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateTrainer = function(req, res){
    db.Trainer.findOneAndUpdate({_id: req.params.trainerId}, req.body, {new: true})
    .then(function(updatedTrainer){
        res.json(updatedTrainer);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteTrainer = function(req, res){
    db.Trainer.remove({_id: req.params.trainerId})
    .then(function(){
        res.json({message: "We deleted it!"});
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports = exports;