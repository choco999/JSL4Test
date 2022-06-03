// import express and create a router object
const express = require('express')
const router = express.Router();

// configure routes
// routes are already registered to a specific route
// intention is to register this object to '/about'

// GET to /About/
router.get('/', (req, res, next) => {
  // tell express to render an hbs view template
  res.render('about', 
  {
    title: "Project",
    email: "contact@company.com"
  });
});

// export the router object
module.exports = router;