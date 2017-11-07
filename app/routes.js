// app/routes.js

// grab the nerd model we just created
var User = require('./models/users');

   module.exports = function(app) {

       // server routes ===========================================================
       // handle things like api calls
       // authentication routes

       // sample api route
       app.post('/signup', function (req, res) {
           var user = {
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
          };
          User.create(user, function(err, newUser) {
             if(err) return res.status(500).send("There was a problem adding the information to the database.");
             return res.status(200), send(user);
          });
       });
       app.get('/users', function (req, res) {
          User.find({}, function(err, users){
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
          });
       });
       // route to handle creating goes here (app.post)
       // route to handle delete goes here (app.delete)

       // frontend routes =========================================================
       // route to handle all angular requests
       app.get('*', function(req, res) {
           res.sendfile('./public/views/index.html'); // load our public/index.html file
       });

   };
