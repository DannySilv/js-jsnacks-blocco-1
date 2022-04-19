// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const number = [];
const userNumber = prompt("Dammi un numero")

for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("Dammi un numero"))
    console.log(userNumber);
    if (userNumber % 2 != 0) {
        number.push(userNumber);
    }
}
console.log(number); 