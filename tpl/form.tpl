<!DOCTYPE html>
<html>
	<head>
		<title>Employee Manager</title>
		<meta charset="UTF-8">
		<!--
		<script type="text/javascript" scr="script/script.js"></script>
		<link rel="stylesheet" href="style.css">
		-->
	</head>
	<body>
		<h3>Employee Manager</h3>
		<hr>
		<form action="/" method="POST">
			<label for="iSD">Search/Delete by ID</label>
			<input type="number" id="iSDID" name="iSD" placeholder="Insert an ID">
			<input type="button" onclick="" value="Search">
			<input type="button" onclick="" value="Delete">
			<input type="reset" value="Reset">
			<hr>
			<input type="button" onclick="" value="Show/Hide employee">
			<br>
			<div id="employee" (:if[finded] ~ [:then ~ class="visible":][:else ~ class="hidden":]:)>
				<br>
				<label for="iID">Employee ID</label><br>
				<input type="number" id="iID" name="iID" placeholder="Insert an ID" value="(:id:)"><br>
				<label for="iName">Name</label><br>
				<input type="text" id="iName" name="iName" placeholder="Insert name" value="(:name:)"></br>
				<label for="iSurname">Surname</label><br>
				<input type="text" id="iSurname" name="iSurname" placeholder="Insert surname" value="(:surname:)"></br>
				<label for="iLevel">Level</label><br>
				<input type="number" id="iLevel" name="iLevel" placeholder="Insert a Level" value="(:level:)"><br>
				<label for="iSalary">Salary</label><br>
				<input type="text" id="iSalary" name="iSalary" placeholder="Insert a salary" value="(:salary:)"><br>
				<input type="button" onclick="" value="Send data">
				<input type="reset" value="Reset">
			</div>
		</form>
	</body>
</html>
