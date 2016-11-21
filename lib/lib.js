/**
*	Lista che contiene l'elenco di tutti gli employee.
**/
var employeeList=[];

/**
*	Crea un oggetto employee inizializzato.
**/
var employee = function (){
	this.id=-1;
	this.name="";
	this.surname="";
	this.level=-1;
	this.salary=-1;
}

/**
*	Verifica se l'employe passato come parametro è presente
*	nella lista: se è presente, sovrascrive i dati, se non è
*	presente aggiunge il nuovo employee alla lista.
*	@param employee Oggetto employee completo da inserire o modificare.
**/
var addemployee = function (employee){
	var index = searchemployee(employee.id);
	if(index>=0 && index<employeeList.length){
		updateemployee(index,employee);		//Aggiorna i dati
	}else{
		employeeList.push(employee);		//Aggiungi nuovo
	}
}

/**
*	Cerca l'employee con l'id passato come parametro e lo
*	cancella dalla lista.
*	@param id Int che rappresenta l'id dell'employee da eliminare.
**/
var removeemployee = function (id){
	var index = searchemployee(id);
	if(index>=0 && index<employeeList.length){
		employeeList[index]={};
	}
}

/**
*	Cerca l'employee con l'id passato come parametro all'interno
*	della lista.
*	@param id Int che rappresenta l'id dell'employee da cercare.
*	@return Indice nella lista dell'employee cercato
**/
var searchemployee = function (id){
	for(var i=0;i<employeeList.length;i++){
		if(employeeList[i].id==id){
			return i;
		}
	}
}

/**
*	Modifica i dati dell'employee in lista alla posizione specificata
*	inserendo i dati contenuto nel parametro.
*	@param index Indice nella lista dell'employee da modificare.
*	@param employee Oggetto che contiene i nuovi dati da memorizzare.
**/
var updateemployee = function (index,employee){
	employeeList[index].name=employee.name;
	employeeList[index].surname=employee.surname;
	employeeList[index].level=employee.level;
	employeeList[index].salary=employee.salary;
}

/**
*	Cerca il prossimo id disponibile per un nuovo employee.
*	@return Prossimo id disponibile nella lista.
**/
var next = function (){
	var idMax=0;
	for(var i=0;i<employeeList.length;i++){
		if(employeeList[i].id>idMax){
			idMax=employeeList[i].id;
		}
	}
	idMax++;
	return idMax;
}

/**
*	Cerca l'employee con l'id specificato dal parametro all'interno
*	della lista.
*	@return Oggetto employee cercato se è presente, oggetto vuoto altrimenti.
**/
var getemployee = function (id){
	var index = searchemployee(id);
	if(index>=0 && index<employeeList.length){
		return employeeList[index];
	}else{
		return {};
	}
}

// EXPORTS
exports.Employee = employee;
exports.addEmployee = addemployee;
exports.removeEmployee = removeemployee;
exports.getNextId = next;
exports.getEmployee = getemployee;
