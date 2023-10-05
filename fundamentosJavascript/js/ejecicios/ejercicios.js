
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


/*NOTE: Parte dos de los ejercicos */
// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") => {

    if (cadena === "") {
        console.error("No ingresaste una cadena de texto")
    }
    else {
        let cadenaSeparada, cadenaNueva, cadenaInvertida;
        cadenaSeparada = cadena.split("")
        cadenaNueva = cadenaSeparada.reverse()
        cadenaInvertida = cadenaNueva.join("");
        console.info(cadenaInvertida)

    }
}
console.log("Ejercicio 5")
invertirCadena("hola");
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const palabraRepetida = (texto = "", palabra = "") => {
    const palabras = texto.split(' '); // Dividir el texto en palabras
    let contador = 0;

    if (texto === "") console.error(`no se ingreso nigun texto o cadena`)
    if (palabra === "") {
        console.error(`no diste ninguna palabra a buscar`)
    }
    else {

        for (const palabraTexto of palabras) {
            if (palabraTexto === palabra) {
                contador++;
            }
        }
        if (contador < 1) {

            console.info(`la palabra "${palabra}" no se encuentra en el texto`)
        }
        else {
            console.info(`la palabra "${palabra}" se repite ${contador}`)
        }
    }



}
console.log("Ejercicio 6")
palabraRepetida("hola mundo adios mundo", "mundo")
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindrome = (cadena = "") => {
    let re = /[\W_]/gi; // De esta manera me permite quitar los caracteres no deseados

    let cadenaFactorizada, cadenaInversa;
    cadenaFactorizada = cadena.toLocaleLowerCase().replace(re, '');
    cadenaInversa = cadenaFactorizada.split('').reverse().join('')

    return console.log(cadenaInversa === cadenaFactorizada ? 'la cadena es un palindrome' : 'la palabra no es un palindrome')
}

console.log("Ejercicio 7")
palindrome("Salas")
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarLetras = (cadena = "", patron = "") => {
    if (!cadena) console.error('no ingresaste una cadena')
    if (!patron) console.error('no ingresaste una patron')
    else {
        const regExpresion = new RegExp(patron, 'gi');
        const cadenaNumerica = cadena.replace(regExpresion, '');
        console.log(cadenaNumerica)
        // Esto es lo mismo que solo que aqui con menos lineas de codigo
        console.log(`esta es otra manera ${cadena.replace(new RegExp(patron, "ig"), "")}`)
    }

}
console.log("Ejercicio 8")
eliminarLetras("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy")

console.clear()

// NOTE: Parte tres de los ejercicos
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = () => {
    let valorMin = Math.ceil(501), valorMax = Math.floor(600);
    return console.log(Math.floor(Math.random() * (valorMax - valorMin) + valorMin));
}
numeroAleatorio();
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero = 0) => {

    let regNumber = /^[0-9]+$/gi;
    if (!numero) {
        return console.warn("no ingresaste ningun numero")
    }
    if (typeof numero !== "number") {
        return console.warn(`El valor ingresado "${numero}" no es un número`)
    }
    numero = numero.toString();
    let cadenaInvertida = numero.split("").reverse().join("");

    return (numero === cadenaInvertida
        ? console.info(`El número es capicual, el numero original ${numero}, el número al reves ${cadenaInvertida} `)
        : console.log(`El número no es capicual, el numero original ${numero}, el número al reves ${cadenaInvertida} `))
    // let cadenaFactorizada, cadenaInversa;
    // cadenaFactorizada = cadena.toLocaleLowerCase().replace(re, '');
    // cadenaInversa = cadenaFactorizada.split('').reverse().join('')

    // return console.log(cadenaInversa === cadenaFactorizada ? 'la cadena es un palindrome' : 'la palabra no es un palindrome')
}
capicua();
capicua("22")
capicua({})
capicua(2000)
capicua(2002)
capicua(18.99)
capicua(33);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (num = undefined) => {

    if (num === undefined) { return console.warn("ingresa un numero para calcular el factorial") }


    if (typeof num !== "number") { return console.warn(`el valor ${num} ingresado no es un número`) }

    if (num === 0) { return console.warn("el número no puede ser cero") }

    if (Math.sign(num) === -1) { return console.warn('el número no puede ser negativo') }
    let factorial = 1;
    for (let index = num; index > 0; index--) {
        // factorial = factorial * index; 
        // la funcion de arriba es lo mismo a la de abajo, solo es para que quede mejor o mas reducido el codigo
        factorial *= index
    }
    // if (regNumber.test(num)) {
    //     for (let index = num; index > 0; index--) {
    //         contenedor = contenedor * index;
    //     }
    //     return console.info(contenedor)
    // }
    return console.info(factorial)

}
factorial();
factorial("5");
factorial([1, 2, 3])
factorial(0);
factorial(-5);
factorial(5);
console.clear()

// NOTE: parte cuatro de los ejercicios
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numerosPrimos = (num = undefined) => {
    if (num === undefined) {
        return console.warn('No ingresaste un número')
    }
    if (typeof num !== "number") {
        return console.warn(`El valor "${num}" no es un numero`);
    }
    if (num === 0) {
        return console.error("no puedes ingresar Cero")
    }
    if (num === 1) {
        return console.error('No puedes ingresar el valor de 1');
    }
    if (Math.sign(num) === -1) {
        return console.error('No puedes ingresar numeros negativos');
    }
    // let numeroPrimo, contador = 1;
    // for (let index = 1; index < num; index++) {
    //     numeroPrimo = num % index
    //     if (numeroPrimo === 0) {
    //         contador++
    //     }
    // }
    // if (contador > 2) {
    //     console.info(`El número ${num} no es un numero primo`)
    // }
    // else {
    //     console.info(`El número ${num} es un numero primo`)
    // }
    let divisible = false;
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.info(`el número ${num} no es un numero primo`)
        : console.info(`el numero ${num} es un numero primo`)

}
numerosPrimos();
numerosPrimos("20");
numerosPrimos(true);
numerosPrimos(0);
numerosPrimos(1);
numerosPrimos(-1);
numerosPrimos(13)
numerosPrimos(4)
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numeroParImpar = (num = undefined) => {
    if (num === undefined) {
        return console.warn('No ingresaste un número')
    }
    if (typeof num !== "number") {
        return console.warn(`El valor "${num}" no es un numero`);
    }

    if (num === 0) {
        return console.log(`el valor no puede ser "${num}"`)
    }
    if (Math.sign(num) === -1) {
        return console.warn('No puedes ingresar numeros negativos');
    }
    else {
        if (num % 2 === 0) {
            return console.info(`El número ${num} es número par `)
        }
        else {
            return console.info(`El número ${num} es número impar `)
        }
    }
}

numeroParImpar(0)

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertidorTemperatura = (grados = undefined, expresion = undefined) => {
    let incluyeEExpresion = ["c", "f"], gradosFC;
    let mensajeResponse, expresionFormateada;


    if (grados === undefined) {
        const mensaje = `No se ingresaron los grados ${expresion === "c" ? "centigrados" : "fahrenheit"}`;
        return console.warn(mensaje);
    }
    if (typeof grados !== "number") {
        return console.warn("El valor ingresado no es un número")
    }

    if (typeof expresion === "string") {
        expresionFormateada = expresion.toLowerCase()
    }
    if (!incluyeEExpresion.includes(expresionFormateada)) {
        return console.error('No ingresaste el indicador al cual vas a cambiar los grados "f" para fahrenheint "c" celsius')
    }

    else {
        if (expresion === "c") {
            gradosFC = parseFloat((((grados * 9) / 5) + 32).toFixed(4));
        }
        else {
            gradosFC = parseFloat((((grados - 32) * 5) / 9).toFixed(4));
        }
        mensajeResponse = `${grados}° ${expresion === "c" ? "celsius son:" : "fahrenheint son:"} ${gradosFC}° ${expresion === "c" ? "fahrenheit" : "celsius"}`;
    }
    // const mensajeResponse=`Los grados ${expresion==="c"?"los grados centigrados son" ${gradosFC}: "los grados fahrenheit son " ${gradosFC}}`;
    // Tener cuidado con la expresion anterior que esta mal la manera en la que lo hice

    console.info(mensajeResponse)
}

convertidorTemperatura();
convertidorTemperatura("2");
convertidorTemperatura(2);
convertidorTemperatura(2, true);
convertidorTemperatura(2, "hola");
convertidorTemperatura(2, "E");
convertidorTemperatura(0, "c");
convertidorTemperatura(100, "c");
convertidorTemperatura(32, "f")
console.clear();