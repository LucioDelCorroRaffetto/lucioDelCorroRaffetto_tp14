// Conjunto de películas.
const peliculas = [
    "Turno de día",
    "30 noches con mi ex",
    "Bestia",
    "El monte",
    "Top gun maverick",
    "Elvis",
    "Thor: amor y trueno"
];

console.log("--------------------------------");

// Película más vendida
function masVendida(pelicula) {
    return pelicula.toUpperCase();
}

peliculas.unshift(masVendida("Thor: amor y trueno"));
peliculas.pop();

console.log("Películas actualizadas:\n", peliculas.join("\n "));

console.log("--------------------------------");

// Conjunto de nuevasPelículas.
const nuevasPelículas = [
    "Counter-Strike",
    "NOP",
    "Vértigo",
    "Nick",
    "Avatar",
];

console.log("Nuevas películas próximas a estrenar:", nuevasPelículas.join(", "));

console.log("--------------------------------");

function concatenarPeliculas(peliculas, nuevasPelículas) {
    return peliculas.concat(nuevasPelículas);
}

console.log("Películas totales:", concatenarPeliculas(peliculas, nuevasPelículas).join(", "));