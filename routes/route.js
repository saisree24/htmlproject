const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Credentials = require('../models/credentials');
const Students = require('../models/students');
const Dashboard = require('../models/dashboard');

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
          res.json({msg: 'Something Went Wrong', status: false});
        }else{
          if(credentials == null){
            res.json({msg: 'No Records found with your Credentials', status: false});
          }else{
            res.json({msg: 'Successfully Logged', status: true});
          }
        }
    });
});

// check credentials
router.post('/checkotp', (req,res,next)=>{
    Credentials.findOneAndUpdate({user:req.body.user, otp:req.body.otp}, req.body, function(err, response){
        if(err){
          res.json({msg: 'Something went wrong', status: false});
        }else{
          if(response == null){
            res.json({msg: 'successfully logged', status: true});
          }else{
            res.json({msg: 'No records found with your credentials', status: false});
          }
        }
      });
});


// add student
router.post('/addstudent', (req,res,next)=>{

  let newStudent = new Students(req.body);
  newStudent.save((err, Students)=>{
    if(err){
        res.json({msg:'Failed to add student', status: false});
    }else{
      res.json({msg:'Student Details Added Successfully', status: true});
    }
  });
});


// get student
router.post('/getstudent', (req,res,next)=>{
  Students.findOne({user:req.body.user}, function(err, response){
    if(err){
      res.json({msg: 'Something went wrong with student data.', status: false});
    }else{
      if(response != null){
          res.json(response);
      }else{
        res.json({msg: 'No student found with that details.', status: false});
      }
    }
  });
});
// update student
router.post('/updatestudent', (req,res,next)=>{
  Students.findOneAndUpdate({user:req.body.user}, req.body, function(err, response){
    if(err){
      res.json({msg: 'Something went wrong with student data.', status: false});
    }else{
      res.json({msg: 'Student Details updated successfully.', status: true});
    }
  });
});

// delete student
router.post('/deletestudent', (req,res,next)=>{
  Students.remove({user:req.body.user}, function(err, response){
    if(err){
      res.json({msg: 'Something went wrong with student id.', status: false});
    }else{
      res.json({msg: 'Student Details deleted successfully.', status: true});
    }
  });
});
// get student details
router.get('/getStudentDetails', (req,res,next)=>{
    Students.find(function(err, response){
        if(err){
          res.json({msg: 'Something went Wrong'});
        }else{
          res.json(response);
        }
    });
});


// get students health progress
router.get('/getDashboardDetails', (req,res,next)=>{
    Dashboard.find(function(err, response){
        if(err){
          res.json({msg: 'Something went Wrong'});
        }else{
          res.json(response);
        }
    });
});

// get students health progress
router.post('/storeDashboard', (req,res,next)=>{
  let newDashboard = new Dashboard({
      month: req.body.month,
      students: req.body.students
  });
  newDashboard.save(function(err, history){
      if(err){
        res.json({msg:'Failed to add student', status: false});
      }else{
        console.log('history', history);
        res.json({msg:'History Added Successfully', status: true});
      }
  });
});




module.exports = router;
