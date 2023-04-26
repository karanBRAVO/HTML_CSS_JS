console.log("Search box");

const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const name4 = document.getElementById("name4");
const name5 = document.getElementById("name5");
const name6 = document.getElementById("name6");
const name7 = document.getElementById("name7");
const name8 = document.getElementById("name8");
const name9 = document.getElementById("name9");
const name10 = document.getElementById("name10");

const about1 = document.getElementById("about1");
const about2 = document.getElementById("about2");
const about3 = document.getElementById("about3");
const about4 = document.getElementById("about4");
const about5 = document.getElementById("about5");
const about6 = document.getElementById("about6");
const about7 = document.getElementById("about7");
const about8 = document.getElementById("about8");
const about9 = document.getElementById("about9");
const about10 = document.getElementById("about10");

let arr_name = [
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
    name9,
    name10,
];
let arr_about = [
    about1,
    about2,
    about3,
    about4,
    about5,
    about6,
    about7,
    about8,
    about9,
    about10,
];

function show() {
    let input = document.querySelector("input").value;

    for (let i = 0; i < arr_name.length; i++) {
        if (input.length > 0 && input.toLowerCase() == arr_name[i].textContent.toLowerCase()) {
            arr_about[i].style.display = "flex";
        }
        else if (input.length > 0 && input.toLowerCase() != arr_name[i].innerText.toLowerCase()) {
            arr_about[i].style.display = "none";
        }
        else if (input.length == 0) {
            arr_about[i].style.display = "flex";
        }
    };
};
