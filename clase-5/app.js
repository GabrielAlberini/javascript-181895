
// declaración
function sumar(numero1, numero2) {
  const resultado = numero1 + numero2
  console.log(resultado)
}

sumar(1, 2)

const parrafo = document.querySelector("#mensaje")

// declaración
// parametros → es lo que necesita una función
// los parametros NO TIENEN DATOS
function comer(comida = "fideos con crema") {
  const diaActual = new Date().toLocaleDateString()
  parrafo.textContent = `Hoy ${diaActual} voy a comer: `

  const textoDestacado = document.createElement("strong")
  textoDestacado.textContent = comida

  textoDestacado.style.color = "red"

  textoDestacado.classList.add("importante")

  parrafo.appendChild(textoDestacado)
}

// invocación
// argumento
const comida = prompt("Ingresa la comida de hoy: ")
comer(comida)

// devtools
// developer tools
// herramientas para el desarrollo
// console

