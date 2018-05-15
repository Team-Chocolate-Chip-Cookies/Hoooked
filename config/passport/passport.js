// Q: How do trees get on the internet?
// A: They log-in!


//load bcrypt
var bCrypt = require('bcrypt-nodejs');
console.log("Passport.js is loaded")

module.exports = function (passport, user) {
  console.log("----Setting up Authentication----")
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


  //LOCAL SIGN-UP
  passport.use('local-signup', new LocalStrategy(

    {
      usernameField: 'email',  // this property was called email but had to be changed to usernameField to use the email as a login
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, email, password, done) {
      console.log("passport.js, INSIDE SIGNUP FUNCTION!")

      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({ where: { email: email } }).then(function (user) {
        // console.log("findone in passport function")
        if (user) {
          console.log("passport.js, Hey there is ALREADY ANOTHER USER WITH THAT EMAIL!")
          return done(null, false, { message: 'That email is already taken' });
        }
        else {
          console.log("passport.js, sign-up, NEW USER CREATED!")
          var userPassword = generateHash(password);
          var data =
            {
              email: email,
              password: userPassword,
              firstname: req.body.firstname,
              lastname: req.body.lastname
            };
          User.create(data).then(function (newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              console.log("passport.js, new user data inside User.create", newUser)
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));

  //LOCAL SIGN-IN
  passport.use('local-signin', new LocalStrategy(

    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email', // changed from emailField to usernameField... had to do it for signup... probabbly need to here too
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, email, password, done) {
      console.log("passport.js, inside LOCAL SIGN IN")
      var User = user;

      var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where: { email: email } }).then(function (user) {

        if (!user) {
          console.log("passport.js, There is NO SUCH USER (email)!") // Not sure this is working
          return done(null, false, { message: 'Email does not exist' });
          
        }

        if (!isValidPassword(user.password, password)) {
          console.log("passport.js, INVALID PASSOWRD!")
          return done(null, false, { message: 'Incorrect password.' });
        }
        //Valid user functions below... I think
        console.log("passport.js, SIGN-IN : VALID USER!!!")
        var userinfo = user.get();
        console.log("passport.js, ", userinfo);
        console.log("done is", done)
        return done(null, userinfo);

      }).catch(function (err) {

        console.log("Error:", err);

        return done(null, false, { message: 'Something went wrong with your Signin' });


      });

    }
  ));

  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });


  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
      if (user) {
        done(null, user.get());
      }
      else {
        done(user.errors, null);
      }
    });

  });

}

