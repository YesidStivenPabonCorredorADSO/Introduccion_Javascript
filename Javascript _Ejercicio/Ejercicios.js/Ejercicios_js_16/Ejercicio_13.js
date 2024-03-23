// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales
function cadena(){
    let ca_dena=prompt("Ingrese cadena")
    let cadena_sin_vocales = ca_dena.replace(/[aáAÁeéEÉiíIÍoOóÓuúÚ]/gi, '');
    alert(`Cadena sin vocales: ${cadena_sin_vocales}`);
}
cadena()