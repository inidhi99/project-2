const withAuth = (req, res, next) => { 
  // user is not logged in, redirect to homepage
  if (!req.session.loggedIn) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;
