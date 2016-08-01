const express = require('express');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Equipment - Weekly Report Login'
  });
});
/*
router.get('/:usrid', function(req, res, next) {
  res.render('splash', {
    title: 'Equipment - Weekly Report'
  });
});
*/
router.post('/', function (req, res) {
    console.log('usr is: ' + req.body.usrname);
    console.log('pwrd is: ' + req.body.passwrd);
    res.redirect('/splash');
});

router.get('/splash', function(req, res, next) {
  res.render('splash', {
    title: 'Equipment - Weekly Report'
  });
});
// Hanlde POST
router.post('/splash', function (req, res) {
    console.log('Auditor is: ' + req.body.shift);
    console.log('Unit is: ' + req.body.shift);
    res.redirect('/form');
});

router.get('/form', function(req, res, next) {
  var ruleSet = [{
    module: 'Engine Component',
    id: 'battery-compartment',
    value: "battery-compartment",
    name: 'battery-compartment',
    type: 'checkbox',
    label: 'Battery Compartment'
  },{
    module: 'Engine Component',
    id: 'tire-pressure',
    type: 'range',
    label: 'Tire Pressure',
    options: { min: 0, max: 50, step: 0.1 }
  }, {
    id: 'paint-condition',
    type: 'text',
    module: 'Body',
    label: 'Paint Condition'
  }];

  res.render('form', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });
});

module.exports = router;
