// # Biglietto del treno

// - chiedere all'utente quanti chilometri vuole percorrere?
//     - dichiare una variabile per chilometri che vuole percorrere ed assegnare alla variabile il valore ricevuto
const chilometer = parseInt(prompt('quanti chilometri vuole percorrere?'))
console.log(chilometer)


// - chiedere all'utente quanti anni ha?
//     - dichiare una variabile per quanti anni ha ed assegnare alla variabile il valore ricevuto
const age = parseInt(prompt('quanti anni ha?'))
console.log(age)

// - definire il prezzo del biglietto in base ai chilometri
let price = (chilometer * 0.21)
console.log(price)
//     - dichiarare una variabile in base ai chilometri indicati dall'utente e sommare moltiplicare con (0.21€)
//   - SE l'utente è minorenne applicare sconto di 20%
//   - ALTRIMENTI SE utente è over 65 anni applicare sconto di 40%
// - stampare il prezzo del biglietto nella pagina
//   - recuperare dal DOM un elemento in base all'id
//   - modificare l'innerHTML con il prezzo del biglietto