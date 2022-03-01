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
const stampRisultato = document.querySelector(".risultato");
stamp.innerHTML = "Pari o Dispari Game!";

let OddEvens = document.querySelector("#choice");
let number = document.querySelector("#number");


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let btn = document.getElementById("submit");

btn.addEventListener("click", function () {

    let numberValue = parseInt(number.value);
    let OddEvensValue = OddEvens.value;

    let randomN = randomNumber(1, 5);
    let randomF = randomN + numberValue;
    console.log(randomF);



    function NumberOddEven(number) {
        let OddEventype = "Pari"

        if (number % 2 === 0) {
            OddEventype = "Pari"
        }

        else if (number % 2 === 1) {
            OddEventype = "Dispari"
        }

        return OddEventype;
    }



    let numberOddEvenType = NumberOddEven(randomF);


    if (numberOddEvenType == OddEvensValue) {
        stampRisultato.innerHTML = ("Hai vinto perchè" + " " + randomF + " " + "è" + " " + OddEvensValue + "!");
    }

    else if (numberOddEvenType !== OddEvensValue) {
        OddEvensValue = "Dispari"
        stampRisultato.innerHTML = ("Hai perso perchè" + " " + randomF + " " + "è" + " " + OddEvensValue + "!");
    }
})

