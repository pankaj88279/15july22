console.log("it okk friend")


const express = require('express');
const app = express();

app.get('/a', function(req, res){
   res.send("Hello world!");
});

app.get('/b', function(req, res){
    res.send("Hello world! B");
 });
 app.get('/c', function(req, res){
    res.send("Hello world!C");
 });
 app.get('/d', function(req, res){
    res.send("Hello world!D");
 });
 app.get('/e', function(req, res){
    res.send("Hello world!E");
 });
 app.get('/f', function(req, res){
    res.send("Hello world!F");
 });
 app.get('/g', function(req, res){
    res.send("Hello world!G");
 });

  
 app.post('/h', function(req, res){
    res.jason({
                "name":"pankaj",
                "surname":"rathore",
                 "adress":"javi",
    
 })
})
 
 

app.listen(3000);