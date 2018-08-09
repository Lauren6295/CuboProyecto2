function rotar_1(event){
	let cubo = document.getElementById("cubo");
	cubo.style.transform = "rotateY(-"+0+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
	
	let enlaces = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
	for(i=0; i<enlaces.length; i++){
		enlaces[i].className = enlaces[i].className.replace("activo", "defecto");
	}
	
	event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
}
function rotar_2(event){
	let cubo = document.getElementById("cubo");
	cubo.style.transform = "rotateY(-"+90+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
	
	let enlaces = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
	for(i=0; i<enlaces.length; i++){
		enlaces[i].className = enlaces[i].className.replace("activo", "defecto");
	}
	
	event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
}
function rotar_3(event){
	let cubo = document.getElementById("cubo");
	cubo.style.transform = "rotateY(-"+180+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
	
	let enlaces = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
	for(i=0; i<enlaces.length; i++){
		enlaces[i].className = enlaces[i].className.replace("activo", "defecto");
	}
	
	event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
}
function rotar_4(event){
	let cubo = document.getElementById("cubo");
	cubo.style.transform = "rotateY(-"+270+"deg)"; /*CSS por defecto rota en direccion a las manecillas de reloj, por eso se le agrega el "-" para que rote al contrario*/
	
	let enlaces = document.getElementsByTagName("a"); /*se genera un array con todos los enlaces */
	for(i=0; i<enlaces.length; i++){
		enlaces[i].className = enlaces[i].className.replace("activo", "defecto");
	}
	
	event.target.className = "activo";  /*objeto que desencadena el evento, el objeto event se agrega como parametro en todas las llamadas de la funcion en HTML*/
}

let button=document.getElementsByClassName('button');
button[0].addEventListener ('click', rotar_1);
button[1].addEventListener ('click', rotar_2);
button[2].addEventListener ('click', rotar_3);
button[3].addEventListener ('click', rotar_4);











