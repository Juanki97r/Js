let nombreUsuario ="jUan pÉreZ caZorla";

let formateo = (String)=>{
 
    return String.trim().toLowerCase().split(/\s+/).map(palabra=>palabra.charAt(0).toUpperCase()+palabra.slice(1)).join(" ")

}

console.log(formateo(nombreUsuario));