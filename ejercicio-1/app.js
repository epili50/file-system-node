const fs = require("fs");
const path = require("path");
// const jsonFile = path
let dni = "12345678A";

/** Leer README */

async function readFileHacienda() {
    const fileContent = await fs.promises.readFile("./hacienda.json", "utf-8");

    const parseData = JSON.parse(fileContent);
    
    for(let p of parseData){
        if(dni == p.dni && p.notificacionesPendientes == true){
           console.log(`El/la contribuyenye ${p.nombre} tiene notificaciones pendientes. Se enviará un mail a ${p.email}`)
        
        }
    }
    
    // for(let n of parseData){
    //     console.log(n.nombre);
    // }
}

readFileHacienda();