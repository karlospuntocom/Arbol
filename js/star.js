var estrellas = 10;

function add_star(){
	if(estrellas>10){
		var x = prompt("Cuál es el id del padre?");
		var hijo = document.createElement('li');
		hijo.id = estrellas;
		var contenido = document.createTextNode(estrellas+"✶");
		hijo.appendChild(contenido);
		document.getElementById(x).appendChild(hijo);
		estrellas = estrellas + 10;
	} else {
		var hijo = document.createElement('li');
		hijo.id = estrellas;
		var contenido = document.createTextNode(estrellas+"✶");
		hijo.appendChild(contenido);
		document.getElementById('game').appendChild(hijo);
		estrellas = estrellas + 10;
	}
}

function del_star(){
	if(estrellas>10){
		var x = prompt("Número de la estrella a borrar?");
		var hijo = document.createElement('li');
		hijo.id = estrellas;
		var contenido = document.createTextNode(estrellas+"");
		hijo.appendChild(contenido);
		document.getElementById(x).appendChild(hijo);
		estrellas = estrellas + 1;
	} else {
		alert("No se puede borrar.");
	}
}