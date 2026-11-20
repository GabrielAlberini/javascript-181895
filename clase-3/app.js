// estructura de control
// inicio
// condicion
// actualización
for (let inicio = 0; inicio < 10; inicio++) {
  console.log("Hola")
}

// switch () {
// }

// while () {
// }

// do {
// } while () {
// }

// Métodos
const persona = {
  nombre: "Gabriel",
  edad: 32,
  saludar() {
    console.log("Hola mi nombre es " + this.nombre)
  }
}

persona.saludar()

// forEach
// map
// filter
// find

const alumnos = [
  {
    id: 1,
    nombre: "Leo",
    nota: 7
  },
  {
    id: 2,
    nombre: "Mateo",
    nota: 7
  },
  {
    id: 3,
    nombre: "Seba",
    nota: 8
  },
  {
    id: 4,
    nombre: "Flor",
    nota: 9
  }
]

alumnos.forEach((alumno, indice) => {
  console.log(`El ${indice + 1}° es el alumno ${alumno.nombre}`)
})

const alumnosConSiete = alumnos.filter((alumno) => alumno.nota === 7)
console.log(alumnosConSiete)

// encontrar el alumno que tenga con id 3
// alumno.id === 3
const alumnoEncontrado = alumnos.find((alumno) => alumno.nota === 7)
console.log(alumnoEncontrado)

const helados = ["Dulce de leche", "Limón", "Frutilla"]
const heladerias = ["Grido", "Veneto", "Fredo"]
const precios = [1, 2, 3]

// gusto: ...
// heladeria: ...
// precio: ...

const heladosData = helados.map((helado, indice) => ({
  gusto: helado,
  heladeria: heladerias[indice],
  precio: precios[indice]
}))

console.log(heladosData)