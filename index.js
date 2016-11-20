//express lib
var express = require('express');
//inspect
//var util = require('util');
//bind to file
var bind = require('bind');
//POST
var bodyParser = require('body-parser');


//instantiate express
var app = express();


//listen in a specific port
app.set('port', (process.env.PORT || 8848));


//create a server
app.get('/', function(request, response) 
{
	bind.toFile(
		'tpl/form.tpl',
		{},
		function(data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	);
			
	

    //get GET
    /*var url_parts = url.parse(request.url, true);
    var getVar = url_parts.query; //aggancio un nuovo attributo
	
    var text = 'GET: ' +util.inspect(getVar);

    response.end(text);
  	*/
});


app.post(bodyParser.urlencoded({ extended: false }));

/*
//use for POST
app.post('/', function(request, response) 
{
    //set the headers of the responce
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "application/json";//format response
    response.writeHead(200, headers);

	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the ontent of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		var username;
		var password;
		
		//if query is defined and not null
		if ( typeof request.body.username !== 'undefined' && request.body.username)
            //save content of username
			username = request.body.username;
		else 
			username = "not defined";
		
		if ( typeof request.body.password !== 'undefined' && request.body.password)
            //save content of password
    		password = request.body.password;
		else 
			password = "not defined";
			    	
        text = text + "post received: " + username + ", "+ password;
	}
	else
	{
		text = "body undefined";
	}

    console.log(text);
    
    //answer a JSON file
	var otherArray = ["item1", "item2"];
	var otherObject = { item1: "item1val", item2: "item2val" };
    
	var json = JSON.stringify({ 
    	anObject: otherObject, 
	    anArray: otherArray, 
    	another: "item"
	});
    
    //send JSON
    response.end(json);

});*/

app.listen('8848','127.0.0.1');

console.log("Server is running at http://127.0.0.1:8848");
