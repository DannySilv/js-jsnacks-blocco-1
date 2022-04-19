// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

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