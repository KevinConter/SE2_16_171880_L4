/************* LIBRARIES ***********/
//express lib
var express = require('express');
//bind to file
var bind = require('bind');
//POST
var bodyParser = require('body-parser');
//Aggiunta libreria funzioni per gli oggetti employee
var myLib = require('./lib/lib.js');
/************************************/

//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 8848));

//set the server to respond to a file request
app.use('/files',express.static(__dirname+'/public'));

//set Body-parser on the requests
app.use(bodyParser.urlencoded({ extended: false }));


//Server Manager
//use for GET requests
app.get('/', function(request, response) {
	bind.toFile(	//Binding al file template
		'tpl/form.tpl',
		{
			open: false		//imposta il form come nascosto
		},
		function(data){		//invio della risposta al client
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	);
});

//use for POST requests of delete
app.post('/delete', function(request, response){
	if(typeof request.body !== 'undefined' && request.body){
		if(typeof request.body.iSD !== 'undefined' && request.body.iSD){
			var idEmployee = parseInt(request.body.iSD);
			myLib.removeEmployee(idEmployee);		//rimozione dell'employee dal sistema
		}else{
			console.log("iSD field not defined");
		}
	}else{
		console.log("Request body not defined");
	}

	bind.toFile(	//Binding al file template
		'tpl/form.tpl',
		{
			open: false		//imposta il form come nascosto
		},
		function(data){		//invio della risposta al client
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		}
	);
});
//use for POST requests of search
app.post('/search',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
		if(typeof request.body.iSD !== 'undefined' && request.body.iSD){
			var idEmployee = parseInt(request.body.iSD);
			var employee = myLib.getEmployee(idEmployee);	//Cerca l'employee con l'id ottenuto dal form
			if(employee=={}){	//Se non esiste
				bind.toFile(	//Binding al file template
					'tpl/form.tpl',
					{
						open: true		//imposta il form come visibile
					},
					function(data){		//invio della risposta al client
						response.writeHead(200,{'Content-Type':'text/html'});
						response.end(data);
					}
				);
			}else{		//Se esiste
				bind.toFile(	//Binding al file template
					'tpl/form.tpl',
					{
						open: true,		//imposta il form come visibile
						id: employee.id,	//inserisce i vari dati per compilare il template
						name: employee.name,
						surname: employee.surname,
						level: employee.level,
						salary: employee.salary
					},
					function(data){		//invio della risposta al client
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

//use for POST requests of insert
app.post('/insert',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
		var employee = new myLib.Employee();	//Crea un oggetto employee inizializzato
		var error = false;
		if(typeof request.body.iID !== 'undefined' && request.body.iID){
			var id = request.body.iID;
			if(id==""){		//Se il campo è stato inviato dal browser ma l'utente non aveva inserito niente
				employee.id=myLib.getNextId();		//Imposta come id il prossimo in lista
			}else{
				employee.id=parseInt(id);		//Imposta l'id dato dal client
			}
		}else{		//Se il browser non ha inviato il campo perchè era vuoto (dipende dal browser)
			employee.id=myLib.getNextId();		//Imposta come id il prossimo in lista
		}
		if(typeof request.body.iName !== 'undefined' && request.body.iName){
			employee.name=request.body.iName;	//Imposta il nome ricevuto
		}else{
			error = true;
		}
		if(typeof request.body.iSurname !== 'undefined' && request.body.iSurname){
			employee.surname=request.body.iSurname;		//Imposta il cognome ricevuto
		}else{
			error = true;
		}
		if(typeof request.body.iLevel !== 'undefined' && request.body.iLevel){
			employee.level=parseInt(request.body.iLevel);	//Imposta il livello ricevuto
		}else{
			error = true;
		}
		if(typeof request.body.iSalary !== 'undefined' && request.body.iSalary){
			employee.salary=parseInt(request.body.iSalary);		//Imposta il salario ricevuto
		}else{
			error = true;
		}
		if(error){		//Se uno dei campi non è stato ricevuto
			response.writeHead(409,{});
			response.end("Incorrect data sent with the request");
		}else{
			myLib.addEmployee(employee);		//Aggiunta dell'employee alla lista
			bind.toFile(	//Binding al file template
				'tpl/form.tpl',
				{
					open: false		//imposta il form come nascosto
				},
				function(data){		//invio della risposta al client
					response.writeHead(200,{'Content-Type':'text/html'});
					response.end(data);
				}
			);
		}	
	}else{
		console.log("Request body not defined");
	}
});

//Set the server to listen on a specific port
app.listen('8848','127.0.0.1');

console.log("Server is running at http://127.0.0.1:8848");
