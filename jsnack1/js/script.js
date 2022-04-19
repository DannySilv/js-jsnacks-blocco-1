const firstWord = prompt("Dammi la prima parola");
const secondWord = prompt("Dammi la seconda parola");

let result;
if (firstWord.length < secondWord.length) {
    result = `${firstWord} ${secondWord}`;
} else if (firstWord.length > secondWord.length) {
    result = `${secondWord} ${firstWord}`;
} else if (firstWord.length == secondWord.length) {
    result = ("Le due parole contengono lo stesso numero di lettere")
}                             