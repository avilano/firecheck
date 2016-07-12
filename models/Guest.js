const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  guest: [{
    name: String,
    message: String,
  }],
});

module.exports = mongoose.model('Guest', GuestSchema);
