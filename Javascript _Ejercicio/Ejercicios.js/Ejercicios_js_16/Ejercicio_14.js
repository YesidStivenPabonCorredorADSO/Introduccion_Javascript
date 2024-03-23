// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo
function num(){
    let cantidad = prompt("Ingresa la cantidad de numeros: ");
let numero = [];
for (let i = 0; i < cantidad; i++){
    numero[i] = prompt("Ingresa el numero");
    numero[i] = -(numero[i]);
}
alert(`Numeros: ${numero}`);
}
num()
