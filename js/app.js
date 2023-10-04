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
//     - dichiarare una variabile in base ai chilometri indicati dall'utente e sommare moltiplicare con (0.21€)
let price = (chilometer * 0.21)
console.log(price)

//   - SE l'utente è minorenne applicare sconto di 20%
if (age < 18) { 
    // - dichiare una variabile ed applicare l'sconto in base all'utente
    let miner = (price * (20 / 100))
    console.log(miner)
    // - dichiare una variabile e sottrare dal prezzo base la somma dello sconto
    let minerPrice = (price - miner)
    console.log(minerPrice)
} else if (age > 65) {

//   - ALTRIMENTI SE utente è over 65 anni applicare sconto di 40%
    // - dichiare una variabile ed applicare l'sconto in base all'utente
    let overAge = (price * (40 / 100))
    console.log(overAge)
    // - dichiare una variabile e sottrare dal prezzo base la somma dello sconto
    let overAgePrice = (price - overAge)
    console.log(overAgePrice)
}
// - stampare il prezzo del biglietto nella pagina
//   - recuperare dal DOM un elemento in base all'id
//   - modificare l'innerHTML con il prezzo del biglietto