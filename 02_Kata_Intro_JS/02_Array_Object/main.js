// Variables especiales

// Array o arreglo

var cosas = ['Texto', 1, true, false, 'Texto 2', 10]


// posicion        0             1           2        3   
var animales = ['Hipopotamo', 'Cocodrilo', 'Perro', 'Gato']

// console.log(animales)
// animales[posicion]


// animales[4] = 'Mariposa'
// -------------Metodos--------

// push -> agregar un valor en la utlima posicion
animales.push('Mariposa')
console.log(animales)

// pop -> borra el ultimo elemento de mi arreglo
animales.pop()
console.log(animales)

// splice() --> sustutir
//                 inicio, final, valor
animales.splice(1,1, 'Jirafa')
console.log(animales)


// Objects u objestos


 var persona = {
    nombre : 'Ricardo',
    edad: 24,
    cel: '5512312412412',
    musica: {
        trap: {
            mexicano : ['aleman', 'hombre jugo'],
            usa: ['xtentation', 'lil pimp'],
            argentina:  ['Duki', 'Dillon', 'Neo pistea']
        },
        reggeton: ['AA', 'BB', 'Plan B']
    },
    peliculas: {
        terror: ['Annabel', 'Anabel 2']
    }
 }

// console.log(persona)
//  console.log(persona.nombre)
console.log(persona.musica.trap.argentina[2])



