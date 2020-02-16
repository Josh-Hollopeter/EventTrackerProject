/**
 * 
 */
// DYNAMIC Page Data 
var button = document.getElementById('create');
function init() {

	console.log("here in init")

	getPlaygrounds();

	button.addEventListener('click', createListener);

		console.log("here in init 3")
	
	
	console.log("here in init 2")
}

var createListener =function(e) {
	event.preventDefault();
	createPlayground();
	button.removeEventListener('click', createListener);
	button.addEventListener('click', createListener);
	getPlaygrounds();
	}

// PAGE LOAD
window.addEventListener('load', function() {
	
	init();
})
// Get Method
getPlaygrounds = function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/playgrounds', true);
	console.log("in get playgrounds")
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var data = JSON.parse(xhr.responseText);
			let body = document.getElementsByTagName('body')[0];
			let div = document.createElement('div');
			div.textContent = "Total number of playgrounds available is: " + data.length;
			body.appendChild(div);
			displayTables(data);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			console.log("in error")
		}
	};
	xhr.send(null);
}

 // Create Method
var createPlayground = function() {
	console.log("in create");
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/playgrounds', true);

	xhr.setRequestHeader("Content-type", "application/json"); 

	xhr.onreadystatechange = function() {
		console.log("in create 3");
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { 
				var data = JSON.parse(xhr.responseText);
				
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}

	};
	let form = document.createPlayground;
	console.log(form.name.value);
	console.log(form.visited.value);

	console.log(form.description.value);
	let playground = {
		name : form.name.value,
		visited : form.visited.value,
		description : form.description.value,
		location : form.location.value
		// rating: 1,
		
	// atmosphere : "",
	// image : ""
		
	};
	console.log("here in create");
	let userObjectJson = JSON.stringify(playground);
	xhr.send(userObjectJson)
	console.log("here in end of create");
	init();
	location.reload();
	return false;
}
// DELETE METHOD
function deletePlayground(id) {
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/playgrounds/' + id , true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			init();
			
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			
		}
	};

	xhr.send(null);
}
// UPDATE METHOD
function updatePlaygroundPUT(id){
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/playgrounds/' + id , true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var playground = JSON.parse(xhr.responseText);
			playground;
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			
		
		}
	};
	let form = document.createPlayground;
	console.log(form.name.value);
	console.log(form.visited.value);

	console.log(form.description.value);
	let playground = {
		name : form.name.value,
		visited : form.visited.value,
		
		// rating: 1,
		description : form.description.value,
		location : form.location.value
	// atmosphere : "",
	// image : ""
		
	};
	console.log("here in update");
	let userObjectJson = JSON.stringify(playground);
	xhr.send(userObjectJson)
	console.log("here in end of update");
	init();
}

// turns objects from js object array(data) into a viewable html table
displayTables = function(data) {
	console.log("here in display");
	let tableRemove;
	if(tableRemove = document.getElementById("allPlaygroundTable")){
	tableRemove.parentNode.removeChild(tableRemove)
	}
	let body = document.getElementsByTagName('body')[0];
	let table = document.createElement('table');
	table.id = "allPlaygroundTable";
	body.appendChild(table);
	let thRow = document.createElement('tr');
	let th = document.createElement('th');
	
	th.textContent = "id";
	thRow.append(th);
	th = document.createElement('th');
	th.textContent = "name";
	thRow.append(th);
	th = document.createElement('th');
	th.textContent = "visited";
	thRow.append(th);
	th = document.createElement('th');
	th.textContent = "location";
	thRow.append(th);
	th = document.createElement('th');
	th.textContent = "description";
	thRow.append(th);
	table.append(thRow);
	table.style.tableLayout = "fixed";

	var tableMaker = function(values, row) {
		

		for (var i = 0; i < values.length; i++) {
			let td = document.createElement('td');

			td.textContent = values[i];
			console.log(values[i])
			row.appendChild(td);

		}

	}
	var updatePlayground = function(values){
		let tableRemove;
		if(tableRemove = document.getElementById("allPlaygroundTable")){
		tableRemove.parentNode.removeChild(tableRemove)
		}

		console.log("inupdate" + values[2]);
		let formElements = document.getElementById("createPlayground");
		let updateClick = document.getElementById("create");
		let deleteClick = document.createElement('button');
		deleteClick.value = values[0];
		deleteClick.innerText = 'Delete';
		deleteClick.addEventListener("click", function() {
			deletePlayground(deleteClick.value);
		});
		formElements.appendChild(deleteClick);
		updateClick.innerText = 'Update';
		updateClick.removeEventListener('click',createListener);
		updateClick.addEventListener('click', function(){
			updatePlaygroundPUT(values[0]);
		});

		formElements.name.value = values[1];
		formElements.visited.value = values[2];
		formElements.description.value = values[5];
		formElements.location.value = values[3];
		
		
	}
// Iterates through js object array from get method
	for (var i = 0; i < data.length; i++) {
		let values = Object.values(data[i]);
		let row = document.createElement('tr')

		row.addEventListener("click",function(){
			updatePlayground(values);
		},false);

		table.appendChild(row);
		tableMaker(values, row);
	}
	
}
