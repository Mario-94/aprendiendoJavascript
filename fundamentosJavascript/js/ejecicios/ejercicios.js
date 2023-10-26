
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

numeroParImpar(2)


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
// NOTE:parte cinco de los ejercicios

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBinarioDecimal = (num = undefined, base = undefined) => {
    if (num === undefined) {
        return console.error('no ingresase el número a convertir')
    }
    if (typeof num !== "number") {
        return console.warn('El valor dado no es un némero')
    }
    if (Math.sign(num) === -1 || Math.sign(base) === -1) {
        return console.warn('el valor dado es un número negativo')
    }
    if (base === undefined) {
        return console.error('no se a ingresado la base a la que convertir')
    }
    if (typeof base !== "number") {
        return console.warn("El valor que proporcionaste no es un número")
    }
    if (base === 2) {
        let numeroDecimal = parseInt(num, base)
        return console.info(`${num} base ${base} es igual a ${numeroDecimal} base 10`)
    }

    if (base == 10) {
        let numeroBinario = num.toString(2)
        return console.info(`${num} base ${base} es igual a ${numeroBinario} base 2`)
    }

}
convertirBinarioDecimal();
convertirBinarioDecimal("2")
convertirBinarioDecimal(100)
convertirBinarioDecimal(100, "2")
convertirBinarioDecimal(100, 2)
convertirBinarioDecimal(101010101, 2)
convertirBinarioDecimal(341, 10)
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const aplicarDescuento = (cantidad = undefined, descuento = undefined) => {
    if (cantidad === undefined && descuento === undefined) {
        console.error('no se ingresaron datos')
    }
    if (cantidad === undefined) {
        return console.error('la cantidad no fue dada');
    }
    if (typeof cantidad !== "number") {
        return console.error("la cantidad no es un número");
    }
    if (Math.sign(cantidad) === -1) {
        return console.error("la cantidad no puede ser un número negativo");
    }
    if (descuento === undefined) {
        return console.error('la descuento no fue dada');
    }
    if (typeof descuento !== "number") {
        return console.error("la descuento no es un número");
    }
    if (Math.sign(descuento) === -1) {
        return console.error("el descuento no puede ser un número negativo");
    }
    let resultadoDescuento = (cantidad * (1 - (descuento / 100)))
    console.info(`monto ${cantidad} - ${descuento}% = ${resultadoDescuento}`)
}
// aplicarDescuento(4000, 20)
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// NOTE: esta es la opcion que yo di como respuesta al calcular las fechas
const calcularEdad = (año = undefined, mes = undefined, dia = undefined) => {


    if (año === undefined) {
        return console.warn("El año no fue dado")
    }
    if (mes === undefined) {
        return console.warn("El mes no fue dado")
    } if (dia === undefined) {
        return console.warn("El dia no fue dado")
    }
    if (typeof año !== "number") {
        return console.warn('El año ingresado no es un número')
    }
    if (typeof mes !== "number") {
        return console.warn('El mes ingresado no es un número')
    }
    if (typeof dia !== "number") {
        return console.warn('El día ingresado no es un número')
    }
    if (Math.sign(año) === -1 || Math.sign(mes) === -1 || Math.sign(dia) === -1) {
        return console.warn('no puede agregar valores negativos')
    }
    // con la siguiente linea revisamo que los valores dados no sean decimales ya que no nos serviran
    if (!Number.isInteger(año) || !Number.isInteger(mes) || !Number.isInteger(dia)) {
        return console.warn('no puedes agregar valores con decimal')
    }
    const fechaAgrupada = año.toString() + "/" + mes.toString() + "/" + dia.toString();
    const totalEnMiliSegundos = parseInt(Date.parse(fechaAgrupada));
    const fechaActual = Date.now()
    const tiempoTranscurrido = (fechaActual - totalEnMiliSegundos)
    console.log(Math.floor(tiempoTranscurrido / 3.154e+10));

}
calcularEdad(1993, 4, 15)
// NOTE: Esta es la opcion de las fechas que me proponen para solucionar el ejercicio, utilizando el metodo new Date();
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) {
        return console.warn('No ingresaste la fecha');
    }
    if (!(fecha instanceof Date)) {
        return console.error('El valor que ingresaste no es una fecha válida');
    }
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
    return (Math.sign(aniosHumanos) === -1
        ? console.info(`faltan ${Math.abs(aniosHumanos)} años para el  ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
    )
}
// NOTE: Me parese una mejor opcion asi porque en la forma que yo solucione me faltaba validar que el año no superara al actual y si si pues acomodar la fecha y decir que faltaba tiempo para ella
calcularAnios(new Date(2024, 4, 15))
console.clear();

// NOTE: Parte seis

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contadorVocalesConsonantes = (cadena = undefined) => {
    let expresionRegular = /[a-zA-Z]+/;
    const expresionRegularVocales = /[aeiouAEIOU]/gi;
    const expresionRegularConsonantes = /[^aeiouAEIOU0-9]/g;

    if (cadena === undefined) {
        return console.error('No se ingreso ninguna cadena');
    }
    if (typeof cadena !== 'string') {
        return console.warn('no se ingreso una cadena valida')
    }
    if (!expresionRegular.test(cadena)) {
        return console.info(`En la cadena "${cadena}" dada no se tiene ni vocales ni consonantes`)
    }
    else {
        let vocales = cadena.match(expresionRegularVocales) ? cadena.match(expresionRegularVocales).length : 0
        let consonantes = cadena.match(expresionRegularConsonantes) ? cadena.match(expresionRegularConsonantes).length : 0
        let caractereDistintos = cadena.length - consonantes - vocales
        console.log(`La cadena "${cadena}" tiene ${vocales} vocales y ${consonantes} consonantes y los caracteres que no son ni vocales ni letras son ${caractereDistintos}`)
    }


}
// contadorVocalesConsonantes();
// contadorVocalesConsonantes(false);
// contadorVocalesConsonantes({});
// contadorVocalesConsonantes(123);
// contadorVocalesConsonantes("123456a")
// contadorVocalesConsonantes("w3456awwqaaw");

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const revisarUsuarios = (cadena = undefined) => {

    let nombre = 'Mario Alberto';

    if (cadena === undefined) {
        return console.error('no se ingreso un nombre');
    }
    if (typeof cadena !== "string") {
        return console.warn(`${cadena} no es una cadena valida, debe de ser un nombre`);
    }


    return console.log(nombre === cadena ? `el nombre "${cadena}" si es un nombre valido` : `el nombre "${cadena}" no es un nombre valido`)
}
revisarUsuarios("Mario Alberto")
// NOTE: El ejercicio se refiera a un nombre valido es decir un nombre el cual no contiene numeros o caracteres especiales en el, por lo tanto lo realizaremos de nuevo
const validarNombre = (cadena = undefined) => {
    const expresionRegular = /^[A-Za-z]+$/
    if (cadena === undefined) {
        return console.error(`No se ingreso un valor `)
    }
    if (typeof cadena !== "string") {
        return console.warn(`${cadena} no es una cadena valida, debe de ser del tipo string`)
    }
    return console.info(expresionRegular.test(cadena) ? `${cadena} es un nombre valido` : `${cadena} no es un nombre valido`)

}
validarNombre('mario')
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (cadena = undefined) => {
    const expresionRegularEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (cadena === undefined) {
        return console.error('No se ingreso una cadena a revisar');
    }
    if (typeof cadena !== "string") {
        return console.warn('La cadena que se proporciono no es una cadena valida');
    }
    if ((expresionRegularEmail.test(cadena))) {
        return console.info(`el correo ${cadena} es un correo valido`)
    }

}
validarEmail("usuario@dominio.com")
console.clear()
// NOTE: Parte 7
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevarNumero = (numero = undefined) => {
    const expresionRegular = /^[A-Za-z]+$/
    if (numero === undefined) {
        return console.error('no se ingreso algun valor')
    }
    if (!Array.isArray(numero)) {
        return console.warn(`${numero} no es un arreglo`);
    }
    if (numero.length === 0) {
        return console.warn('El arregloesta vacío')
    }

    if (numero.some(elemento => typeof elemento !== 'number' || isNaN(elemento))) {
        return console.warn(`El arreglo ${numero} contiene elementos que no son números`);
    }
    const newArr = numero.map(numero => numero * numero)
    return console.info(`el cuadrado de "[${numero}]" es: ${newArr}`)
}

// elevarNumero("1,2,3,4,5")
// elevarNumero([1, 2, 3, {}])
// elevarNumero(["a", "1", "c"])
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const compararNumeros = (numero = undefined) => {
    if (numero === undefined) {
        console.error(`No se a ingresaro informacion`)
    }
    if (!Array.isArray(numero)) {
        return console.warn(`${numero} no son Arreglos`)
    }
    if (numero.length === 0) {
        return console.warn('El arregloesta vacío')
    }
    if (numero.some(elemento => typeof elemento !== 'number' || isNaN(elemento))) {
        return console.warn(`El arreglo ${numero} contiene elementos que no son números`);
    }
    const numeroMayor = Math.max(...numero)
    const numeroMenor = Math.min(...numero)
    return console.info([numeroMayor, numeroMenor])

}
// compararNumeros();
// compararNumeros([1, 3, -1, "a"]);
// compararNumeros([1, 3, -1, 3]);
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const acumularParesImprares = (numero = undefined) => {

    if (numero === undefined) {
        console.error(`No se a ingresaro informacion`)
    }
    if (!Array.isArray(numero)) {
        return console.warn(`${numero} no son numeros`)
    }
    if (numero.some(elemento => typeof elemento !== 'number' || isNaN(elemento))) {
        return console.warn(`El arreglo ${numero} contiene elementos que no son números`);
    }
    if (numero.length === 0) {
        return console.warn('El arregloesta vacío')
    }

    // let impar = [];
    // let par = [];
    // const parImpar = numero.map((num, index) => {
    //     if (num === 1) {
    //         return index
    //     }
    //     if (num % 2 === 0) {
    //         return par.push(num)
    //     }
    //     else {
    //         return impar.push(num)
    //     }
    // })
    // const resultado = { pares: par, impares: impar }
    // console.log(`el resultado es de ${numero} es: ${resultado}`)
    // NOTE: Otra forma de resolver este ejercicio es la siguiente, lo que pasa es quie de la manera en la que yo lo retorno es un objeto, el problema es que genero un nuevo array que es parImpar, sin embargo, al separarlo y buscar pares e impares pues no funcionaria, lo correcto es usar filter para buscar las coincidencias con los criterios  de par impar como lo realizo acontinuación
    const resultado = {
        pares: numero.filter(num => num % 2 === 0),
        impares: numero.filter(num => num % 2 !== 0)
    }
    return console.info(resultado
    )
}

acumularParesImprares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.clear();
// NOTE: Parte 8

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenamiento = (arr = undefined) => {
    if (arr === undefined) {
        return console.error('El arreglo esta vacio');
    }
    if (arr.length === 0) {
        return console.error('el arreglo esta vacio');
    }
    if (!Array.isArray(arr)) {
        return console.warn(`${arr} no es un arreglo`);
    }
    if (arr.some(elemento => typeof elemento !== 'number' || isNaN(elemento))) {
        return console.warn(`${arr} contiene elementos que no son números, revise y vuelva a intentar`)
    }
    const resultado = {
        /* NOTE: Si dejamos el codigo de la siguiente manera
         asc: arr.sort((a, b) => { return a - b }),
         des: arr.sort((a, b) => { return b - a }),
         aunque parezca que esta bien, lo que estamos haciendo al aplicar el metodo sort, es modificar el arr original, es por eso que nos regresara el ultimo acomodo  que en este caso es el de des para las dos que necesitamos}
         ejemplo: [3, 23, 12]
         asc:(3) [23, 12, 3]
         des:(3) [23, 12, 3]
         es por eso que utilizaremos el express[...arr] operator para poder  realizar una copia del arreglo original y no modificarlo
         */
        asc: [...arr].sort((a, b) => { return a - b }),
        des: [...arr].sort((a, b) => { return b - a }),
    }
    return console.info(resultado)
}
// ordenamiento([3, 23, 12])

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarRepetidos = (arr = undefined) => {
    if (arr === undefined) {
        return console.error('El arreglo esta vacio');
    }
    if (arr.length === 0) {
        return console.error('el arreglo esta vacio');
    }
    if (arr.length === 1) {
        return console.warn('Proporciona al menos dos valores en el arreglo')
    }
    if (!Array.isArray(arr)) {
        return console.warn(`${arr} no es un arreglo`);
    }
    /*Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto en orden de inserción. Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set. */
    const resultado = new Set(arr)
    /*opcion dos */
    const valorUnico = arr.filter((item, index, arr) => arr.indexOf(item) === index)
    return console.log(`Este es con el metodo Set ${resultado} esto utilizando filter ${valorUnico}`)
}
// eliminarRepetidos(["x", 10, "x", 2, "10", 10, true, true])

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const numeroPromedio = (arr = undefined) => {
    if (arr === undefined) {
        return console.error('El arreglo esta vacio');
    }
    if (arr.length === 0) {
        return console.error('el arreglo esta vacio');
    }
    if (!Array.isArray(arr)) {
        return console.warn(`${arr} no es un arreglo`);
    }
    let suma = 0;
    // for (let index = 0; index < arr.length; index++) {
    //     suma = (arr[index] + suma)
    // }
    // Esta es otra opcion que es mas facil de entender a comparacion de for, en esta el funcionamiento de for of ayuda a interar los valores y poder almacenarlos en diferente manera, ya que va moviendose de uno por uno
    for (const valor of arr) {
        suma += valor
    }
    /* la funcion anterior puede mejorarse utilizando un reducer  */
    const resultado = arr.reduce((total, num, index, arr) => {
        total += num;
        if (index === arr.length - 1) {
            return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
        }
        else {
            return total
        }
    })
    console.log(resultado)
}
// numeroPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 2])
// NOTE: Parte 9
/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */
class Pelicula {

    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id,
            this.titulo = titulo,
            this.director = director,
            this.estreno = estreno,
            this.pais = pais,
            this.generos = generos,
            this.calificacion = calificacion
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPaise(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);


    }
    static get ListaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }
    static generosAceptados() {
        return console.info(`Los géneros aceptados son:${Pelicula.ListaGeneros.join(", ")} `)
    }
    // validamos que la cadena no este vacia, que sea una cadena valida
    validarCadena(propiedad, valor) {
        if (!valor) {
            return console.warn(`${propiedad} "${valor}" esta vacio`);
        }
        if (typeof valor !== "string") {
            return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        }
        return true
    }
    // hacemos la validacion de que no exceda el número de caracteres permitidos
    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) {
            return console.error(`${propiedad} "${valor}" excede el número de varacteres permitidos (${longitud})`);
        }
        return true
    }
    validarNumero(propiedad, valor) {
        if (!valor) {
            return console.error(`${propiedad} "${valor}" esta vacio`)
        } if (typeof valor !== "number") {
            return console.error(`${propiedad} "${valor}" ingresado no es un número`)
        }
        return true
    }

    validarArreglo(propiedad, valor) {
        if (valor === undefined) {
            return console.error('El arreglo esta vacio');
        }
        if (valor.length === 0) {
            return console.error('el arreglo esta vacio');
        }
        if (!Array.isArray(valor)) {
            return console.warn(`${valor} no es un arreglo`);
        }
        if (valor.some(elemento => typeof elemento !== 'string')) {
            return console.warn(`${valor} contiene elementos que no es una cadena de texto, vuelve a intentarlo`)
        }
        return true;
    }
    validarIMDB(id) {
        if (this.validarCadena("IMDB Id", id)) {
            if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
                return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras mayúsculas, los 7 restantes números`);
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo)) {
            this.validarLongitudCadena("Título", titulo, 100)
        }
    }
    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("", director, 50)
        }
    }
    validarEstreno(estreno) {
        if (this.validarNumero("Año de estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.error(`El año de Estreno "${estreno}" no es válido, debe tener 4 digitos`);
            }
        }
    }
    validarPaise(pais) {
        this.validarArreglo("Páis", pais)
    }
    validarGeneros(generos) {
        if (this.validarArreglo("Géneros", generos)) {
            for (const genero of generos) {

                if (!Pelicula.ListaGeneros.includes(genero)) {
                    console.error(`Géneros incorrectos ${generos.join(", ")}`);
                    Pelicula.generosAceptados()
                }
            }
        }
    }
    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
                ? console.error(`La calificacion tienenque estrar en un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1)
        }
    }
    fichaTecnica() {
        console.info(`Ficha tecnica: \nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nEstreno:m "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros:"${this.generos.join(", ")}"\nCalificación: "${this.calificacion}\nIMDB id: "${this.id}"`)
    }
}
// Estos me muestran todos los tipos de peliculas que son aceptados  Pelicula.generosAceptados();
// const peli = new Pelicula({
//     id: "tt1234567",
//     titulo: "1234123451432513",
//     director: "1234567890",
//     estreno: 1234,
//     pais: ["México", "Francia"],
//     generos: ["Sport", "Action"],
//     calificacion: 7,
// })
// peli.fichaTecnica()
const misPelis = [
    {
        id: "tt1234567",
        titulo: "Programando",
        director: "youtube",
        estreno: 1234,
        pais: ["México", "Francia"],
        generos: ["Sport", "Action"],
        calificacion: 7,
    },

    {
        id: "tt1234567",
        titulo: "Entarda al mundo de la programacion",
        director: "curso en line",
        estreno: 1234,
        pais: ["México", "Francia"],
        generos: ["Sport", "Action"],
        calificacion: 7,
    },
    {
        id: "tt1234567",
        titulo: "Mi primero hola mundo",
        director: "Yo mero",
        estreno: 1234,
        pais: ["México", "Francia"],
        generos: ["Sport", "Action"],
        calificacion: 7,
    },
]
// Esto es igual a lo que hice arriba solo que aqui no creo una nueva variable para poder instanciarla
misPelis.forEach(el => new Pelicula(el).fichaTecnica())
