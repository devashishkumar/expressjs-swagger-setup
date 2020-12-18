var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send([{
    "id": 1,
    "firstname": "first name",
    "lastname": "last name"
  },{
    "id": 1,
    "firstname": "first name 2",
    "lastname": "last name 2"
  }]);
});

router.post('/user', function(req, res, next) {
  res.send(req.body);
});

router.put('/user/:id', function(req, res, next) {
  var userData = req.body;
  userData.param = req.params.id;
  res.send(userData);
});

router.delete('/user/:id', function(req, res, next) {
  res.send({"message": "There is some error. Please try again later"}).status(404);
});

module.exports = router;
