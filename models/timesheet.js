const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
   name: String,
   prop: String,
   act: String,
   desc: String,
   time: Number,
});

module.exports = mongoose.model('TimeRec', TimeSchema)
