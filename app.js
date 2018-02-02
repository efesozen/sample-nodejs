// app.js

var http = require('http');

var app = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<b>Hello</b> World!');
    res.end();
});

app.listen(3000,function(){
   console.log('3000 portu dinleniyor');
});