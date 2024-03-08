// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están

// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.
let pregunta = prompt("Quiere una pizza vegetariana  o no  ").toLowerCase();
let vegetariano =("Vegetariano: Pimentos y tofu")
let no_vegetariano = ("No vegetarianos: Pepperoni, Jamón y Salmón");
let ingrediente = prompt("Pimiento y tofu" +   "Pepperoni,Jamon,Salmon");
if (pregunta == "vegetariana") {
  window.alert(`Los ingredintes son ${ingrediente}`)
}
else if (ingrediente == "Pimiento") {
  window.alert(`La pizza es vegetariana y tiene ${vegetariano}`)
}
else if (pregunta == "no") {
  window.alert(`Los ingredintes son ${ingredinte}`)
}
else if (ingrediente == "Pepperoni") {
  window.alert(`Los ingredintes son ${no_vegetariano}`)
}