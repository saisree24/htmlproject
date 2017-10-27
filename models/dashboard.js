const mongoose = require('mongoose');
const DashboardSchema = mongoose.Schema({
  month: { type: String, required: true},
  students: { type: Number, required: true}
});
const Dashboard = module.exports = mongoose.model('Dashboard', DashboardSchema);
