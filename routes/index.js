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
    module: 'Start Engine',       ///////////
    id: 'electrical-switches',
    value: 'electrical-switches',
    name: 'electrical-switches',
    type: 'dropdown',
    label: 'Electrical Switches: '
  },{
    module: 'Start Engine',
    id: 'gauge-condition',
    value: 'gauge-condition',
    name: 'gauge-condition',
    type: 'dropdown',
    label: 'Gauge Condition: '
  },{
    module: 'Start Engine',
    id: 'air-tank-psi',
    value: 'air-tank-psi',
    name: 'air-tank-psi',
    type: 'dropdown',
    label: 'Air Tank Psi: '
  }];

  res.render('form', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });

});

router.get('/brush', function(req, res, next) {
  var ruleSet = [{
    module: 'Engine Compartment',
    id: 'battery-compartment',
    value: 'battery-compartment',
    name: 'battery-compartment',
    type: 'dropdown',
    label: 'Battery Compartment:'
  }, {
    module: 'Engine Compartment',
    id: 'engine-oil-level',
    value: 'engine-oil-level',
    name: 'engine-oil-level',
    type: 'dropdown',
    label: 'Engine Oil Level:'
  }, {
    module: 'Engine Compartment',
    id: 'air-filter',
    value: 'air-filter',
    name: 'air-filter',
    type: 'dropdown',
    label: 'Air Filter:'
  }, {
    module: 'Engine Compartment',
    id: 'radiator-hoses',
    value: 'radiator-hoses',
    name: 'radiator-hoses',
    type: 'dropdown',
    label: 'Radiator Hoses:'
  }, {
    module: 'Engine Compartment',
    id: 'power-steering-level',
    value: 'power-steering-level',
    name: 'power-steering-level',
    type: 'dropdown',
    label: 'Power Steering Level:'
  }, {
    module: 'Engine Compartment',
    id: 'engine-appearance',
    value: 'engine-appearance',
    name: 'engine-appearance',
    type: 'dropdown',
    label: 'Engine Appearance:'
  }];

  var ruleSet2 = [{
    module: 'Outer Perimeter',
    id: 'tire-pressure',
    value: 'tire-pressure',
    name: 'tire-pressure',
    type: 'dropdown',
    label: 'Radiator Hoses:'
  }, {
    module: 'Outer Perimeter',
    id: 'vehicle-appearance',
    value: 'vehicle-appearance',
    name: 'vehicle-appearance',
    type: 'dropdown',
    label: 'Vehicle Apperance:'
  }, {
    module: 'Outer Perimeter',
    id: 'hose-loads',
    value: 'hose-loads',
    name: 'hose-loads',
    type: 'dropdown',
    label: 'Hose Loads:'
  }, {
    module: 'Outer Perimeter',
    id: 'license-plate',
    value: 'license-plate',
    name: 'license-plate',
    type: 'dropdown',
    label: 'License Plate:'
  }, {
    module: 'Outer Perimeter',
    id: 'license-sticker',
    value: 'license-sticker',
    name: 'license-sticker',
    type: 'dropdown',
    label: 'Registration Sticker:'
  }, {
    module: 'Outer Perimeter',
    id: 'equip-placement',
    value: 'equip-placement',
    name: 'equip-placement',
    type: 'dropdown',
    label: 'Equipment Placement:'
  }, {
    module: 'Outer Perimeter',
    id: 'water-tank',
    value: 'water-tank',
    name: 'water-tank',
    type: 'dropdown',
    label: 'Water Tank Level:'
  }, {
    module: 'Outer Perimeter',
    id: 'primer-reservoir',
    value: 'primer-reservoir',
    name: 'primer-reservoir',
    type: 'dropdown',
    label: 'Primer Reservoir Level:'
  }, {
    module: 'Start Engine',
    id: 'elec-switch',
    value: 'elec-switch',
    name: 'elec-switch',
    type: 'dropdown',
    label: 'Electrical Switches:'
  }];

  var ruleSet4 = [{
    module: 'Start Engine',
    id: 'gauge-condition',
    value: 'gauge-condition',
    name: 'gauge-condition',
    type: 'dropdown',
    label: 'Gauge Condition:'
  }, {
    module: 'Start Engine',
    id: 'air-tank',
    value: 'air-tank',
    name: 'air-tank',
    type: 'dropdown',
    label: 'Air Tank PSI:'
  }, {
    module: 'Start Engine',
    id: 'flashlights',
    value: 'flashlights',
    name: 'flash-lights',
    type: 'dropdown',
    label: 'Flashlights:'
  }, {
    module: 'Start Engine',
    id: 'interior-inspect',
    value: 'interior-inspet',
    name: 'interior-inspet',
    type: 'dropdown',
    label: 'Interior Inspection:'
  }, {
    module: 'Start Engine',
    id: 'mirrors',
    value: 'mirrors',
    name: 'mirrors',
    type: 'dropdown',
    label: 'Mirrors:'
  }, {
    module: 'Start Engine',
    id: 'windshield',
    value: 'windshield',
    name: 'windshield',
    type: 'dropdown',
    label: 'Windshield:'
  }, {
    module: 'Start Engine',
    id: 'charge-system',
    value: 'charge-system',
    name: 'charge-system',
    type: 'dropdown',
    label: 'Charging System:'
  }, {
    module: 'Start Engine',
    id: 'oil-pressure',
    value: 'oil-pressure',
    name: 'oil-pressure',
    type: 'dropdown',
    label: 'Oil Pressure:'
  }, {
    module: 'Start Engine',
    id: 'air-indicator',
    value: 'air-indicator',
    name: 'air-indicator',
    type: 'dropdown',
    label: 'Air Indicator:'
  }];

  var ruleSet6 = [{
    module: 'Inside Cab',
    id: 'flash-lights',
    value: 'flash-lights',
    name: 'flash-lights',
    type: 'text',
    label: 'Flash Lights:'
  }];
 });

  router.get('/rescue', function(req, res, next) {
    var ruleSet = [{
      module: 'Engine Compartment',
      id: 'battery-compartment',
      value: 'battery-compartment',
      name: 'battery-compartment',
      type: 'dropdown',
      label: 'Battery Compartment'
  }, {
    module: 'Engine Compartment',
    id: 'engine-oil-level',
    value: 'engine-oil-level',
    name: 'engine-oil-level',
    type: 'dropdown',
    label: 'Engine Oil Level'
  }, {
    module: 'Engine Compartment',
    id: 'air-filter',
    value: 'air-filter',
    name: 'air-filter',
    type: 'dropdown',
    label: 'Air Filter'
  }, {
    module: 'Engine Compartment',
    id: 'radiator-hoses',
    value: 'radiator-hoses',
    name: 'radiator-hoses',
    type: 'dropdown',
    label: 'Radiator Hoses'
  }, {
    module: 'Engine Compartment',
    id: 'power-steering-level',
    value: 'power-steering-level',
    name: 'power-steering-level',
    type: 'dropdown',
    label: 'Power Steering Level'
  }, {
    module: 'Engine Compartment',
    id: 'engine-appearance',
    value: 'engine-appearance',
    name: 'engine-appearance',
    type: 'dropdown',
    label: 'Engine Appearance'
  }, {
    module: 'Outer Perimeter',
    id: 'tire-pressure',
    value: 'tire-pressure',
    name: 'tire-pressure',
    type: 'dropdown',
    label: 'Radiator Hoses'
  }, {
    module: 'Outer Perimeter',
    id: 'vehicle-appearance',
    value: 'vehicle-appearance',
    name: 'vehicle-appearance',
    type: 'dropdown',
    label: 'Vehicle Appearance'
  }, {
    module: 'Outer Perimeter',
    id: 'license-plate-sticker',
    value: 'license-plate-sticker',
    name: 'license-plate-sticker',
    type: 'dropdown',
    label: 'Registration Sticker'
  }, {
    module: 'Outer Perimeter',
    id: 'equip-placement',
    value: 'equip-placement',
    name: 'equip-placement',
    type: 'dropdown',
    label: 'Equipment Placement'
  }, {
    module: 'Start Engine',
    id: 'elec-switch',
    value: 'elec-switch',
    name: 'elec-switch',
    type: 'dropdown',
    label: 'Electrical Switches'
  }, {
    module: 'Start Engine',
    id: 'gauge-condition',
    value: 'gauge-condition',
    name: 'gauge-condition',
    type: 'dropdown',
    label: 'Gauge Condition'
  }, {
    module: 'Start Engine',
    id: 'air-tank',
    value: 'air-tank',
    name: 'air-tank',
    type: 'dropdown',
    label: 'Air Tank PSI'
  }, {
    module: 'Start Engine',
    id: 'flashlights',
    value: 'flashlights',
    name: 'flashlights',
    type: 'dropdown',
    label: 'Flashlights'
  }, {
    module: 'Start Engine',
    id: 'interior-inspet',
    value: 'interior-inspet',
    name: 'interior-inspet',
    type: 'dropdown',
    label: 'Interior Inspet'
  }, {
    module: 'Start Engine',
    id: 'mirrors-windshield',
    value: 'mirrors-windshield',
    name: 'mirrors-windshield',
    type: 'dropdown',
    label: 'Mirrors/Windshield'
  }, {
    module: 'Start Engine',
    id: 'charge-system',
    value: 'charge-system',
    name: 'charge-system',
    type: 'dropdown',
    label: 'Charge System'
  }, {
    module: 'Start Engine',
    id: 'oil-pressure',
    value: 'oil-pressure',
    name: 'oil-pressure',
    type: 'dropdown',
    label: 'Oil Pressure'
  }, {
    module: 'Start Engine',
    id: 'air-indicator',
    value: 'air-indicator',
    name: 'air-indicator',
    type: 'dropdown',
    label: 'Air Indicator'
  }, {
    module: 'Start Engine',
    id: 'brakes',
    value: 'brakes',
    name: 'brakes',
    type: 'dropdown',
    label: 'Brakes'
  }, {
    module: 'Start Engine',
    id: 'steering',
    value: 'steering',
    name: 'steering',
    type: 'dropdown',
    label: 'Steering'
  }, {
    module: 'Start Engine',
    id: 'temp-gauge',
    value: 'temp-gauge',
    name: 'temp-gauge',
    type: 'dropdown',
    label: 'Temperature Gauge'
  }, {
    module: 'Start Engine',
    id: 'transmission-level',
    value: 'transmission-level',
    name: 'transmission-level',
    type: 'dropdown',
    label: 'Transmission Level'
  }, {
    module: 'Lighting Systems',
    id: 'headlights',
    value: 'headlights',
    name: 'headlights',
    type: 'dropdown',
    label: 'Headlights'
  }, {
    module: 'Lighting Systems',
    id: 'warning-lights',
    value: 'warning-lights',
    name: 'warning-lights',
    type: 'dropdown',
    label: 'Warning Lights'
  }, {
    module: 'Lighting Systems',
    id: 'parking-lights',
    value: 'parking-lights',
    name: 'parking-lights',
    type: 'dropdown',
    label: 'Parking Lights'
  }, {
    module: 'Lighting Systems',
    id: 'air-horn-siren',
    value: 'air-horn-siren',
    name: 'air-horn-siren',
    type: 'dropdown',
    label: 'Air Horn Siren'
  }, {
    module: 'Lighting Systems',
    id: 'generators',
    value: 'generators',
    name: 'generators',
    type: 'dropdown',
    label: 'Generators'
  }];

// needs to be changed back to 'form' to show form.jade
  res.render('brushForm', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet, ruleSet2, ruleSet4, ruleSet6 //only need 'ruleSet' after ruleSet: to work w/form.jade
  });

});

module.exports = router;
