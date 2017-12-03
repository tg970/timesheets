const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
   username: String,
   password: String,
   name: String,
   admin: Boolean,
   super: Boolean,
});

module.exports = mongoose.model('UsersSchema', UsersSchema)
