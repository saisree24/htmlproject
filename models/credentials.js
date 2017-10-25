const mongoose = require('mongoose');
const CredentialsSchema = mongoose.Schema({
  user: { type: String, required: true },
  password: { type: String, required: true }
});
const Credentials = module.exports = mongoose.model('Credentials',CredentialsSchema);
