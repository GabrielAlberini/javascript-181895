// Condicional → estructura de control
// if
// for
// function
// switch

// if (condicion) {
// para que se ejecute su SCOPE la condición tiene que ser verdadera
// }

const clima = "nubladito"

if (clima === "soleado") {
  const mensaje = "Podes salir a pasear tranquilo :)"
  console.log(mensaje)
} else if (clima === "nubladito") {
  console.log("Podes salir pero llevate un paraguas por las dudas")
} else {
  console.log("No puedes salir :(")
}


// = → asignación
// === → igualdad

// falsy y truthy

// tengo $1 de ahorro → Tengo ahorros? → true
// llovio y mi lista de alumnos presentes está vacia → tengo algunos? → false
// martincito → hay usuario logueado → true
// usuario logueado = undefindes → Hay usuario logueado? → false

const ahorro = 0

if (ahorro) {
  console.log("Tengo ahorros")
} else {
  console.log("No tengo ahorros")
}

const alumnos = ["Seba", "Leo", "Mateo", "Gonza"]

if (alumnos.length) {
  console.log("Hay alumnos presentes")
} else {
  console.log("No hay alumnos presentes")
}

const usuarioLogueado = ""

if (usuarioLogueado) {
  console.log("Usuario logueado :)")
} else {
  console.log("No hay usuario logueado :|")
}

// && || !
// para comprar una lancha tengo que tener más de 1000 y además estar en santa fe

const misAhorros = 1010
const lugar = "la quiaca"

// Caso 2
if (misAhorros > 1000 && lugar === "santa fe") {
  console.log("Podes comprar la lancha")
} else {
  console.log("No podes comprar la lancha")
}

// && → evaluar 2 cosas a la vez y las 2 tienen que dar true

// Caso 1
if (misAhorros > 1000) {
  if (lugar === "santa fe") {
    console.log("Puedes comprar la lancha")
  } else {
    console.log("Aunque tenes los ahorros suficientes, debes estar en Santa Fe :/")
  }
} else {
  console.log("No tenes ahorros suficientes")
}

// Operadores ternario
// ??????

