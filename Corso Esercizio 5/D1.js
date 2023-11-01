/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*
Number: numeri interi o decimali.
Boolean: valori di verità (true o false).
Undefined: valore assegnato a una variabile non inizializzata.
Null: valore assegnato a una variabile vuota.
String: sequenze di caratteri racchiuse tra apici singoli o doppi.*/




/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var mioNome = "Fiippo S.";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = 12;
var numero2 = 20;
var somma = numero1 + numero2;

console.log(somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var X = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

mioNome = "Scarfò";
console.log(mioNome);
/*const valFisso = 999;
valFisso = 333;

console.log(valFisso);*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero4 = 4;

console.log(numero4 - X);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var nome1 = "john";
var nome2 = "John";

console.log(nome1 === nome2);

console.log(nome1 === "john"); //errata

//console.log(nome1 === nome2).toLowerCase();

/*

//Prove con LET:
let mioNome = "Fiippo S.";
//
let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

console.log(somma);
//
let X = 12;
//
mioNome = "Scarfò";
console.log(mioNome); */
/*const valFisso = 999;
valFisso = 333;

console.log(valFisso);*/
//
/*let numero4 = 4;

console.log(numero4 - X);
//
let nome1 = "john";
let nome2 = "John";

console.log(nome1 === nome2);

console.log(nome1 === "john"); //errata


//console.log(nome1 === nome2).toLowerCase(); */

