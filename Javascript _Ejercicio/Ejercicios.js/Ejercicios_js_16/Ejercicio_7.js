// Crea una función de nos devuelva el elemento mayor de un arreglo de números.
let arreglo=[1,4,5,66,33,44,88,100]
function filtro(arreglo) {
  return Math.max.apply(null,arreglo)
}
filtro()
console.log(filtro(arreglo))