// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.
function binario(){
    let num1 = parseInt(prompt("Ingresa el numero 1"));
    let num2 = parseInt(prompt("Ingresa el numero 2"));
    let suma = num1+num2;
    let binari = suma.toString(2);
    alert(`El resultado de la suma de ${num1} + ${num2} en numero binario es ${binari}`);
}