//express lib
var express = require('express');
//inspect
//var util = require('util');
//bind to file
var bind = require('bind');
//POST
var bodyParser = require('body-parser');
//Aggiunta libreria
var myLib = require('./lib/lib.js');


//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 8848));
//set the server to respond to a file request
app.use('/files',express.static(__dirname+'/public'));


//Server Manager
//use for GET requests
app.get('/', function(request, response) 
{
	bind.toFile(
		'tpl/form.tpl',
		{
			finded: false
		},
		function(data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	);
});


app.use(bodyParser.urlencoded({ extended: false }));

//use for POST requests of delete
app.post('/delete', function(request, response){
	if(typeof request.body !== 'undefined' && request.body){
		if(typeof request.body.iSD !== 'undefined' && request.body.iSD){
			var idEmployee = parseInt(request.body.iSD);
			myLib.removeEmployee(idEmployee);
		}else{
			console.log("iSD field not defined");
		}
	}else{
		console.log("Request body not defined");
	}

	bind.toFile(
		'tpl/form.tpl',
		{
			finded: false
		},
		function(data){
			response.writeHead(200,{'Content-Type':'text/html'});
			reponse.end(data);
		}
	);
});

app.post('/search',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
		if(typeof request.body.iSD !== 'undefined' && request.body.iSD){
			var idEmployee = parseInt(request.body.iSD);
			var employee = myLib.getEmployee(idEmployee);
			if(employee=={}){
				bind.toFile(
					'tpl/form.tpl',
					{
						finded: true
					},
					function(data){
						response.writeHead(200,{'Content-Type':'text/html'});
						response.end(data);
					}
				);
			}else{
				bind.toFile(
					'tpl/form.tpl',
					{
						finded: true,
						id: employee.id,
						name: employee.name,
						surname: employee.surname,
						level: employee.level,
						salary: employee.salary
					},
					function(data){
						response.writeHead(200,{'Content-Type':'text/html'});
						response.end(data);
					}
				);
			}
		}else{
			console.log("iSD field not defined");
		}
	}else{
		console.log("Request body not defined");
	}
});

app.post('/insert',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
		var employee = new myLib.Employee();
		var error = false;
		if(typeof request.body.iID !== 'undefined' && request.body.iID){
			var id = request.body.iID;
			if(id==""){
				employee.id=myLib.getNextId();
			}else{
				employee.id=parseInt(id);
			}
		}
		else{
			error = true;
		}
		if(typeof request.body.iName !== 'undefined' && request.body.iName){
			employee.name=request.body.iName;
		else{
			error = true;
		}
		if(typeof request.body.iSurname !== 'undefined' && request.body.iSurname){
			employee.surname=request.body.iSurname;
		}else{
			error = true;
		}
		if(typeof request.body.level !== 'undefined' && request.body.level){
			employee.level=parseInt(request.body.level);
		}else{
			error = true;
		}
		if(typeof request.body.salary !== 'undefined' && request.body.salary){
			employee.salary=parseInt(request.body.salary);
		}else{
			error = true;
		}
		if(error){
			response.writeHead(409);
			response.end("Incorrect data sent with the request");
		}else{
			myLib.addEmployee(employee);
			bind.toFile(
				'tpl/form.tpl',
				{
					finded: false
				},
				function(data){
					response.writeHead(200,{'Content-Type':'text/html'});
					reponse.end(data);
				}
			);
		}	
	}else{
		console.log("Request body not defined");
	}
});

app.listen('8848','127.0.0.1');

console.log("Server is running at http://127.0.0.1:8848");
