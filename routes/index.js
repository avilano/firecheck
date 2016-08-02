const express = require('express');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Equipment - Weekly Report Login'
  });
});
router.post('/', function (req, res) {
  res.redirect('/splash');
});

router.get('/splash', function(req, res, next) {
  res.render('splash', {
    title: 'Equipment - Weekly Report'
  });
});
// Hanlde POST
router.post('/splash', function (req, res) {

    if (req.body.vechiclePicker == 'truck') {
      console.log('its a truck!');
      res.redirect('/truck');
    }
    if (req.body.vechiclePicker == 'brush') {
      console.log('its a brush!');
      res.redirect('/brush');
    }
    if (req.body.vechiclePicker == 'rescue') {
      console.log('its a rescue!');
      res.redirect('/rescue');
    }
});
module.exports = router;
