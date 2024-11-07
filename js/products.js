var prompt = require('prompt-sync')();

//  Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.
const productos = [
    "lavadora",
    "refrigerador", 
    "microondas",
    "licuadora", 
    "tostadora",
    "aspiradora"
];

// a. Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
console.log("Primer producto:", productos[0]);
console.log("Tercer producto:", productos[2]);
console.log("Último producto:", productos[productos.length - 1]);

// Accediendo usando find()
const licuadora = productos.find(producto => producto === "licuadora");
console.log("Buscando licuadora:", licuadora);

// Accediendo usando filter()
const productosConIdMayorA3 = productos.filter((_, index) => index > 2);
console.log("Productos con ID mayor a 3:", productosConIdMayorA3);

// b. Extraer el primer elemento del array y agregarlo al final del mismo.
const primerElemento = productos.shift(); // Extrae el primer elemento
productos.push(primerElemento); // Lo agrega al final
console.log("Array después de mover el primer elemento al final:", productos);

// c. Agregar al final del array dos (2) nuevos productos.
productos.push("cafetera", "batidora");
console.log("Array después de agregar nuevos productos:", productos);

// d. Mostrar por la consola la cantidad de elementos que contiene el array.
console.log("Cantidad total de productos:", productos.length);

// e. Buscar un elemento y verificar si existe en el array...
const productoABuscar = prompt("¿Qué producto desea buscar? ");
const existeProducto = productos.includes(productoABuscar);

if (existeProducto) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}

// f. Unificar todos los elementos en una cadena separada por espacios
const cadenaProductos = productos.join(" ");
console.log("Productos unidos en una cadena:", cadenaProductos);

// g. Determinar la cantidad de elementos que posee la cadena de texto obtenida
const cantidadElementosCadena = cadenaProductos.split(" ").length;
console.log("Cantidad de elementos en la cadena:", cantidadElementosCadena);

// h. Cambiar el nombre de un producto en la cadena de texto
const nuevaCadena = cadenaProductos.replace("licuadora", "exprimidor");
console.log("Cadena con producto reemplazado:", nuevaCadena);

// i. Generar nuevo array desde la cadena de texto
const nuevoArrayDesdeTexto = nuevaCadena.split(" ");
console.log("Nuevo array desde la cadena:", nuevoArrayDesdeTexto);
