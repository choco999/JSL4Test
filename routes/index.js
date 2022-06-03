var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// option1
// router.get('/about', (req, res, next) => {
//   // tell express to render an hbs view template
//   res.render('about', 
//   {
//     title: "Project",
//     email: "contact@company.com"
//   });
// });

module.exports = router;
