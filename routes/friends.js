var express = require('express');
var router = express.Router();
var Friend = require('../dbModels/friendModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("getting friends:");
  Friend.find({}, function(err, Friend) {
    res.send(err || Friend);
  });

});

router.post('/', function(req, res) {
  var newFriend = new Friend(req.body);
  newFriend.save(function(err, newFriend) {
    if (err) {
      res.status(400);
      var statusMessage = err.errors[Object.keys(err.errors)[0]].message;
      statusMessage ? res.send(statusMessage) : res.send(err);
      //}
    } else {
      res.status(200).send(newFriend);
    }
  })
});


module.exports = router;


