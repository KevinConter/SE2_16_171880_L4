var employeeList=[];
var nextId=0;

var employee = function (){
	this.id=-1;
	this.name="";
	this.surname="";
	this.level=-1;
	this.salary=-1;
}

var addemployee = function (employee){
	var index = searchemployee(employee.id);
	if(index>=0 && index<employeeList.length){
		updateemployee(index,employee);
	}else{
		nextId=employeeList.push(employee);
	}
}

var removeemployee = function (id){
	var index = searchemployee(id);
	if(index>=0 && index<employeeList.length){
		employeeList[index]={};
	}
}

var searchemployee = function (id){
	for(var i=0;i<employeeList.length;i++){
		if(employeeList[i].id==id){
			return i;
		}
	}
}

var updateemployee = function (index,employee){
	employeeList[index].name=employee.name;
	employeeList[index].surname=employee.surname;
	employeeList[index].level=employee.level;
	employeeList[index].salary=employee.salary;
}

var next = function (){
	return nextId;
}

var getemployee = function (id){
	var index = searchemployee(id)
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
