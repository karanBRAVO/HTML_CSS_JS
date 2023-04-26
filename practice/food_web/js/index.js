console.log('Hello World!');

const signInContainer = document.getElementById('signInContainer');
const tpDisplayS = document.getElementById('tpDisplayS');
const loginContainer = document.getElementById('loginContainer');
const tpDisplayL = document.getElementById('tpDisplayL');

const div1 = document.getElementById('division1');
const div2 = document.getElementById('division2');

function revertL() {
    signInContainer.style.display = 'flex';
    loginContainer.style.display = 'none';
    tpDisplayS.style.display = 'flex';
    tpDisplayL.style.display = 'none';
    div2.classList.add('bg-color-g');
    div1.classList.add('bg-color-w');
    div2.classList.remove('bg-color-w');
    div1.classList.remove('bg-color-g');
}
function revertS() {
    signInContainer.style.display = 'none';
    loginContainer.style.display = 'flex';
    tpDisplayS.style.display = 'none';
    tpDisplayL.style.display = 'flex';
    div2.classList.add('bg-color-w');
    div1.classList.add('bg-color-g');
    div2.classList.remove('bg-color-g');
    div1.classList.remove('bg-color-w');
}