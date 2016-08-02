const express = require('express');
const router = express.Router();

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
  },{
    module: 'Start Engine',
    id: 'flashlights',
    value: 'flashlights',
    name: 'flashlights',
    type: 'dropdown',
    label: 'Flashlights: '
  },{
    module: 'Start Engine',
    id: 'interior-inspections',
    value: 'interior-inspections',
    name: 'interior-inspections',
    type: 'dropdown',
    label: 'Interior Inspections: '
  },{
    module: 'Start Engine',
    id: 'mirrors-windshield',
    value: 'mirrors-windshield',
    name: 'mirrors-windshield',
    type: 'dropdown',
    label: 'Mirrors Windshield: '
  },{
    module: 'Start Engine',
    id: 'charging-system',
    value: 'charging-system',
    name: 'charging-system',
    type: 'dropdown',
    label: 'Charging System: '
  },{
    module: 'Start Engine',
    id: 'oil-pressure',
    value: 'oil-pressure',
    name: 'oil-pressure',
    type: 'dropdown',
    label: 'Oil Pressure: '
  },{
    module: 'Start Engine',
    id: 'air-indicator',
    value: 'air-indicator',
    name: 'air-indicator',
    type: 'dropdown',
    label: 'Air Indicator: '
  },{
    module: 'Inside Of Cab', /////////////////
    id: 'flashlights',
    value: 'flashlights',
    name: 'flashlights',
    type: 'dropdown',
    label: 'Flashlights: '
  }];

  res.render('truckForm', {
    title: ':UnitNum Form:',
    ruleSet: ruleSet
  });
});
module.exports = router;
