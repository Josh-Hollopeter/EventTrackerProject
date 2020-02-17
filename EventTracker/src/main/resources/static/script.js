/**
 * 
 */
// DYNAMIC Page Data 
var button = document.getElementById('create');
function init() {

	getPlaygrounds();

	button.addEventListener('click', createListener);

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
			console.log("in getPlaygrounds error")
		}
	};
	xhr.send(null);
}

 // Create Method
var createPlayground = function() {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/playgrounds', true);

	xhr.setRequestHeader("Content-type", "application/json"); 

	xhr.onreadystatechange = function() {
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

	let playground = {
		name : form.name.value,
		visited : form.visited.value,
		description : form.description.value,
		location : form.location.value
		// rating: 1,
		
	// atmosphere : "",
	// image : ""
		
	};
	let userObjectJson = JSON.stringify(playground);
	xhr.send(userObjectJson)
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
			console.log("here");
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			
		}
	};
	init();
	location.reload();
	xhr.send(null);
	return false;
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

	let playground = {
		name : form.name.value,
		visited : form.visited.value,
		
		// rating: 1,
		description : form.description.value,
		location : form.location.value
	// atmosphere : "",
	// image : ""
		
	};
	let userObjectJson = JSON.stringify(playground);
	xhr.send(userObjectJson)
	init();
}

// turns objects from js object array(data) into a viewable html table
displayTables = function(data) {
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
			row.appendChild(td);

		}

	}
	var updatePlayground = function(values){
		let tableRemove;
		if(tableRemove = document.getElementById("allPlaygroundTable")){
		tableRemove.parentNode.removeChild(tableRemove)
		}

		let formElements = document.getElementById("createPlayground");
		let updateClick = document.getElementById("create");
		let deleteClick = document.createElement('button');
		deleteClick.value = values[0];
		deleteClick.innerText = 'Delete';
		deleteClick.addEventListener("click", function() {
			console.log(values[0]);
			deletePlayground(values[0]);
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
