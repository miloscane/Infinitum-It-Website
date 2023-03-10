//Server
var server				=	require('express')();
var http				=	require('http').Server(server);
var httpl 				=	require('http');
var net					=	require('net');
var express				=	require('express');
var fs					=	require('fs');   
var bodyParser			=	require('body-parser');

server.set('view engine','ejs');
var viewArray	=	[__dirname+'/views'];
var viewFolder	=	fs.readdirSync('views');
for(var i=0;i<viewFolder.length;i++){
	if(viewFolder[i].split(".").length==1){
		viewArray.push(__dirname+'/'+viewFolder[i])
	}
}
server.set('views', viewArray);
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());  
server.use(bodyParser.urlencoded({ extended: true }));

//PORT Listening
http.listen(process.env.PORT || 3000, function(){
	console.log('INFINITUM IT WEBSITE');
	console.log('Server Started');
});

server.get('/',function(req,res){
	res.render('home',{});	
});

server.get('/:page',function(req,res){
	res.render(req.params.page,{});	
});

server.get('*',function(req,res){
	res.send("Not existing link :(");	
});