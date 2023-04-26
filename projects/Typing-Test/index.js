const userInp = document.getElementById("userInp");
const showWordBox = document.getElementById("showWordBox");
const count = document.getElementById("count");
const wpm = document.getElementById("wpm");
const cpm = document.getElementById("cpm");
const accuracy = document.getElementById("accuracy");

let alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function createRandomWord() {
    let maxWordLength = 10;
    let lengthOfWord = Math.trunc(Math.random() * maxWordLength + 1);
    let word = "";
    for (let i = 1; i <= lengthOfWord; i++) {
        let randIndex = Math.trunc(Math.random() * 26 - 1);
        word += alphaArr[randIndex];
    }
    return word;
}

function getNewWord() {
    let word = createRandomWord();
    showWordBox.innerHTML = `${word}`;
    userInp.value = "";
}

let totalWords = 1;
let correctWords = 0;
let incorrectWords = 0;
let charCount = 0;
let counterStarted = false;

userInp.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if (counterStarted == false) {
        counter();
        counterStarted = true;
    }
    if (keyName === "Enter") {
        if ((String(userInp.value)).trim() === showWordBox.innerHTML) {
            correctWords += 1;
            charCount += (userInp.value).length;
        }
        else {
            incorrectWords += 1;
        }
        getNewWord();
        totalWords += 1;
    }
})

async function counter() {
    count.innerHTML = `${count.innerHTML - 1}`;

    if (count.innerHTML == 0) {
        count.innerHTML = `00`;
        showInfo();
        showWordBox.innerHTML = ``;
        userInp.style.cursor = `no-drop`;
        userInp.placeholder = `Reload to try again.`;
        userInp.value = `Reload to try again.`;
        userInp.toggleAttribute("disabled");
        return;
    }
    await sleep(1000);
    counter();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showInfo() {
    wpm.innerHTML = `${correctWords}`;
    cpm.innerHTML = `${charCount}`;
    accuracy.innerHTML = `${Math.trunc((correctWords / totalWords) * 100)}%`;

    console.log("total words: ", totalWords);
    console.log("correct words: ", correctWords);
    console.log("incorrect words: ", incorrectWords);
    console.log("character count: ", charCount);
}