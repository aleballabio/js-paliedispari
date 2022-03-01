/*

//Palindromo

const stamp = document.querySelector(".stamp");

const wordUser = prompt("Inserisci una parola");

const arrWordUser = StrToArray(wordUser);


//String to Array DO NOT CHANGE IT

function StrToArray(word) {
    const arrWord = [];

    for (let times = 0; times < word.length; times++) {
        let char = word[times]
        arrWord.push(char);
    }

    return arrWord;
}

//Reverse an Array
const arrWordReversed = arrWordUser.reverse();


if (arrWordUser == arrWordReversed) {
    stamp.innerHTML = ("La tua parola è palindroma.");

}

else {
    stamp.innerHTML = ("La tua parola non è palindroma.");
}

*/

const stamp = document.querySelector(".stamp");
stamp.innerHTML = "Pari o Dispari Game!";

let OddEvens = document.querySelector("#choice");
let number = document.querySelector("#number");
let numberV = parseInt(number.value);

function randomNumber(max, min) {
    Math.floor(Math.random() * (max - min + 1)) + min;
}

let btn = document.getElementById("submit");

btn.addEventListener("click", function () {
    let randomN = randomNumber(1, 5);
    let randomF = randomN + numberV;
    console.log(randomF)
})
