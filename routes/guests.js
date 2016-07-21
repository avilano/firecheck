const express = require('express');
const router = express.Router();
// Database schema
const Guest = require('../models/Guest.js');

router.get('/', function(req, res, next){
  Guest.find(function(err, docs){
    res.render('guests/index', { guests: docs });
  });
});

router.post('/', function(req, res, next){
  let guest = new Guest({
    guest: [{
      name: req.body.name,
      message: req.body.message,
    }],
  });
  guest.save(function(err){
    if (err) res.send('error ' + err);
    else res.redirect('/guests');
  });
});

module.exports = router;
