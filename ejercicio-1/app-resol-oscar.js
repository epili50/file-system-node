const fs = require('fs');
const path = require('path');

/** Leer README */

async function taxNotifications(dni) {
    // leer el fichero "en crudo" (un string sin formato)
    const fileContent = await fs.promises.readFile("./hacienda.json", "utf-8");

    // utilizamos el método JSON.parse, para transformar el string en un tipo de dato que podamos manejar mejor (que puedas recorrerlo, hacer búsquedas estructuradas, etc) con JavaScript
    const jsonContent = JSON.parse(fileContent);

    /**
     * Bucle for... un bucle while... y otros métodos más avanzados que veremos el lunes
     */

    let defaulterFound = false; // nos indicará si hemos encontrado al infractor o no
    let i = 0; // variable de iteración. Nos va a permitir iterar por cada uno de los elementos del array

    /**
     * Mientras no hayamos encontrado al defraudador y no hayamos llegado al final del array
     *   - Para cada persona tenemos que comprobar dos cosas: si encontramos el dni que estamos buscando Y si dicha persona tiene notificaciones pendientes (persona.dni == dni && persona.notificacionesPendientes) 
     */
    while (!defaulterFound && i < jsonContent.length) {
        // en nextPerson tengo el ojbeto actual sonre el cual estamos iterando
        const nextPerson = jsonContent[i];
        console.log("🚀 ~ file: app.js:28 ~ taxNotifications ~ nextPerson:", nextPerson.nombre)
        defaulterFound = nextPerson.dni == dni && nextPerson.notificacionesPendientes;

        if (defaulterFound) {
            // escribir el mensaje indicado de la iteración 3.
            const message = `El/La contribuyente ${nextPerson.nombre} se enviará un email a ${nextPerson.email}\n`;
            await fs.promises.appendFile("notificaciones.txt", message);
        }

        i++;
    }

    /**
     * Cuando salgamos del bucle while, ¿qué variable de las que hemos declarado nos va a indicar si hemos contrado al defraudador? defaulterFound
     * 
     * Si defaulterFound es cierto, tenemos que escribir en el fichero la información que nos pide el ejercicio
     */


}

taxNotifications("12345678A");

