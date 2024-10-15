// Cargo el módulo interno fs
const fs = require('fs');


// Leer el fichero en crudo
const data = fs.readFileSync("./files/2abril_participants_94849208356.csv", "utf-8");

// Voy a utilizar el método split para separar este string por saltos de línea
const parsedData = data.split('\r\n');
// console.log(parsedData);

// iterar el array que hemos creado para mostrar quien ha venido a clase 
parsedData.forEach((person) => {
    const parsedPerson = person.split(',');
    console.log(`${parsedPerson[0]} ha asistido hoy a clase.`);
});

