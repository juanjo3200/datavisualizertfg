// config/db.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:pepepepito@ds149865.mlab.com:49865/datavisualizer',{useMongoClient: true});
