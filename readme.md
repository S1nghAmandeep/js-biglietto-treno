# Biglietto del treno

- chiedere all'utente quanti chilometri vuole percorrere?
    - dichiare una variabile per chilometri che vuole percorrere ed assegnare alla variabile il valore ricevuto
- chiedere all'utente quanti anni ha?
    - dichiare una variabile per quanti anni ha ed assegnare alla variabile il valore ricevuto
- definire il prezzo del biglietto in base ai chilometri
    - dichiarare una variabile in base ai chilometri indicati dall'utente e sommare moltiplicare con (0.21€)
- stampare il prezzo del biglietto nella pagina
  - recuperare dal DOM un elemento in base all'id
  - SE l'utente è minorenne applicare sconto di 20%
    - dichiare una variabile ed applicare l'sconto in base all'utente
    - dichiare una variabile e sottrare dal prezzo base la somma dello sconto
  - ALTRIMENTI SE utente è over 65 anni applicare sconto di 40%
    - dichiare una variabile ed applicare l'sconto in base all'utente
    - dichiare una variabile e sottrare dal prezzo base la somma dello sconto
  - ALTRIMENTI indicare il prezzo totale
  - modificare l'innerHTML con il prezzo del biglietto