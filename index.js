// var express  = require('express');
// var request = require('request');
// var bodyParser = require("body-parser");
// var logger = require('morgan');
var moment = require('moment');
// var mongoose = require('mongoose');
// var routes = require("./app/routes/routes");

//connect to mongo using mongoose

// let databaseConfig = require('./app/config/database');

// mongoose.connect(databaseConfig.url,{useNewUrlParser: true});

let ApiHelpers = require('./ApiHelpers')

// var app      = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger('dev'));


/*
// confirmation url
app.all("/confirmation",(req,res)=>{
    console.log("confirmed")
})

// validation url
app.all("/validation",(req,res)=>{
    console.log("validated")
})

// timeout url
app.all("/timeout",(req,res)=>{
    console.log("timeout")
})

// result url
app.all("/result",(req,res)=>{
    console.log("result :",res)
    // res.json()
})
*/


ApiHelpers.genOAuth().then(body => {  
    console.log("GEN OAUTH BODY:",body)  
    let _body = JSON.parse(body);
    let oauth_token = _body.access_token;
    let auth = "Bearer " + oauth_token;

    console.log("auth:",auth)
    /*
    ApiHelpers.registerURL(auth).then(body => {
        console.log(body)
    })
    */
    /*
    ApiHelpers.simulateC2B(auth).then(body => {
        console.log(body)
    })
    */
    /*
    ApiHelpers.accountBalance(auth).then(body => {
        console.log(body)
    }).catch(error => {
        console.log("Error :",error)
    })
    */
    
    /*
    ApiHelpers.transactionStatus(auth).then(body => {
        console.log(body)
    })
    */
    
    ApiHelpers.lipaNaMpesa(auth).then(body => {
        console.log("inside lipa na mpesa")
        console.log("Body :",body)
    }).catch(error => {
        console.log("Error :",error)
        // console.log("Error")
    })
    
    
    /*
    ApiHelpers.lipaNaMpesaQuery(auth).then(body => {
        console.log("Body :",body)
    }).catch(error => {
        console.log("Error :",error)
    })   
    */
})

// const PORT = process.env.PORT || 4000;

// app.listen(PORT,()=>console.log(`Live on ${PORT}: Timestamp : ${moment(new Date(Date.now())).format("YYYYMMDDHHmmss")}`));

// routes(app);