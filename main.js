// main.js

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
   res.send('Merhaba!');
});

app.get('/home/:name',function(req,res){
    var name = req.params.name;
    res.render('index',{
        name: name
    });
});


app.get('/:user',function(req,res){
    var user = req.params.user;
    res.send('Merhaba ' + user);
});

app.get('*',function(req,res){
    res.send('Geçersiz İstek');
});

app.listen(3000,function(){
   console.log('3000 portu dinleniyor.');
});