// Programacion Orientada a Objetos


class Animal {
    // atributos de mi clase 
    constructor(tipo, numPatas, nombre){
    // Animal.tipo = tipo
        this.tipo = tipo
        this.numPatas = numPatas
        this.nombre = nombre
    }

    comer(alimentacion){
        return 'Los animales de tipo ' + this.tipo + ' se alimentan de: ' + alimentacion 
    }

    movidilidad(trasportacion) {
        return 'Los animales de tipo ' + this.tipo + ' pueden ' + trasportacion
    }
}

var gato = new Animal('Felino', 4, 'Makun')
var coco = new Animal('Reptil', 4, 'Juan')

// console.log(gato.comer('Ratones'))
// console.log(coco.movidilidad('nadar y cominar'))

// Pilares de POO
// 4 pilares
// 1) Abtraccion
// 2) Encapsulacion
// 3) Herencia
// 4) Polimorfimo

// Herencia

// SuperClase o SuperClass
class Mascota {
    constructor(nombre, cerebro){
        this.nombre = nombre
        this.cerebro = cerebro
    }

    comer() {
        return this.nombre + ' esta comiendo'
    }
}
// Subclase o SubClass
class Gatito extends Mascota {
    constructor(nombre, cerebro, raza){
        // super -> hace refencia a la clase padre o super clase
        super(nombre, cerebro)
        this.raza = raza
    }

    ronronear(){
        return this.nombre + ' esta haciendo grrrrrrrr'
    }
}

class Perrito extends Mascota {
    constructor(nombre, cerebro, raza){
        super(nombre, cerebro)
        this.raza = raza
    }

    ladrar(){
        return this.nombre +' esta ladrando'
    }
}

var gatitoChido = new Gatito('Michi', true, 'egepcio')
var perritoChido = new Perrito('Chems', true, 'Japonesa')


console.log(gatitoChido.comer())
console.log(gatitoChido.ronronear())

console.log(perritoChido.nombre)
console.log(perritoChido.ladrar())



// ---------------> Challenge <----------------

// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones	 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.

// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un método que regresa los metros 
//        cuadrados
//     c. Un método debe regresar la direccion
//     d. Un método debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia

// 3.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol
//
// 4.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100

// 5.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
// comentario extra