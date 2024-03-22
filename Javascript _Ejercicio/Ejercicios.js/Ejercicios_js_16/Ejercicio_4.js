// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

// let hola=palabra.length
function cal_P() {
  let palabra = prompt("Ingrese una palabra")
  if (palabra.length > 5) {
    alert(`Es larga ${palabra} es larga`)
  }
  else if (palabra.length < 5) {
    alert(`Es corta ${palabra} es corta`)
  }
}
cal_P()
