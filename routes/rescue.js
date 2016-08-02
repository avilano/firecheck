const express = require('express');
const router = express.Router();

const ruleSet = require('../data/rescue.js');

router.get('/', function(req, res, next) {
  var ruleSetByModule = {};
  // do the mapping here
  

  res.render('rescueForm', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });
});

module.exports = router;
