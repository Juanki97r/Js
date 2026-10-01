const XUNGOS = [
  "Arnold Schwarzenegger",
  "Bruce Lee",
  "Bruce Willis",
  "Chuck Norris",
  "Cliff Curtis",
  "Clint Eastwood",
  "Colin Farrell",
  "Daniel Craig",
  "Danny Trejo",
  "Dave Bautista",
  "Denzel Washington",
  "Dolph Lundgren",
  "Donnie Yen",
  "Dwayne Johnson",
  "Frank Grillo",
  "Gary Daniels",
  "Gerard Butler",
  "Harrison Ford",
  "Hiroyuki Sanada",
  "Iko Uwais",
  "Jacky Wu Jing",
  "Jackie Chan",
  "Jason Clarke",
  "Jason Statham",
  "Jean-Claude Van Damme",
  "Jet Li",
  "John Cena",
  "Keanu Reeves",
  "Liam Neeson",
  "Mark Dacascos",
  "Mark Adkinsgrant",
  "Jason Clarke",
  "Jason Statham",
  "Jean-Claude Van Damme",
  "Jet Li",
  "John Cena",
  "Keanu Reeves",
  "Liam Neeson",
  "Mark Adkinson",
  "Mark Wahlberg",
  "Jason Clarke",
  "Jason Statham",
  "Jean-Claude Van Damme",
  "Jet Li",
  "John Cena",
  "Keanu Reeves",
  "Liam Neeson",
  "Mark Dacascos",
  "Mark Wahlberg",
  "Mel Gibson",
  "Michael Jai White",
  "Michelle Yeoh",
  "Milla Jovovich",
  "Nicolas Cage",
  "Pedro Pascal",
  "Pierce Brosnan",
  "Ray Stevenson",
  "Rhona Mitra",
  "Scott Adkins",
  "Sean Connery",
  "Steven Seagal",
  "Sylvester Stallone",
  "Tetchi Agbayani",
  "Tom Cruise",
  "Tony Jaa",
  "Vin Diesel",
  "Wesley Snipes",
  "Zoe Saldana"
]
//1) 1 Necesito saber cuántos de estos actores se llaman Jason (no repetidos)
let nombres_no_repetidos =[];
for(let i =0 ;i<XUNGOS.length;i++){

    
        
        if(!nombres_no_repetidos.includes(XUNGOS[i])){
            nombres_no_repetidos.push(XUNGOS[i]);
        }

    
    
    
}

let nombres_jason = nombres_no_repetidos.filter(nombre=>nombre.toUpperCase().includes("JASON"));

console.log(nombres_jason);


//2) 2 Existe un actor que se apellide Adkins. Dame su nombre o me dices "NO EXISTE"


let actor_adkins = XUNGOS.filter(nombre =>
  nombre.trim().split(/\s+/).pop().toUpperCase() === "ADKINS").map(n=>n.split(" ")[0]);
console.log(actor_adkins);

setInterval(() => {
  console.log("Han pasado 2 segundos");
}, 5000);