// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0
function num_positivos(cantidad_num){
    let suma = 0;
    for(let i = 0; i < cantidad_num; i++){
        let num = parseInt(prompt("Ingresa el número:"));
        if(num > 0){
            suma += num;
        }
    }
    return suma;
}
let cantidad_num = parseInt(prompt("Ingrese la cantidad de números en la serie:"));
let suma_positivos = num_positivos(cantidad_num);
alert(`La suma de los números positivos es: ${suma_positivos}`);