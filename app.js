//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

const domain_url = '13.126.121.9:27017';
// const domain_url = 'http://192.168.33.168:3000';
//const domain_url = 'localhost:27017';

const database_name = 'local';

const db_link = 'mongodb://'+ domain_url+'/'+database_name;

//connect to mongoDB
mongoose.connect(db_link);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    console.log('Error in database Connection:'+err);
});

//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

// testing server
app.get('/',(req,res)=>{
    res.send('footer');
});
app.listen(port,()=>{
    console.log('server started at port:'+port);
});
