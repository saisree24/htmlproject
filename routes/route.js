const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Credentials = require('../models/credentials');

router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    });
});

router.get('/credentials', (req,res,next)=>{
    Credentials.find(function(err,credentials){
        res.json(credentials);
    });
});
router.post('/credential/:user', (req,res,next)=>{
    Credentials.findOne({user:req.body.user}, function(err,credentials){
        if(err){
          res.json({msg: 'No record Found'});
        }else{
          res.json(credentials);
        }
    });
});
router.post('/checkcredentials', (req,res,next)=>{
    Credentials.findOne({user:req.body.user, password:req.body.password}, function(err,credentials){
        if(err){
          res.json({msg: 'No record Found'});
        }else{
          res.json(credentials);
        }
    });
});

router.post('/credentials', (req,res,next)=>{
    let newCredentials = new Credentials({
        user: req.body.user,
        password:req.body.password
    });
    newCredentials.save((err, credentials)=>{
      if(err){
          res.json({msg:'failed to add contact'});
      }else{
        res.json({msg:'Contact added successfully'});
      }
    });
});

router.get('/sendTextMsg', (req, res, next)=>{
  var accountSid = 'ACcac7195ab41ae66004b42911a57740f0';
  var authToken = '6164cdb010d0320af9bc89b0bdc80e96';
  //require the Twilio module and create a REST client
  var otp = Math.floor(Math.random()*89999+100000) + 4;
  var client = require('twilio')(accountSid, authToken);
  client.messages.create({
      to: '+91'+req.body.user,
      from: "+12244790672",
      body: 'your otp is : '
  }, function(err) {
      console.log(err);
  });
});

router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg:'failed to add contact'});
        }else{
            res.json({msg:'Contact added successfully'});
        }
    });
});

router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = router;
