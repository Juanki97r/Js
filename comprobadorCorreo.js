let correo_valido ="juanki97r@gmail.com";
let correo_valido2 ="juanki97r@gmail.es";

let correo_invalido1="pedro@pedro@gmail.com";
let correo_invalido2="pedropedro@gmailcom";


let correoEsValido= (correo)=> correo.split("@").length ===2 && (correo.slice(-4) ===".com" || correo.slice(-3)===".es") && !correo.includes(" ");


console.log(correoEsValido(correo_valido));
console.log(correoEsValido(correo_valido2));
console.log(correoEsValido(correo_invalido1));
console.log(correoEsValido(correo_invalido2));