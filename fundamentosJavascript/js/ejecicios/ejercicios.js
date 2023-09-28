
// NOTE: primera seccion de ejercicios 1 - 4
// 1)Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function miFuncion(data) {
    if (data === "") {
        return console.log("no ingresaste ninguna cadena");
    }
    else {
        return console.log(`la cadena tiene ${data.length} caracteres`)
    }
}
console.log("ejercicio 1")
miFuncion("Hola mundo");
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortarCaracteres(cadena, indice) {
    // con esta funcion digo los siguiente, si cadena es menor al indice, es decir que de un valor negativo, entonces el usurio lo que esta indicando es que empiece de derecha a izquierda a eliminar los caracteres inecesarios, caso contrario empezamos en la posicion cero y despues de ello los demas elementos no cuentan
    if (cadena.length <= indice) {
        return console.log(cadena);
    } else {
        return console.log(cadena.slice(0, indice));;
    }
}
console.log("ejercicio 2")
recortarCaracteres("Hola mundo", 4)
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function separadoraCadena(data, separador) {
    let cadenaSeparada;
    if (separador) {
        cadenaSeparada = data.split(separador)
    } else {
        cadenaSeparada = `la cadena no sera separada no tiene el separador "${data}"`
    }
    console.log(cadenaSeparada)
}
console.log("ejercicio 3")
separadoraCadena("hola que tal", " ")
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetirCadena(cadena = "", repeticiones = undefined) {
    // if (repeticiones > 0) {
    //     for (let index = 0; index < repeticiones; index++) {
    //         console.log(cadena)
    //     }
    // }
    // else {
    //     return console.log(cadena)
    // } eso que estaba antes esta mal
    if (!cadena) console.warn("no hay datos")
    if (repeticiones === undefined) console.log("no tiene el numero de repeticiones ")
    if (repeticiones === 0) console.error("El número de veces es 0")
    if (Math.sign(repeticiones) === -1) console.error("el numeor de veces es negativo")

    for (let index = 0; index < repeticiones; index++) {
        console.info(cadena)
    }

}
console.log("ejercicio 4")
repetirCadena("datos", 3)
console.clear();



