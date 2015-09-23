/**
 * Created by HUQ on 9/22/15.
 */
'use strict';

var Mongoose = require('mongoose');

var familyScheme = Mongoose.Schema({
  name: {type: String, required: true},
  members: [{type: Mongoose.Schema.ObjectId, ref: "Friend"}]
});

var Family = Mongoose.model('Family', familyScheme);
module.exports = Family;



Family.find({}).populate('members').exec(function (err, families) {

});


//Family.find({}, function(err, families) {
//
//}).populate('members');

Family.findById({animalId}, function(err, family) {
  Friend.findById({animalId}, function(err, friend) {
    family.members.push(friend._id);
    friend.isAvailable = false;
    family.save(function(err, savedFamily){
      friend.save(function(err, savedPet) {
        res.send();
      })
    })
  })
});