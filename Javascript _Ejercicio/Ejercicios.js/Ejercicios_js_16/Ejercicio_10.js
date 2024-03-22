// Genera un patrón de asteriscos en forma de pirámide
function piradimet(altura){
    altura = parseInt(altura); 
    if (!isNaN(altura) && altura > 0) {
        let r = "";
        for (let i = 1; i <= altura; i++) {
            let linea = "";
            for (let o = 1; o <= i; o++) {
                linea += "*";
            }
            r += linea + "\n";
        }
        alert(`Altura de la pirámide: \n ${r} `);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}
let altura = prompt("Ingresa el tamaño de la pirámide");
piradimet(altura)
