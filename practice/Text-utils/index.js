const userInp = document.getElementById("userInp");

function setText(text) {
    userInp.value = text;
}

function getText() {
    return userInp.value;
}

const btn_uppercase = document.getElementById("btn_uppercase");
const btn_lowercase = document.getElementById("btn_lowercase");
const btn_createArray_ofChars = document.getElementById("btn_createArray_ofChars");
const btn_createArray_ofWords = document.getElementById("btn_createArray_ofWords");

function convert_TO_uppercase(text) {
    return String(text).toUpperCase();
}

btn_uppercase.addEventListener("click", () => {
    setText(convert_TO_uppercase(getText()));
})

function convert_TO_lowercase(text) {
    return String(text).toLowerCase();
}

btn_lowercase.addEventListener("click", () => {
    setText(convert_TO_lowercase(getText()));
})

function convert_TO_array_ofChars(text) {
    let arr = [];
    for (let i = 0; i < String(text).length; i++) {
        arr.push(`"${text[i]}"`);
    }
    return arr;
}

btn_createArray_ofChars.addEventListener("click", () => {
    setText(`[${convert_TO_array_ofChars(getText())}]`);
})

function convert_TO_array_ofWords(text) {
    let arr = [];
    for (let i = 0; i < String(text).length; i++) {
        if (arr.length == 0) {
            arr.push(`"${text[i]}`);
        }
        else {
            if (text[i] == " ") {
                arr[arr.length - 1] = String(arr[arr.length - 1]).concat(`"`);
                arr.push(`"`);
            }
            else {
                arr[arr.length - 1] = String(arr[arr.length - 1]).concat(`${text[i]}`);
            }
        } 
        
        if (i == String(text).length - 1) {
            arr[arr.length - 1] = String(arr[arr.length - 1]).concat(`"`);
        }
    }
    return arr;
}

btn_createArray_ofWords.addEventListener("click", () => {
    setText(`[${convert_TO_array_ofWords(getText())}]`);
})