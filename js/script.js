//creamos una variable que almacena un numero aletorio de 1 al 6
var numero1 = Math.floor(Math.random() * 6) + 1; //1-6
//creamos una variable que contiene el nombre de la imagen
//concatenada con el numreo aleatorio y la concatenamos con el tipo
// imagen .png
var imagen1 = "images/dice"+ numero1 + ".png"; //dice1.png - dice6.png
//almacenamos en una en una variable la ruta de la imagen concatenada
//con la variable que contiene el nombre de la imagen randomDiceImage 

//crreamos otra variable y almacenomos la etiqueta que contine la imagen

//cambiamos la imagen1 con setAttribute pasando el nombre de la ruta 
//almacenada 
document.querySelectorAll("img")[0].setAttribute("src",imagen1);
//img1.setAttribute("src", ubicacionImagen);


var numeroAleatorio2 = Math.floor(Math.random()*6)+1;



var srcIamagen2 = "images/dice"+numeroAleatorio2 +".png";


 document.querySelectorAll("img")[1].setAttribute("src",srcIamagen2);

if(numero1 > numeroAleatorio2){
	 document.querySelector("h1").innerHTML = " Jugador 1 gana!";
}else if (numero1 < numeroAleatorio2) {
	document.querySelector("h1").innerHTML = " Jugador 2 gana!";
}else {
	document.querySelector("h1").innerHTML = " Empate de Maricas";
}


