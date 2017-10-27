const mongoose = require('mongoose');
const HealthTipsSchema = mongoose.Schema({
  healthIssue: { type: String, required: true},
  tips: { type: Array, required: true}
});
const HealthTips = module.exports = mongoose.model('HealthTips', HealthTipsSchema);
