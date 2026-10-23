// Variables
// Son reservas en la memoria de una pc
// Declaración
const gustoFavorito = "Dulce de leche"
console.log(gustoFavorito)

// Asignación
const nombre = "Gabriel"
console.log(nombre)

// Operador de comparación
console.log(nombre === gustoFavorito)

// Operadores aritmeticos
//  + - / * **
console.log(2 ** 3)
// Operadores de comparación
// SIEMPRE retornan un booleano (true | false)
console.log(10 > 3)
console.log(10 === 6)

// Operadores lógicos
// Condiciones múltiples
// && || !

const tieneLicencia = true
const esMayorDeEdad = false
const estaAcompañado = false

// Es verdad que tiene licencia y además es mayor de edad? FALSE
console.log(tieneLicencia === true && esMayorDeEdad === true)

// Es verdad que tiene licencia, es mayor de edad o esta acompañado? 
console.log(tieneLicencia === true && esMayorDeEdad === true || estaAcompañado === true)

// Negación
// Invierte su valor booleano
const usuarioLogueado = true

console.log(!usuarioLogueado)

// Mostrar un mensaje si el usuario tiene que loguearse
// if - yes
if (!usuarioLogueado) {
  alert("Debes loguearte para usar nuestro servicio.")
}

// strings
"Pepe123!*"
"pepe"
"123"
"*-!"

// number
// 1
// - 1
// 0
// 1.1

// boolean
true
false

// datos complejos / compuestos
// estructuras de información
// objeto → propiedades y valores
const mascota = {
  nombre: "arandela",
  edad: 8,
  color: "marrón",
  cantDeAmigos: 2,
  especie: "perro"
}

// array | lista
const alumnos = ["Mateo Di Napoli", "Leonardo J L Seling", "Sebastian Serruto"]

console.log(alumnos[2])