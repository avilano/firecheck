const express = require('express');
const router = express.Router();

const ruleSet = require('../data/truck.js');

router.get('/', function(req, res, next) {
  var ruleSetByModule = {};
  // do the mapping here
  

  res.render('truckForm', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });
});

module.exports = router;
