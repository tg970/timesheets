const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
   prop: String,
   act: String,
   desc: String,
   time: Number,
});

module.exports = mongoose.model('TimeRec', TimeSchema)
