// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.
let palabra=prompt("Ingrese una palabra")
function inverso(palabra) {
  let newWord = "";
  for (let i = 0; i < palabra.length; i++){
    newWord += palabra[palabra.length - (i + 1)];
  }
  console.log(newWord)

  // let wordArray = [];
  // for (let i = 0; i < palabra.length; i++){
  //   wordArray.push(palabra[i]);
  // }
  // console.log(wordArray.reverse().join(""))

}
inverso(palabra)
