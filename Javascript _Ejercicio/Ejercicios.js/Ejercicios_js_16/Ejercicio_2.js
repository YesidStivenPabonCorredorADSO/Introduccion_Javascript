// Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar.
a = parseInt(prompt("Ingrese un numero"));
function par_impar(a) {
  // a % 2 != 0 ? console.log(`${a} es impar`) : console.log(`${a} es par`);
}
// par_impar(a);
  if (a % 2 == 0) {
    alert(`El numero es par ${a}`)
}
  else {
    alert(`El numero es impar`)
  }
