//Lista de compras

//const { getLinterInternalSlots } = require("eslint/lib/linter/linter");

//listaDeCompras [3] = 'Tomates';
//ListaDeCompras [1] = 'Lechuga';

//Ver Lista de Compras

//let elementoDelArray = listaDeCompras [1];
//console.log(elementoDelArray);

//Lenght

//let nombres = ['Matias', 'Maria', 'Diego', 'Rosa'] . length;
//console.log(nombres);



//Agregar un elemento a un Arreglo
//let colores = ['amarillo', 'azul']
//colores.push('rojo');
//console.log(colores);

// Agregar un elemento al principo
//let colores = ['amarillo', 'azul', 'rojo']
//colores.unshift('verde');
//console.log(colores);


//como eliminar el ultimo elemento
//let colores = ['amarillo', 'azul', 'rojo', 'verde']
//colores.pop();
//console.log(colores);

//Como eliminar el primer elemento
//let colores = ['amarillo', 'azul', 'rojo', 'verde']
//colores.shift();
//console.log(colores);


//Como saber si se agrego un elemento (esto solo da un una respuesta en boleano)
//let pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
//let IncluyeDali = pintores.includes('Dali');
//console.log(IncluyeDali);

//let pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
//let IncluyeDali = pintores.includes('Monet');
//console.log(IncluyeDali);
//respuesta FALSE


//COMO SABER SI TODOS LOS ELEMENTOS HAN SIDO MODIFICADOS

//let numeros = [5, 6, 8, 9];
//let cumplenCondicion = numeros.every((num) => {
//    return num > 5;
//});

//console.log(cumplenCondicion);
// respuesta FALSE


//let numeros = [10, 6, 8, 9];
//let cumplenCondicion = numeros.every((num) => {
//   return num > 5;
//});

//console.log(cumplenCondicion);
//RESPUESTA TRUE



//METODOS MAS AVANZADOS

//METODO SPLIT (SEPARAR)(esto permite transformar STRING en ARRREGLOS y ARREGLOS en STRING)
//let palabra = "Henri";
//let palabraSeparada = palabra.split('');
//palabraSeparada.pop();
//palabraSeparada.push('y');
//console.log(palabraSeparada);

//para juntar los elementos
//let palabraArreglada = palabraSeparada.join('');
//console.log(palabraArreglada);



// METODO forEach (PARA CADA UNO, manera individual, no hace ningun cambio sobre ello)
//let numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log (num));
//numeros.forEach((num) => {
//   if (num === 3) {
//        console.log(num);
//    }
//});

// METODO MAP agrega un elemeneto a cada uno de ellos
//let masUno = numeros.map((num) =>{
//    return num +1;
//});
//console.log(masUno);


//BUCLES ==> SECUENCIA DE INSTRUCCIONES A LA QUE SE LE ASIGNA UNA CONDICION.
// SE EJECUTA HASTA QUE LA CONDICION ASIGNADA DEJE DE CUMPLIRSE.

//BUCLE FOR (numero determinado de repeticiones, se repetira una vez por cada elemento que el arreglo tenga)
//let arr = [1,2,3,4,5];
//for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//function econtrarLetraP(string) {
//let letras = string.split('');

//for (let i = 0; i < letras.length; i++) {
//    if (letras[i] === 'p') {
//        console.log('Si contiene a P');
//    }
//}
//}

//econtrarLetraP('Javascript');
//econtrarLetraP('Henry');



//BUCLE WHITE (condiciones especificas, mientras la especificaciones se cumplan el bucle seguira ejecujandose)
//let arr = [];

//while(arr.length < 5) {
//    arr.push('BOOM');
//}

//console.log(arr);



//BUCLE INFINITO
//let arr = [];
// tener cuidado con este bucle esto consume muchos recursos de la computadora, por lo que hay que intertar evitarlos.
