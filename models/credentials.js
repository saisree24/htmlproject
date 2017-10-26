const mongoose = require('mongoose');
const CredentialsSchema = mongoose.Schema({
  user: { type: String, required: true},
  password: { type: String, required: false},
  otp: {type: String, required: false}
});
const Credentials = module.exports = mongoose.model('Credentials', CredentialsSchema);
