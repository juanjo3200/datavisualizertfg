// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema= new Schema({
  name : String,
  email: {type: String, index:true, unique: true, required: true },
  password: {type: String, required: true},
  token: String
})

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', UserSchema);
