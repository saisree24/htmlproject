const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Credentials = require('../models/credentials');
const Students = require('../models/students');

// send otp for new user
router.post('/sendtextmsg', (req, res, next)=>{
  // var accountSid = 'ACe48ad675aba4085a07693070b32dde9d';
  // var authToken = '2829bf82734762191f6a3e2748b06455';

  var accountSid = 'ACcac7195ab41ae66004b42911a57740f0';
  var authToken = '6164cdb010d0320af9bc89b0bdc80e96';

    //require the Twilio module and create a REST client
    var toMsg = '+91'+req.body.user;
    var otp = Math.floor(Math.random()*89999+100000) + 4;
    var client = require('twilio')(accountSid, authToken);
    var isNewUser = false;
    Credentials.findOne({user:req.body.user}, function(err,response){
        if(err){
          res.json({msg: 'Some Network Error', status: false});
        }else{
          if(response && response.user){
            res.json({msg: 'You are Already existing user!', status: false});
          }else{
            client.messages.create({
                to: toMsg,
                from: "+12244790672",
                // from: "+14158554299",
                body: 'Your Next Health Care varification code(OTP) is: '+ otp
            });
            let newCredentials = new Credentials({
                user: req.body.user,
                password: null,
                otp: otp
            });
            newCredentials.save((err, credentials)=>{
              if(err){
                  res.json({msg:'Failed to add credentials', status: false});
              }else{
                res.json({msg:'Credentials added successfully', status: true});
              }
            });
          }
        }
    });

});

// check credentials with otp and store credentials
router.post('/checkcredentials', (req,res,next)=>{
    Credentials.findOne({user:req.body.user, password:req.body.password}, function(err,credentials){
        if(err){
          res.json({msg: 'No record Found', status: false});
        }else{
          res.json({msg: 'successfully logged', status: true});
        }
    });
});

// check credentials
router.post('/checkotp', (req,res,next)=>{
    Credentials.findOneAndUpdate({user:req.body.user, otp:req.body.otp}, req.body, function(err, response){
        if(err){
          res.json({msg: 'No record Found', status: true});
        }else{
          res.json({msg: 'successfully logged', status: true});
        }
      });
});


router.post('/studentDetails', (req,res,next)=>{
  let newStudent = new Students({
      user: req.body.user,
      password: null,
      otp: otp
  });
  newCredentials.save((err, credentials)=>{
    if(err){
        res.json({msg:'Failed to add credentials'});
    }else{
      res.json({msg:'Credentials added successfully'});
    }
  });
});


router.post('/getStudentDetails', (req,res,next)=>{
    Students.findOne({sfname:req.body.sfname, sdob:req.body.sdob, srnum: req.body.srnum}, function(err, response){
        if(err){
          res.json({msg: 'No record Found'});
        }else{
          res.json(response);
        }
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

module.exports = router;
