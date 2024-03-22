// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.
 let palabra=prompt("ingrese una palabra")
function silabas(palabra) {
  const contar = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi;
  const sm = palabra.match(contar);
  const total = sm ? sm.length : 0;
  return total
}
let tot_s = silabas(palabra);
alert(`El numero de silaba de la  ${palabra} son ; ${silabas(palabra)}`)