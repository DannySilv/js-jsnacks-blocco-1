// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt("Dammi un numero di 4 cifre");
console.log(userNumber);
let sum = 0;

while (userNumber) {
    sum += userNumber % 10;
    console.log(sum);
    userNumber = Math.floor(userNumber / 10);
    console.log(userNumber);
}

console.log(sum)