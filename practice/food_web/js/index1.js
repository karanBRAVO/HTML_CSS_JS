// let name = window.prompt("What is your name:",'user');
// if (name != null){
//     window.alert("Hello " + name + " Welcome to foodcart.com")
// }

body = document.getElementById('top');
paymentPage = document.getElementById('pay_page');
loginPage = document.getElementById('login_food');

function newScreen() {
    body.style.visibility = "hidden";
    paymentPage.style.visibility = "visible";
}
function Close() {
    why = window.prompt("Why did you canceled the order?", "(high price)");
    if (why != null) {
        body.style.visibility = "visible";
        paymentPage.style.visibility = "hidden";
        window.alert("Must Choose another one.");
    } else {
        return newScreen()
    }
}
function login() {
    loginPage.style.visibility = "visible";
    body.style.visibility = "hidden";
}
function clsLogin() {
    loginPage.style.visibility = "hidden";
    body.style.visibility = "visible";
}