const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
   name: String,
   prop: String,
   act: String,
   desc: String,
   time: Number,
   //user db id
   // total charge
});

module.exports = mongoose.model('TimeRec', TimeSchema)
