// Devolver solo los dias de la semana que tengan mas de 5 caracteres

let diasDeLaSemana = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];


//asi
//let mayorQueCinco = (dias) => {return dias.length>5} 

//o asi
let mayorQueCinco = dias => dias.length>5 

console.log(diasDeLaSemana.filter(mayorQueCinco));

//o tambein en una sola linea hago el console y creo la funcion dentro del filter:

console.log(diasDeLaSemana.filter((a)=>a.length>5));
