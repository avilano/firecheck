const express = require('express');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Equipment - Weekly Report Login'
  });
});
router.get('/splash', function(req, res, next) {
  res.render('splash', {
    title: 'Equipment - Weekly Report'
  });
});
// Hanlde POST
router.post('/', function (req, res) {
  res.redirect('/splash');
});
router.post('/splash', function (req, res) {
    if (req.body.vechiclePicker == 'truck') {
      console.log('user selected truck');
      res.redirect('/truck');
    }
    else if (req.body.vechiclePicker == 'brush') {
      console.log('user selected brush');
      res.redirect('/brush');
    }
    else if (req.body.vechiclePicker == 'rescue') {
      console.log('user selected rescue');
      res.redirect('/rescue');
    }
});
router.post('/brush', function(req, res, next) {
  res.render('submitted', {
  });
});
router.post('/truck', function(req, res, next) {
  res.render('submitted', {
  });
});
router.post('/rescue', function(req, res, next) {
  res.render('submitted', {
  });
});

module.exports = router;
