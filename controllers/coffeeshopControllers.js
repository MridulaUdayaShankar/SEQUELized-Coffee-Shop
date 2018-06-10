var express = require("express");

var router = express.Router();

// Import the model (coff.js) to use its database functions.
var coffees = require("../models/coffeeshop.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  coffees.all(function (result) {
    res.render("index", result);
  });
});

router.post("/api/coffee", function (req, res) {
  coffees.create(["name", "drink"], [req.body.name, req.body.drink], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/coffee/:id/:drink", function (req, res) {
  var condition = `id=${parseInt(req.params.id)}`;
  var drink = parseInt(req.params.drink);
  coffees.update(
    {
      drink
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
