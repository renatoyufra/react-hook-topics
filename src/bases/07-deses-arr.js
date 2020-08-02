

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );
// console.log( personajes[0]);
// console.log( personajes[1]);
// console.log( personajes[2]);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = useState( 'Goku' );
//arr[1]();

console.log( nombre );

setNombre();