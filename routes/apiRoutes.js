var express = require("express");

var app = express();

// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Coffee.findAll({}).then(function (result) {
      res.render("index", result);
    });
  });

  app.post("/api/coffee", function (req, res) {
    db.Coffee.create({
      name: req.body.name,
      drink: req.body.drink
    }).then(function (result) {
      // Send back the ID of the new coffee
      res.json(result);
    });
  });

  app.put("/api/coffee/:id/:drink", function (req, res) {
    db.Coffee.update({
      drink: req.params.drink
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      // Send back the ID of the new coffee
      res.json(result);

    });
  });

};
