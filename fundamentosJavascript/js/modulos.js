import password, { PI, Saludar } from './constantes.js'
import { aritemetica } from './aritmeticas.js'
console.log("Archivo de modulos")
console.log(password)
console.log(PI)
// en este ejemplo englobo las funciones en un objeto en el cual tengo todas las  funciones de esta manera puedo utilizarlas sin necesidad de exportarlas todas

console.log(aritemetica.sumar(7, 3))
// De esta manera podemos usar la clase para poder utilizarla donde queramos, en este caso solo es necesario asignarla a una constante y pedirla y de esta manera ya podemos hacer uso de la misma
const eventoSaludar = new Saludar();
eventoSaludar;