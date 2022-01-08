const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSVPSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const RSVPModel = mongoose.model('rsvp', RSVPSchema);

module.exports = RSVPModel;
