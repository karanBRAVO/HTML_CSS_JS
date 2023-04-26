setInterval(() => {
    window.alert("Choose the convenient method for payment.");
}, 20_000);

setTimeout(() => {
    window.alert("Choose the mode of payment.");
}, 1000);

let a = document.getElementById('method1');
let b = document.getElementById('method2');
let c = document.getElementById('con-btn');

function click1(a){
    console.log("User has the clicked First radio button");
}
function click2(b){
    console.log("User has the clicked second radio button");
}
function cont_clicked(c){
    console.log("User has continued to next page");
    return alert("You will be redirected to payment page.");
}
