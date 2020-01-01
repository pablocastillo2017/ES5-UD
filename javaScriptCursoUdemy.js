/* 
===== NOTACIONES DE PUNTOS Y CORCHETES===
var persona ={
    nombre: "Pablo",
    Apellido:"Castillo",
    Telefono: 123442,
    edad: 35,
    direccion:{
        Paises: "Chile",
        Region:"Octava region del bio-bio",
        Calle :{
            calle1:"los laureles #465",
            calle2 :"ballenas 233, higueras"
        }
    }
};


var campo ="Apellido";
var campo2 ="direccion";
var campo3 = "edad";

console.log(persona[campo]);
console.log(persona[campo2]);
console.log(persona[campo3]);
*/

/* === FUNCIONES===
//var a = 40;
function primeraFuncion(){
    var a = 20;
    console.log(a);
}

primeraFuncion();
*/

//==Parametros de Funciones==

/*function imprimir(nombre,apellido ){
    apellido = apellido||"xxx";

    console.log(nombre +" "+ apellido);
}

imprimir("juan");
*/
//== Funcion llamando un objeto=

/*function imprimir (persona){
    console.log(persona.nombre +" "+ persona.segundoNombre +" "+persona.apellido);
    persona.nombre ="Liam";// se cambio el valor , no es pablo. se cambio  a LIAM.

}

var objeto ={
    nombre :"Pablo",
    segundoNombre:"Nicolas",
    apellido:"Castillo",
    Edad :35
}
imprimir(objeto);

console.log(objeto);
*/

//===FUNCIONES CON VALORES DE RERTORNO==

/*function obtenerAleatorio(){
    return Math.random();
}
 console.log(obtenerAleatorio());

function obtenerNombre(){
    return "Pablo";
}
console.log(obtenerNombre() +" "+ "Castillo");


function esMayor05() {
    if (obtenerAleatorio() > 0.5 ) {
        return true;
    }else {
        return false;
    }
}
console.log(esMayor05());

if (obtenerAleatorio() > 0.5) {
    console.log("Es mayor a 0.5");
} else {
    console.log("Es Menor a 0.5");

}

// funcion que retorna un objeto. 
function crearPersona(nombre,apellido,edad) {
    return{
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}
var persona = crearPersona("Liam","Castillo",1)
console.log(persona);

var persona = crearPersona("Liam","Castillo",1)

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);


//crear una funcion dentro de otra funcion
function creaFuncion(){

    return function(nombre){
        console.log("me creoo!!"+ " " + nombre );

        return function(){
            console.log("SEGUNDA FUNCION");
        }
    }
};

var nuevaFuncion = creaFuncion();
var segundaFuncion= nuevaFuncion(persona.nombre);

segundaFuncion();*/

//===========FUNCIONES DE PRIMERA CLASE==========

/*function a(){    
    console.log("Funcion A")
};

a();

a.nombre ="Maria";
a.direccion={
    pais:"Chile",
    region:"8va",
    calle:"los laureles #465",
    edificio:{
        piso:"sexto piso",
        numero:232
    }
}

console.log(a.direccion,a.nombre);*/

//========METODOS Y OBJETOS==========


/*var persona ={
    nombre:"Maria",
    apellido:"Dubon",

    imprimirNombre: function(){
        console.log(this.nombre +" "+ this.apellido);

    },

    direccion:{
        pais:"Costa Rica",
        obtenerPais: function(){
            console.log(this.pais);

            var self = this;// apunta al this dentro del objeto direccion
            var nuevaDireccion = function(){

                console.log("La Direccion es :"+ self.pais);
            }

            nuevaDireccion();
        }
    }
};

persona.nombre= "Maximo";//se cambia la propiedad al objeto
persona.apellido="Castillo"; // se cambia la propiedad al objeto
persona.imprimirNombre();
persona.direccion.obtenerPais();*/

//-17. =======PALABRA RESERVADA NEW==========

/*function Persona(){
    this.nombre= "Pablo";
    this.apellido ="Mendoza";
    this.edad =35;
    this.altura = 1.83;
    this.contextura= "Gruesa";
    this.estado="Soltero";

    this.nombreYedad= function(){
        return this.nombre + " " + this.edad;
    }

    this.estadoYaltura =function(){
        return this.estado +" "+ this.altura;
    }
    
    this.nombreEdadEstado = function(){
        return this.nombre + " " + this.edad + " " + this.estado;
    }
}

var juan = new Persona();



console.log( juan.nombre+" "+ juan.apellido);
console.log ( juan.nombreYedad());
console.log(juan.estadoYaltura());
console.log( juan.nombreEdadEstado());*/

//18.- ===== JUEGO SENOR DE LOS ANILLOS========


/*function Jugador(nombre){
    this.nombre = nombre;
    this.pv =100;
    this.sp =100;


    this.curar = function(jugadorObjetivo){

        if (this.sp >= 40 ) {
            this.sp -= 40;
            jugadorObjetivo.pv = jugadorObjetivo.pv + 20;
           
        } else {
            console.info(this.nombre + " sin sp ");
            
        }
        this.estado = function(){
            console.info(this);
            console.info(jugadorObjetivo);

        }
        this.estado(jugadorObjetivo);
    }

    this.espadazo = function(jugadorObjetivo){
            if (jugadorObjetivo.pv >= 40) {
                jugadorObjetivo.pv -= 40;
            } else {
                jugadorObjetivo =0;
                console.error(jugadorObjetivo.nombre+"Esta echo mierdaa!");
                
            }
    }
    
    this.tirarFlecha = function(jugadorObjetivo){
       if (jugadorObjetivo.pv >40) {
            jugadorObjetivo.pv-= 40;
       } else {
           jugadorObjetivo.pv=0;
           console.error(jugadorObjetivo.nombre +"Esta muerto!");
       }

    }
    
}

var gandalf = new Jugador("Gandalf El BLACO");
var legolas = new Jugador("Legolas El Principe Del Bosque");


console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);*/

// 19.-======= PROTOTIPOS=========

/*function Persona(){
    this.nombre = "Pablo";
    this.apellido = "Castillo";
    this.edad = 35;
}

Persona.prototype.imprimirInfo = function () {
    console.log( this.nombre + " " + this.apellido + " "+ "("+ this.edad +")");
}

var pab = new Persona();
console.log(pab);
console.log(pab.imprimirInfo());*/


// 20.- ======= FUNCIONES ANONIMAS =======


/*(function(){

    var a=10;

console.log(a);

function cambiarA(){
    a=20;
}
cambiarA();
console.log(a);

})();

function ejecutarFuncion(fn) {
  if (fn()===1) {
      return true;
  } else {
      return false;
  }
};



console.log(
    ejecutarFuncion( function(){
    console.error("Funcion Ejecutada!!");
    return 0;
})
);*/


// 20.- ========FUNCIONES TYPEOF E INSTANCEOF====


/*function idendifica(param){
    console.log(typeof param);// Typeof
    console.log(param instanceof Persona); // instaceof
};

function Persona(){
    this.nombre="Juan";
    this.apellido="Castillo";
    
}
var pablo = new Persona();

idendifica(pablo);*/

// 20.- ===== ARREGLOS =======

/*var arr = [1,2,3,4,5];
console.log(arr);
console.log( arr[0], arr[4], arr[5]);

arr.reverse();
console.log(arr);

arr = arr.map(function(elem) { // .map < pasa por los elementos del arreglo
    elem*=elem;
    return elem;
});
console.log(arr);

arr = arr.map(Math.sqrt); //Math.sqrt > saca la raiz cuadrada 
console.log(arr);

arr = arr.join("-");// join < saca los elem del arr y los dega como Sting
console.log(arr);

arr = arr.split("-");// split > corta el elemento
console.log(arr);

arr.push("6");// push > agrega elementos nuevos a la ultima posicion arr
console.log(arr);

arr.unshift("0");//push > agrega elementos nuevos a la primera posicion arr
console.log(arr);

console.log(arr.toString());// separa los elementos por "comas"

var elimine = arr.pop();
console.log(arr,elimine );// Elimina el ultimo elem del arr

arr.splice(0,0,"10");// elimina desde la posicion 1 ,hasta la posi. 3 del arr
console.log(arr);//arr.splice(1,1,"10") se puede reemplazar un eleme por otro


arr = arr.slice(0,2);//
console.log(arr);*/

// 23.-  ======= ARREGLOS PARTE 2=======

/*var arr = [
    true,
    {
        nombre:"Fernando",
        apellido:"Herrera"
    },
    function(){
        console.log("Estoy viviendo en un arreglo");// funcion anonima
    },

    function(persona){
        console.log(persona.nombre + " "+ persona.apellido);
    },
    
    ["Fernando","Carlos","Hernando","Melissa",

        ["kapo","peter","Delicia"]
]

];
console.log(arr);
console.log(arr[1].nombre +" "+ arr[1].apellido);

arr[2]();// < para llamar a funcion anonima
arr[3] (arr[1]);

console.log( arr[4][4][0]);

var arreglo2 = arr[4][4];

arreglo2[1] ="jhon";

console.log(arreglo2);
console.log(arr);*/

//24.- ==== ARGUMENTS=====



/*function miFuncion(a,b,c,d) {
    if (arguments.length !==5 ) {
        console.error("La funcion necesita 4 parametros");
        alert("La funcion necesita 4 parametros");
        return;
    }
    //console.log(arguments);

    console.log(a+b+c+d);
}
 miFuncion(10,20,30,40);*/

 
 //-.25 === SOBRECARGA DE OPERADORES====

 /*function crearProducto(nombre,precio) {
    nombre= nombre || "Sin nombre" ;
    precio = precio || 0;

    console.log("Producto :",nombre + "Precio :",precio);

 }

 function crearProducto100(nombre) {
    crearProducto(nombre,100); 
 }

 function crearProductoCamisa(precio) {
     crearProducto("Camisa",precio);
 }

 crearProducto("Lapiz",100);
 crearProducto100("corrector");
 crearProductoCamisa(100);*/

 //25.- ====== Poliformismo=======


/*function determinarDatos(a) {
    if (a === undefined) {
        console.log("A es  undefined .. no se que hacer");
    }
    
    if ( typeof a ===  "number" ) {
                console.log("A es un numero y puedo hacer operaciones con numeros");

    }
    if ( typeof a ===  "string" ) {
        console.log("A es un TEXTO y puedo hacer operaciones con TEXTOS");

}

if ( typeof a ===  "object" ) {
    console.log("A es un OBJETO , pero puede ser cualkier cosa");

    if (a instanceof Number) {
        console.log("A es un OBJETO NUMERICO");
     
    }
}

}

var b = new Number(3);
console.log(b);

determinarDatos(b);*/

//.-27 =====FUNCIONES Y SU CONTEXTO====

/*function crearFunciones(){
    
    var arr = [];
    var numero=1;

    for (var numero = 1; numero  <=3; numero++) {
        
        arr.push(
            (function (numero) {
                return function () {
                    console.log(numero);
                }
            })(numero)

        )
    }


    return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();*/


//.-28 ===Objeto Tipo Numero===

/*var a =10.47584;

console.log(a.toPrecision(4));

a = 10;
a*=10000000000000;

a*=100000000000000000000000;

console.log(a);


var b = new Number("50 s");

console.log();
console.log(b.valueOf());*/

//.- 29 ===Objeto Boleeano===

//.- 30 ===Objeto String===

/*var b = "Herrera";

var a = new String("Fernando Herrrera Castillo");
console.log(a);
console.log(a.toUpperCase());
console.log(a.toLocaleLowerCase());

var i = a.indexOf("Castillo");
console.log(i);

i = a.lastIndexOf("n");
console.log(i);

var nombre = a.substr(0 , a.lastIndexOf("l"));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String

document.write("Hola Mundo");*/


//.- 31  ===== OBJETO FECHA =====

// var hoy = new Date();
// var fechaMilisegundos = new Date(0);
// var fFija = new Date(2016 ,9 ,17 ,23,10,15,1);

// console.log(hoy);
// console.log(fechaMilisegundos);
// console.log(fFija);

// console.log(hoy.getFullYear()+1);
// console.log(hoy.getMonth());
// console.log(hoy.getTimezoneOffset());

//https://momentjs.com/


// .- 32 ==== OPERACIONES CON FECHAS =======

/*var fecha = new Date(2016 ,9 ,20);

Date.prototype.sumarDias = function (dias) {
    this.setDate(this.getDate()+ dias);
    return this; //<<<<< PROTOTYPE
}

Date.prototype.sumarAnos = function (ano) {
    this.setFullYear(this.getFullYear()+ ano)
    return this; //<<<<< PROTOTYPE
}

console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha.sumarAnos(5));*/

//-.33  ==== OBJETO MATTH=====

/*var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.456789;

console.log(num1);
console.log(Math.round (num1*100)/100);


console.log(Math.floor(num1));

function randomEntre(min,max) {
   return Math.floor(Math.random()*(max-min+1)+min);
} //<<<<< PROTOTYPE


console.log(randomEntre(2,6));

console.log(Math.sqrt(8));
console.log(Math.pow(3,2))*/

// .-34 ====EXPRESIONES REGULARES=====

// var reg1 = RegExp("o");
// var reg2 = /a/;

// var texto ="HoOlA MUundoooi/u,,\nQue tal?";
// var texto ="La respuesta de la suma es: 45 + 60 = 105"    
// console.log(texto);
// var arr = texto.match(/[aeiou]..$/);
// var arr = texto.match(/[aeiou]/ig);
// var arr = texto.match(/o+/g);
// var arr = texto.match(/o*/g);
// var arr = texto.match(/\w{1,2}/ig);
// var arr = texto.match(/\d{1,}/g);
// var arr = texto.match(/\d{1,}|respuesta/g);

                                    // i = insensible
                                    // g = todas las apariciones
                                    // m = multilinea
                                    //[aeiou] haga match .cualquier vocal 
                                    // .. cualquier caracter
                                    // $ pero que este al final
                                    // \s  buscar cualquier
                                    // \w  buscar cualquier letra
                                    // \d buscar cualquier letra del texto
                                    // /a+/g buscar la "o" u cualquier cantidad de "o"
                                    // /o*/g buscar "o" y todas las demas letras
                                    // /L{2}/  debe aparecer al menos 2 veces
                                    // /\w{2,2}/ig cualquier letra que se 
                                    // repita 2 veces , en grupos de 2 
                                    //========== o ========
                                    // /\d{1,}|respuesta/g todos los decimales que aparescan
                                    // una vez a "n" veces o la palabra "respuesta"
// console.log(arr);


// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

// .- 36 ======= EL PUNTO Y COMA ES OPCIONAL ???

//.- 37 ===== COMENTARIOS EN JAVASCRIPT
// .- 38 === PALABRAS RESERVADAS

// .-39 ======MANEJO DE ERRORES======


//.- 39 =======MANEJO DE ERRORES=====

     //  MANDA UN OBJETO POR EL CATCH
// try {
    
//     throw{
//         nombreError:"Error Tipo 1",
//         accion:"Salir corriendo a echarle agua al servidor",
//         codError:1
//     }

//     console.log("Esta parte nunca se ejecuta");

// } 
// catch (e) {

//     console.log(e);
//     console.log(e.nombreError);
//     console.log(e.accion);
//     console.log(e.codError);
// }

// finally{
//     console.log("Finalmente");
// }


    //  MANDA UNA FUNCION POR EL CATCH
// try {
    
//  throw function () {
//      console.log("Funcion del Trow");
//  }

//  console.log("Esta parte nunca se ejecuta");


// } catch (error) {
//     error();
//     console.log("Parte de Catch");

// }

// finally{
//     console.log("FINALMENTE");

// }

// .- 41 ====Cookies- Instalacion en Windows

// .- 43 ====Funciones Especiales : Call(), Aplly() y Bind()

// var carro = {
//     color: "Blanco",
//     marca:"Mazda",
//     imprimir:function () {
//         var salida = this.marca + " - " + this.color;
//         return salida;
//     }
 
// }

// var carro2 ={
//     color:"Rojo",
//     marca:"Toyota"
// }

//     console.log(carro.imprimir());

//     var logCarro = function (arg1,arg2) {
//         console.log("Carro :",this.imprimir());
//         console.log("Argumentos :",arg1,arg2);
//         console.log("========================");
   
//     }
 //logCarro.bind(carro)<<< el'bind' setea el "this". apuntando al objeto "carro"

//     var logModeloCarro = logCarro.bind(carro);

// logModeloCarro("abc","xyz");

// "CALL" invoca la funcion, el primer parametro sera donde apunte el "This"
// y se envian de vuelta los parametros que pide la funcion logCarro()
// logModeloCarro.call(carro,"xxx","xxxxx");

// "Apply" es parecido al "Call", solo espera dos parametro
// el primer parametro es el objeto ,donde queremos que apunte el THIS
// el sugundo parametro es un "ARREGLO" que puede cantener x cantidad de parametros dentro.

// logModeloCarro.apply(carro,["adsdads","ajhsjahj"]);

// console.log(carro.imprimir.call(carro2));

// .-44 ===========IF... ELSE..===============

// var nota = 55;

// if (nota >=90) {
//     console.log("A");
    
// }else if (nota>=80 ) {
//     console.log("B");

// }else if (nota>=70 ) {
//     console.log("C");

// }else if (nota>=60 ) {
//     console.log("D");
// }else{
//     if (nota <50) {
//         console.log("-F");
//     }else{
//         console.log("+F");

//     }
// }

// console.log("Termino el Codigo.");

// var a =10;
// var b =30;

// var c = (a > b)? function () {
//     console.log(" A es mayor a B");
//     return a;
// }(): function () {
//     console.log(" B es mayor a A");
//     return b;
// }()
// console.log(c);

// //==========================

// var a =undefined;
// var b =20;

// var c = a || b;
// console.log(c);

// // cuando se envia un undefined

// function getNombre(nombre) {

//     var nom = nombre || null || "<sin nombre>" 
//     console.log(nom);
// }
// getNombre();

// .- 45 ========= SWITCH CONDICIONAL MUTLTIPLE======

// var mes = 2;

// switch (mes) {
//     case (10 > 5)? 40 :1: // ? si es verdadero 
//                         // : si no
//         console.log("Enero");
//     break;
        
//     case 2:
//         console.log("Febrero");
//     break;

//     case 3:
//         console.log("Marzo");
//     break;
    

//         default:
//                 console.log("Cualquier Otro Mes");
    
// }

// //-.46  ===================JSON=============

// var objetoJS ={
//     nombre:"Fernando",
//     edad:30
// };


// console.log("Objeto Literal",objetoJS);

// // JSON.stringify convierte un objeto a JSON
// var jsonString = JSON.stringify(objetoJS);

// console.log(jsonString);

// // http://json.parser.online.fr/  >> Verificar si el JSON es valido

// // JSON.parse convierte un JSON a un OBJETO
// var objetoDesdeJson = JSON.parse(jsonString);

// console.log(objetoDesdeJson);

// console.log(objetoDesdeJson.nombre);
// console.log(objetoDesdeJson.edad);

//.-47 ================ Ciclo While y Do While=========

// var i =0;

// while (i<10) {
//      i++;
    
//      if (i===5) {
//          continue;
//      }
//      console.log(i);
// }

// console.log("==============");

// var i = 0;
// do {
//     i++;

//     if (i ===5 ) {
//         break;
//     }
//     console.log(i);

// } while (i<10);

//.-48 =========== Ciclo For y For In - Reflejo===============

// for (var i=0;  i <=10; i++) {
 
//     if (i===5) {
//         break;
//     }
//     console.log(i);
// }

// var Persona = function () {
//     this.nombre = "Juan";
//     this.apellido = "Pineda";
//     this.edad = 35;
// }

// Persona.prototype.direccion = "San Jose"; // agrego propiedades
                                // a la funcion de primera clase

// var juan = new Persona(); // crea el objeto de tipo Persona

// for (prop in juan) {

//     console.log(juan.hasOwnProperty(prop));// para acceder solo a las propiedades
//                                         //de la funcion de primera clase

// if (!juan.hasOwnProperty(prop)) {// imprime solo la propiedad agregada
//                         // que no esta en la funcion de primera clase 
//        continue;
//   }
//     if (juan.hasOwnProperty(prop)) {// imprime solo la propiedad agregada
//         // en el PROTOTYPE solo "San Jose"
// continue;
// }

    
//    console.log(prop," : ", juan[prop]);
        
//     }

//.- ========Rotulando Ciclos==========

// for_principal:
// for (var i=1; i<= 5; i++){
//     console.log("i",i);

//     for_segundario:
//     for(var j =1; j<=5; j++){
//         console.log("j",j);
        
//         for(var x =1; x<=5; x++){
//             console.log("x",x);
        
//             break for_principal;
//         }

//     }
// }

//.- 50 ===========FUNCIONES DE TIEMPO===========

// setTimeout(function () {
    
//     console.log("Paso 1 segundo");
// },1000);

// var segundos =0;

// var intervalo = setInterval(function () {
//     segundos++;

//     console.log("Seg",segundos);

//     if (segundos ===4  ) {
//         clearInterval(intervalo);
//     }
// },2000)

// var juan = {
//     nombre:"Pablo",
//     edad:35,
//     imprimir:function () {

//         self = this;
//         setTimeout(function () {
//             console.log(self);
//             console.log(self.nombre,self.edad);
//         },1000)
//     }

// };

// juan.imprimir();

// .-51 ==========  EVENTOS 101 ============



// function evento(arg) {
//     console.log("Me Dispare");
//     console.log(arg);

// }

// var objeto = document.getElementById("objDemo")
// console.log(objeto)

// objeto.addEventListener("keypress",evento); // al presionar el teclado se dispara el evento



// .- 52 ========== bloquear click dereho de la pagina =========
 

// document.onmousedown = function (arg) {
//     alert("Click Bloqueado");
//     console.log("arg");
// }


// .-52 ============== Evento "On Submit"=========

// function validar() {

    // var nombre = document.getElementById("txtNombre").value;
    // var apellido = document.getElementById("txtApellido").value;

    // if ( nombre.length <1 && apellido.length <1) {
    //     return false;
    // }

        //http://phrogz.net/js/FormAutoValidate/formautovalidate_docs.html

    // if (nombre.length <1) {
    //     return false;
    // }
    
//     if (apellido.length <1) {
//         return false;
//     }

// return true;

// }

// console.log(window.location.search);

// console.log(window.location.search.split("&"));

// console.log( getParamURL("txtNombre"));
// console.log( getParamURL("txtApellido"));




























