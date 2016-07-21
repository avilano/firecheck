const express = require('express');
const router = express.Router();

// GET users listing
router.get('/', function(req, res, next) {
  res.send('Goto guests');
});

module.exports = router;
