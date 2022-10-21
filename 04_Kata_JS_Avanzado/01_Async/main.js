// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 3000)

// setTimeout(() => {
//     console.log(3)
// }, 3000)

// console.log(4)



// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 2000)

// for(let i = 0; i <= 10; i++) {
//     console.log(i, 'Simulando cuello de botella');
// }

// console.log(3);


// -------- Ejercicios --------

// el primer parametro 'imprimir' es una funcion -> callback
const saludo = (imprimir, mensaje) => {
    imprimir(mensaje)
}

saludo((mensaje) => {
    console.log(mensaje);
} , 'Hola mundo desde un callback')


const valor = (queTipo, variable) => {
    queTipo(variable)
}

valor((variable) => {
    console.log(`El tipo de valor de "${variable}" es: ${typeof(variable)}`)
}, true)



// Challege 

// 1.- funciuon que me ayude a saber que tipo de operacion es y el resultado 
// suma de 5 + 5 = 10 
// division de 10/5 = 2



// 2.- Funcion que puda conventir de minusculas a mayusculas, mayusculas a minusculas
// o mixto dependiendo del caso
// parametros (convertir, texto, caso) 

// 3.- devolver la hora de un arreglo que lleva [120, 80, 200, 100] -> en horas