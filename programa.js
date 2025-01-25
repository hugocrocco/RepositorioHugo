let listaAmigos = [];

do {
    let amigo = prompt("Ingrese el nombre de su amigo o amiga:");
    if (amigo) {
        listaAmigos.push(amigo); // Agrega el nombre a la lista
    }
    var opcion = prompt("¿Desea agregar a otro amigo? (si/no)").toLowerCase();
} while (opcion === "si");

console.log("Lista de amigos:");
listaAmigos.forEach((amigo, index) => {
    console.log(`${index + 1}: ${amigo}`); // Muestra cada amigo con su índice
});