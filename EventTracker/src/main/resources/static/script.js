/**
 * 
 */

getPlaygrounds = function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/playgrounds', true);
	console.log("in get playgrounds")
	xhr.onreadystatechange = function() {
		console.log("in get playgrounds 2")
		if (xhr.readyState === 4 && xhr.status < 400) {
			var data = JSON.parse(xhr.responseText);
			console.log("in get playgrounds 3")
			console.log(data);
			displayTables(data);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			console.log("in error")
		}
	};
	xhr.send(null);
}
window.addEventListener('load', function() {

	init();
})

var createPlayground = function() {
	console.log("in create");
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/playgrounds', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
																// request body

	xhr.onreadystatechange = function() {
		console.log("in create 3");
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				// createPlayground(data);
				console.log("meeeeow" + data)
				console.log(data);
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
	var playground = {
		name : form.name.value,
		visited : form.visited.value,
		location : form.location.value,
		// rating: 1,
		description : form.description.value
	// atmosphere : "",
	// image : ""

	};
	var userObjectJson = JSON.stringify(playground);
	xhr.send(userObjectJson)
	console.log("create")
}
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

function init() {

	console.log("here in init")

	var button = document.getElementById('create')
	button.addEventListener('click', function(e) {
		event.preventDefault();
		createPlayground();

		console.log("here in init 3")
	})
	let tableRemove;
	if(tableRemove = document.getElementById("allPlaygroundTable")){
	tableRemove.parentNode.removeChild(tableRemove)
	}
	getPlaygrounds();
	console.log("here in init 2")
}

displayTables = function(data) {
	console.log("here in display");
	let body = document.getElementsByTagName('body')[0];
	let table = document.createElement('table');
	table.id = "allPlaygroundTable";
	body.appendChild(table);

	var tableMaker = function(values, row) {

		for (var i = 0; i < values.length; i++) {
			let td = document.createElement('td');

			td.textContent = values[i];

			row.appendChild(td);
		}

	}

	for (var i = 0; i < data.length; i++) {
		let values = Object.values(data[i]);
		let row = document.createElement('tr')
		let deleteButton = document.createElement('button');
		deleteButton.appendChild(document.createTextNode('Delete'));
		deleteButton.value = values[0];
		deleteButton.innerHtml = "delete";
		deleteButton.addEventListener("click", function() {
			deletePlayground(deleteButton.value);
		});
		row.appendChild(deleteButton);
		table.appendChild(row);
		tableMaker(values, row);
	}
}
