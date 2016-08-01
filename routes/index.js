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

router.get('/truck', function(req, res, next) {
  var ruleSet = [{
    module: 'Engine Compartment',
    id: 'battery-compartment',
    value: 'battery-compartment',
    name: 'battery-compartment',
    type: 'dropdown',
    label: 'Battery Compartment: '
  },{
    module: 'Engine Compartment',
    id: 'engine-oil-level',
    value: 'engine-oil-level',
    name: 'engine-oil-level',
    type: 'range',
    label: 'Engine Oil Level: ',
    options: { min: 0, max: 1, step: 0.25 } // these are for range type
  },{
    module: 'Engine Compartment',
    id: 'air-filters',
    value: 'air-filters',
    name: 'air-filters',
    type: 'dropdown',
    label: 'Air Filters: '
  },{
    module: 'Engine Compartment',
    id: 'radiator-hoses',
    value: 'radiator-hoses',
    name: 'radiator-hoses',
    type: 'dropdown',
    label: 'Radiator Hoses: '
  },{
    module: 'Engine Compartment',
    id: 'powersteering-level',
    value: 'powersteering-level',
    name: 'powersteering-level',
    type: 'range',
    label: 'Powersteering Level: ',
    options: { min: 0, max: 1, step: 0.25 } // these are for range type
  },{
    module: 'Engine Compartment',
    id: 'engine-appearance',
    value: 'engine-appearance',
    name: 'engine-appearance',
    type: 'dropdown',
    label: 'Engine Appearance: '
  },{
    module: 'Outer Perimeter', ///////
    id: 'wheel-pressure',
    value: 'wheel-pressure',
    name: 'wheel-pressure',
    type: 'dropdown',
    label: 'Wheel Pressure: '
  },{
    module: 'Outer Perimeter',
    id: 'vehicle-appearance',
    value: 'vehicle-appearance',
    name: 'vehicle-appearance',
    type: 'dropdown',
    label: 'Vehicle Appearance: '
  },{
    module: 'Outer Perimeter',
    id: 'hose-loads',
    value: 'hose-loads',
    name: 'hose-loads',
    type: 'dropdown',
    label: 'Hose Loads: '
  },{
    module: 'Outer Perimeter',
    id: 'license-plate',
    value: 'license-plate',
    name: 'license-plate',
    type: 'dropdown',
    label: 'License Plate: '
  },{
    module: 'Outer Perimeter',
    id: 'license-sticker',
    value: 'license-sticker',
    name: 'license-sticker',
    type: 'dropdown',
    label: 'License Sticker: '
  },{
    module: 'Outer Perimeter',
    id: 'equipment-placement',
    value: 'equipment-placement',
    name: 'equipment-placement',
    type: 'dropdown',
    label: 'Equipment Placement: '
  },{
    module: 'Outer Perimeter',
    id: 'water-tank-level',
    value: 'water-tank-level',
    name: 'water-tank-level',
    type: 'range',
    label: 'Water Tank Level: ',
    options: { min: 0, max: 1, step: 0.25 } // these are for range type
  },{
    module: 'Start Engine',
    id: 'electrical-switches',
    value: 'electrical-switches',
    name: 'electrical-switches',
    type: 'dropdown',
    label: 'Electrical Switches: '
  },{
    module: 'Gauge Condition',
    id: 'gauge-condition',
    value: 'gauge-condition',
    name: ' gauge-condition',
    type: 'dropdown',
    label: 'Gauge Condition: '
  }];

  res.render('form', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });

});


module.exports = router;
