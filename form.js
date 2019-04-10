function displayProut(){

	var toto=document.getElementById('total').value;
	var priorite = document.getElementById('prio').value;
	document.getElementById("blabla").innerHTML = "<img class='prout' src='prout_car.png' alt='oupsi'/><p>Chargement ...</p>";
	var requestURL = './data.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var answer = request.response;
		inputData(answer);
	}
	function inputData(jsonObj){
		jsonObj.nbVehic = toto;
		jsonObj.nbPrio = priorite;
		console.log(jsonObj);
	}
}
