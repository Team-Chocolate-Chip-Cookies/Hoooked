var exports = module.exports = {}


exports.signup = function(req,res){
  console.log("authcontroller.js - someone hit the SIGNUP route")
  console.log(res)
	// res.render('signup'); 

}

exports.signin = function(req,res){
  console.log("authcontroller.js - someone hit the SIGNIN route")
  console.log(res)
	// res.render('signin'); 

}

exports.dashboard = function(req,res){
	// res.render('dashboard'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}