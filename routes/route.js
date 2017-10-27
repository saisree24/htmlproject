const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');
const Credentials = require('../models/credentials');
const Students = require('../models/students');
const Dashboard = require('../models/dashboard');
const HealthTips = require('../models/healthtips');
const sgMail = require('@sendgrid/mail');

function intervalFunc() {
  var tips;
  HealthTips.find((err, healthtips)=>{
    if(err){
        res.json({msg:'Failed to add Health Tips', status: false});
    }else{
      tips = healthtips;
      Students.find(function(err, response){
          if(err){
            res.json({msg: 'Something went Wrong'});
          }else{
            if(response){
              sendMail(response[0].semail, tips[0].tips[0]);
              for(var i = 0; i < response.length; i++){
                for(var j = 0; j < tips.length; j++){
                  if(response[i].shSuggest[0] == tips[j].healthIssue){
                      //sendMail(response[i].semail, tips[j].tips[0]);
                      // response[i].shIssue = response[i].shIssue + 1;
                      // Credentials.findOneAndUpdate({user:response[i].user, otp:response[i].otp}, response[i], function(err, response){
                      //     if(err){
                      //       console.log(err);
                      //     }else{
                      //       console.log(response);
                      //     }
                      // });
                  }
                }
              }
            }
          }
      });
    }
  });

}

intervalFunc();

function sendMail(mailId, tip){
  //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
  //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
  sgMail.setApiKey('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');
  console.log('mailId', mailId);
  const msg = {
      to: 'anandaraju520@gmail.com',
      from: 'nexthealthcare@gmail.com',
      subject: 'Next Health Care Tips',
      text: tip,
      html:  "<body style='font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;'>\
            <table cell-spacing='0' cell-padding='0' background='http://webappsdeveloper.net/body-bg.jpg' style='width:768px; height:576px;' align='center' valign='top' border='0'>\
            <tr>\
              <td width='20'></td>\
              <td valign='center' cell-spacing='0' cell-padding='0'>\
               <h1 style='font-size:24px; line-height:26px;'>Health Issue: Fever</h1>\
               <h3 style='margin:0; font-size:18px; line-height:24px;'>Suggestion:-</h3>\
               <p style='margin:0; font-size:16px; line-height:24px;'>"+ tip + "</p>\
               </td>\
               <td width='280'></td>\
            </tr>\
            </tr>\
          </table>\
        </body>"
  };
  sgMail.send(msg);
}

//setInterval(intervalFunc, 2000);
// send otp for new user
router.post('/sendtextmsg', (req, res, next)=>{
  // var accountSid = 'ACe48ad675aba4085a07693070b32dde9d';
  // var authToken = '2829bf82734762191f6a3e2748b06455';

  var accountSid = 'ACcac7195ab41ae66004b42911a57740f0';
  var authToken = '6164cdb010d0320af9bc89b0bdc80e96';

    //require the Twilio module and create a REST client
    var toMsg = '+91'+req.body.user;
    var otp = Math.floor(Math.random()*89999+100000) + 4;
    console.log('otp', otp);
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
          console.log('response', response);
          if(response != null){
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

// add health tips
router.post('/addhealthtip', (req,res,next)=>{
  let newHealthTips = new HealthTips(req.body);
  newHealthTips.save((err, Students)=>{
    if(err){
        res.json({msg:'Failed to add Health Tips', status: false});
    }else{
      res.json({msg:'Health Tips Added Successfully', status: true});
    }
  });
});
// health tips
router.get('/healthtips', (req,res,next)=>{
  HealthTips.find((err, healthtips)=>{
    if(err){
        res.json({msg:'Failed to add Health Tips', status: false});
    }else{
      res.json(healthtips);
    }
  });
});



module.exports = router;
