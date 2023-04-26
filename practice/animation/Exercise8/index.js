const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
let mouseX;
let mouseY;

function chgPos(t1, l1, t2, l2) {
    e1.style.top = `${t1}px`;
    e1.style.left = `${l1}px`;
    e2.style.top = `${t2}px`;
    e2.style.left = `${l2}px`;
}

function getMouseCods(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // console.log(mouseX, mouseY);
    if (mouseX < 309) {
        if (mouseY < 131 && mouseY > 0) {
            chgPos(-6, -16, -6, -16);
        }
        else if (mouseY < 206 && mouseY > 131) {
            chgPos(-5, -32, -6, -32);
        }
        else if (mouseY < 260 && mouseY > 206) {
            chgPos(-2, -32, -2, -32);
        }
        else if (mouseY < 330 && mouseY > 260) {
            chgPos(2.5, -29.7, 2.5, -29.7);
        }
        else if (mouseY > 330) {
            chgPos(2.0, -26.7, 2.0, -26.7);
        }
        else {
            chgPos(0, 0, 0, 0);
        }
    }
    else if (mouseX > 309 && mouseX < 512) {
        if (mouseX > 385 && mouseX < 430) {
            if (mouseY > 245) {
                chgPos(7.5, 6, 7.5, -6);
            }
            else if (mouseY < 206) {
                chgPos(-6, 8, -6, -8);
            }
            else {
                chgPos(0, 0, 0, 0);
            }
        }
        else {
            if (mouseY < 206) {
                chgPos(-8, 0, -8, 0);
            }
            else if (mouseY > 245) {
                chgPos(8, 0, 8, 0);
            }
            else {
                chgPos(0, 0, 0, 0);
            }
        }
    }
    else if (mouseX > 512) {
        if (mouseY > 0 && mouseY < 131) {
            chgPos(-6, 16, -6, 16);
        }
        else if (mouseY >= 131 && mouseY < 206) {
            chgPos(-5, 32, -6, 32);
        }
        else if (mouseY > 202 && mouseY < 245) {
            chgPos(-2, 32, -2, 32);
        }
        else if (mouseY >= 245 && mouseY < 278) {
            chgPos(4.5, 27, 4.5, 27);
        }
        else if (mouseY >= 278 && mouseY <= 288) {
            chgPos(6.5, 21, 6.5, 21);
        }
        else if (mouseY > 288) {
            chgPos(7, 15, 7, 15);
        }
        else {
            chgPos(0, 0, 0, 0);
        }
    }
    else {
        chgPos(0, 0, 0, 0);
    }
}
