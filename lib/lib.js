var employeeList=[];
var nextId=0;

var employee = function (id,name,surname,level,salary){
	this.id=id;
	this.name=name;
	this.surname=surname;
	this.level=level;
	this.salary=salary;
}

var addemployee = function (employee){
	nextId=employeeList.push(employee);
}

var removeemployee = function (id){
	var index = searchEmployee(id);
	employeeList[index]={};
}

var searchemploye = function (id){
	for(var i=0;i<employeeList.length;i++){
		if(employeeList[i].id==id){
		return i;
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

var getemployee = function (index){
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
exports.searchEmployee = searchemployee;
exports.updateEmployee = updateemployee;
exports.getNextId = next;
exports.getEmployee = getemployee;
