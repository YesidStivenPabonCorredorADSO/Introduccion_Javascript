//  Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
// * 5, nos debe mostrar el resultado para las demás multiplicaciones
let  num =parseInt(prompt("Ingrese un valor"));
function tabla_5(num) {
  for (let i = 1; i <= 10; i++){
    if (i === num) {
      console.log(`No da valor`)
    }
    else {
      console.log(`${i} X ${num} = ${i*num}`)
    }
}
}
tabla_5(num)
