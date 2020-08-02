

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2424232,
        lat: 14.31212,
        lng: 34.12121
    }
}

//console.table(persona);


const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);