var estrellas = 0;

function add_star(){
	if(estrellas>0){
		var x = prompt("¿Cuál es el número de estrella padre?");
		var hijo = document.createElement('ul');

		hijo.id = estrellas;
		var contenido = document.createTextNode(estrellas+"✶");
		hijo.appendChild(contenido);
		document.getElementById(x).appendChild(hijo);
		estrellas = estrellas + 1;
	} else {
		var hijo = document.createElement('ul');
		hijo.id = estrellas;
		var contenido = document.createTextNode(estrellas+"✶");
		hijo.appendChild(contenido);
		document.getElementById('game').appendChild(hijo);
		estrellas = estrellas + 1;
	}
}

function del_star(){
	if(estrellas>0){
		var x = prompt("¿Cuál es el número de la estrella a borrar?");
		var hijo = document.getElementById(x);
		var padre = hijo.parentNode;
		padre.removeChild(hijo);
		estrellas = count_star();
	} else {
		alert("No se puede borrar.");
	}
}

function count_star(){
	return document.body.getElementsByTagName('ul').length-1;
}

function alertDGC(mensaje)
{
	var dgcTiempo=500
	var ventanaCS='<div class="dgcAlert"><div class="dgcVentana"><div class="dgcCerrar"></div><div class="dgcMensaje">'+mensaje+'<br><br><input id="dgcInput" class="dgcInput"></input><br><br><div class="dgcAceptar">Aceptar</div></div></div></div>';
	$('body').append(ventanaCS);
	var alVentana=$('.dgcVentana').height();
	var alNav=$(window).height();
	var supNav=$(window).scrollTop();
	$('.dgcAlert').css('height',$(document).height());
	$('.dgcVentana').css('top',((alNav-alVentana)/2+supNav-100)+'px');
	$('.dgcAlert').css('display','block');
	$('.dgcAlert').animate({opacity:1},dgcTiempo);
	$('.dgcCerrar,.dgcAceptar').click(function(e) {
		$('.dgcAlert').animate({opacity:0},dgcTiempo);
		setTimeout("$('.dgcAlert').remove()",dgcTiempo);
		rta = document.getElementById('dgcInput').value;		
	});
}