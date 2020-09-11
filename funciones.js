/* function saludar(nombre){
    let nombre = nombre;
    return 'Hola ' + nombre;
} */
const saludar = (nombre) => 'Hola ' + nombre

// Mostrar el resultado por consola
//saludar('Alejandro');
console.log(saludar('Alejandro')) 

/* function multiplicar(a, b){
    const resultado = a * b;
    return resultado;
}*/
const multiplicar = (a,b) => a * b
// Mostrar el resultado por consola
//multiplicar(3, 15)
console.log(multiplicar (3, 15))

/* function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
} */

 const crearAlumno = (nombre, apellido, edad, materias) => ({

    nombre: nombre,
    apellido: apellido,
    edad: edad,
    materias: materias
})

// Mostrar el resultado por consola.
//crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])

console.log(crearAlumno('Leo', 'Messi', '33', ['TLPA', 'Base de Datos', 'Inglés'])) 

/* function devolverFecha(){
    return 'Hoy es ';
}  */

const devolverFecha = (...arguments) => 'Hoy es '+arguments[0]+'-'+arguments[1]+'-'+arguments[2]
// Mostrar el resultado por consola.
//devolverFecha('10','09','2020');
console.log(devolverFecha('10', '09', '2020'))  