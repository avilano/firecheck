const express = require('express');
const router = express.Router();

const ruleSet = require('../data/brush.js');
router.get('/', function(req, res, next) {
  var ruleSetByModule = {};
  // do the mapping here
    res.render('brushForm', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });
});

module.exports = router;
