function showHide(){
	var div = document.getElementById("employee");
	if(div.className=="hidden"){
		div.className="visible";
	}else{
		div.className="hidden";
	}
}

function searchEmployee(form){
	form.action="/search";
	checkSD(form);
}

function deleteEmployee(form){
	form.action="/delete";
	checkSD(form);
}

function addEmployee(form){
	form.action="/insert";
	checkInsert(form);
}

function disableInsert(){
	document.getElementById("iID").disabled=true;
	document.getElementById("iName").disabled=true;
	document.getElementById("iSurname").disabled=true;
	document.getElementById("iLevel").disabled=true;
	document.getElementById("iSalary").disabled=true;
}

function checkSD(form){
	if(document.getElementById("iSD").value!=""){
		disableInsert();
		form.submit();
	}else{
		alert("Search/Delete ID field is empty!!");
	}
}

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
