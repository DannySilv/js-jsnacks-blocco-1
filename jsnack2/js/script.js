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