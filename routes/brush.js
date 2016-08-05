const express = require('express');
const router = express.Router();

const ruleSetBrush = require('../data/brush.js');
router.get('/', function(req, res, next) {
  var ruleSetByModule = {};
  // do the mapping here
    res.render('brushForm', {
    title: ':UnitNum Form:',
    ruleSetBrush: ruleSetBrush
  });
});

module.exports = router;
