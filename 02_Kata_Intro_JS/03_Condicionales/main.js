


// if(condicion) {
//     accion si es verdadera
// }else {
//     acciion si es falsa
// }


// if(num !== '10'){
    //     // console.log('El numero: ' + num + ' es menor')
    //     console.log('Verdadero')
    // }else {
        //     // console.log('El numero: ' + num + ' es mayor')
        //     console.log('Falso')
        // }
        
        // if(num === 10) {
            //     console.log('El valor es 10')
            // }else if (num === 11) { 
                //     console.log('El valor es 11')
                // }else {
                    //     console.log('El valor es difernte')
                    // }

// var num = 10

// if(num === 10 && num < 11) {
//     console.log('Verdadero')
// }else {
//     console.log('Falso')
// }


// --------- Challenge 1 -----------

// van a preguntar al usuario un numero y van a poner en la consola
// el numero y si es par o impar
// 1: impar
// 2: par
// Que pasa si el usuario pone letra x error 


// Todo la info que llegue en el promp es *string*
// var askNumber = Number(prompt('Elige un numero'))

// if(askNumber % 2 === 0) {
//     console.log(askNumber + ': es par')
// }else if(askNumber % 2 === 1) {
//     console.log(askNumber + ': es inpar')
// }else{
//     console.error('No es un numero')
// }


//-------- Challenge 2 --------
// Juego de piedra papel o tijera ✂️ ⛰ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano y porque


var player1 = prompt('Elige piedra, papel o tijera')
var player2 = prompt('Elijre piedra, papel o tijera')


if(player1 === player2){
    console.log('Empate')
}else if(player1 === 'piedra' && player2 === 'tijeras') {
        console.log('Gana el jugar 1, piedra gana a tijeras')
}else if(player1 === 'tijeras' && player2 === 'papel') {
        console.log('Gana el jugar 1, tijeras gana a papel')
}else if(player1 === 'papel' && player2 === 'piedra') {
        console.log('Gana el jugar 1, pepel gana piedra')
}else if(player2 === 'piedra' && player1 === 'tijeras') {
        console.log('Gana jugar 2, piedra gana a tijeras')
}else if(player2 === 'tijeras' && player1 === 'papel') {
        console.log('Gana el jugar 2, tijeras gana a papel')
}else if(player2 === 'papel' && player1 === 'piedra') {
    console.log('Gana el jugar 2, pepel gana piedra')
}else {
    console.error('No existe ' + player1, player2)
}