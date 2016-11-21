/**
*	Modifica la classe di visibilità dell'oggetto employee.
**/
function showHide(){
	var div = document.getElementById("employee");
	if(div.className=="hidden"){
		resetForm();
		div.className="visible";
	}else{
		div.className="hidden";
	}
}

/**
*	Modifica l'attributo action del form per specificare
*	al server che si tratta di una ricerca.
*	@param form Oggetto form del DOM
**/
function searchEmployee(form){
	form.action="/search";
	checkSD(form);
}

/**
*	Modifica l'attributo action del form per specificare
*	al server che si tratta di una cancellazione.
*	@param form Oggetto form del DOM
**/
function deleteEmployee(form){
	form.action="/delete";
	checkSD(form);
}

/**
*	Modifica l'attributo action del form per specificare
*	al server che si tratta di un inserimento.
*	@param form Oggetto form del DOM.
**/
function addEmployee(form){
	form.action="/insert";
	checkInsert(form);
}

/**
*	Disabilita i campi di input della parte di form che
*	permette di fare l'inserimento in modo tale da non
*	inviare dati inutile al server.
**/
function disableInsert(){
	document.getElementById("iID").disabled=true;
	document.getElementById("iName").disabled=true;
	document.getElementById("iSurname").disabled=true;
	document.getElementById("iLevel").disabled=true;
	document.getElementById("iSalary").disabled=true;
}

/**
*	Verifica se il campo di input ID per le operazioni di
*	Search e Delete contiene qualcosa: se non è vuoto
*	viene fatto l'invio, altrimenti viene mostrato un
*	messaggio di errore.
*	@param form Oggetto form del DOM usato per fare il submit.
**/
function checkSD(form){
	if(document.getElementById("iSD").value!=""){
		disableInsert();
		form.submit();
	}else{
		alert("Search/Delete ID field is empty!!");
	}
}

/**
*	Verifica che i campi obbligatori della parte di form per
*	l'inserimento non siano vuoti; se uno di essi è vuoto
*	viene mostrato l'errore, altrimenti viene fatto l'invio.
*	@param form Oggetto form del DOM usato per fare il submit.
**/
function checkInsert(form){
	var iname = document.getElementById("iName").value;
	var isurname = document.getElementById("iSurname").value;
	var ilevel = document.getElementById("iLevel").value;
	var isalary = document.getElementById("iSalary").value;
	if(iname!="" && isurname!="" && ilevel!="" && isalary!=""){
		document.getElementById("iSD").disabled=true;
		form.submit();
	}else{
		alert("Only the ID field can be empty!!");
	}
}

/**
*	Svuota tutti i campi di input del form.
**/
function resetForm(){
	document.getElementById("iID").value="";
	document.getElementById("iName").value="";
	document.getElementById("iSurname").value="";
	document.getElementById("iLevel").value="";
	document.getElementById("iSalary").value="";
	document.getElementById("iSD").value="";
}
