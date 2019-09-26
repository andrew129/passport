var isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
  app.get('/', function(req, res) {
    if (req.user) {
      res.redirect('/members')
    }
    res.render('landing')
  })

  app.get("/users/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render('login')
  });

  app.get('/users/register', function(req, res) {
    if (req.user) {
      res.redirect('/members')
    }
    res.render('signup')
  })

  app.get('/members', isAuthenticated, function(req, res) {
    res.render('members')
  })

  app.get("*", function(req, res) {
    res.render("404");
  });
}
