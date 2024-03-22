// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar
function num(){
    let numero = Math.floor(Math.random() * 10) + 1;
    let mensaje = (numero % 2 === 0) ? "par" : "impar";
    return `El número generado es ${numero} y es ${mensaje}.`;
}
console.log(num());