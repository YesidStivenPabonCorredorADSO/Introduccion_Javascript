// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido
let Pin=prompt("Ingrese un pin")
function pin(Pin) {
  const val = /^[0-9]{4}$|^[0-9]{6}$/g;
  const tex = Pin.match(val)
  return tex
}
const valido= pin(Pin)
console.log(valido)
