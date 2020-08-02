
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Renato'))

console.log( saludar2('Kakaroto') );
console.log( saludar3('Piccoro') );
console.log( saludar4() );


const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'El Papu gomez'
    });

const user = getUser();

console.log( user );

// Tarea
// 1. Transformar a una funcion de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');

// console.log( usuarioActivo );


const getUsuarioActivo = ( nombre ) => ({ uid: 'ABC567', username: nombre });

const usuarioActivo = getUsuarioActivo('El cuyo');

console.log( usuarioActivo ); 