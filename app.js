//include Node modules
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bank');
var userDB=require('./public/js/userDB')

var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// serve static file (index.html, images, css)
app.use(express.static(__dirname + '/public'));

//server routers

//获取用户信息
app.post('/api/userinfo',(req,res)=>{
   res.json(userDB.findUserInfoById(req.userId));

})

//存款或购买理财产品
app.post('/api/deposit',(req,res)=>{
   var userId = req.userId;
   var method = req.method; //方式：活期，定期，理财产品
   var amount = req.amount;
   userDB.deposit(userId,method,amount);
   res.json(userDB.findUserInfoById(req.userId));

})

//取款,由于只能取活期存款，所以不需要标明方式
app.post('/api/withdrawal',(req,res)=>{
   var userId = req.userId;
   var amount = req.amount;
   userDB.withdrawal(userId,amount);
   res.json(userDB.findUserInfoById(req.userId));

})
// listen on port 3000
var port = process.env.PORT || 3000 ;
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
