const mongoose = require('mongoose');
const StudentsSchema = mongoose.Schema({
  sfname: { type: String, required: true},
  slname: { type: String, required: false},
  srnum: {type: Number, required: false},
  user: {type: String, required: true},
  sdob: {type: String, required: true},
  sheight: {type: Number, required: true},
  swaist: {type: Number, required: true},
  sweight: {type: Number, required: true},
  sState: {type: String, required: false},
  shIssue: { type: String, required: false},
  shSuggest: { type: Array, required: false},
  sImage: { type: String, required: false},
  sgender: { type: String, required: false},
  senum: { type: String, required: false},
  sage: { type: String, required: true},
  sbGroup: { type: String, required: true},
  snType: {type: String, required: false}
});
const Students = module.exports = mongoose.model('Students', StudentsSchema);
