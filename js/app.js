// # Biglietto del treno

// - chiedere all'utente quanti chilometri vuole percorrere?
//     - dichiare una variabile per chilometri che vuole percorrere ed assegnare alla variabile il valore ricevuto

const chilometer = parseInt(prompt('quanti chilometri vuole percorrere?'));
console.log(chilometer);


// - chiedere all'utente quanti anni ha?
//     - dichiare una variabile per quanti anni ha ed assegnare alla variabile il valore ricevuto

const age = parseInt(prompt('quanti anni ha?'));
console.log(age);

// - definire il prezzo del biglietto in base ai chilometri
//     - dichiarare una variabile in base ai chilometri indicati dall'utente e sommare moltiplicare con (0.21€)

let price = (chilometer * 0.21);
console.log(price);
let roundedPrice = Math.round((price + Number.EPSILON) * 100) / 100;
console.log(roundedPrice);

// - stampare il prezzo del biglietto nella pagina
//   - recuperare dal DOM un elemento in base all'id

const priceDomElement = document.getElementById('price');

let priceFinal;

//   - SE l'utente è minorenne applicare sconto di 20%
if (age < 18) { 

    // - dichiare una variabile ed applicare l'sconto in base all'utente
    let miner = (roundedPrice * (20 / 100));
    console.log(miner);
    let roundedMiner = Math.round((miner + Number.EPSILON) * 100) / 100;
    console.log(roundedMiner);
    
    // - dichiare una variabile e sottrare dal prezzo base la somma dello sconto

    priceFinal = (roundedPrice - roundedMiner)
    console.log(priceFinal)

//   - ALTRIMENTI SE utente è over 65 anni applicare sconto di 40%
} else if (age > 65) {

    // - dichiare una variabile ed applicare l'sconto in base all'utente
    let overAge = (roundedPrice* (40 / 100));
    console.log(overAge);
    let roundedOverAge = Math.round((overAge + Number.EPSILON) * 100) / 100;
    console.log(roundedOverAge);

// - dichiare una variabile e sottrare dal prezzo base la somma dello sconto

    priceFinal = (roundedPrice - roundedOverAge)
    console.log(priceFinal)

// - ALTRIMENTI indicare il prezzo totale
} else {
    priceFinal = roundedPrice;
}
// - modificare l'innerHTML con il prezzo del biglietto
document.getElementById('price').innerHTML = priceFinal;
