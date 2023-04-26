// Button 1
const btn1 = document.getElementById("btn1");
const layer1 = document.getElementById("layer1");
btn1.addEventListener("mouseenter", () => {
  layer1.style.width = `126.5px`;
});
btn1.addEventListener("mouseleave", () => {
  layer1.style.width = `0px`;
});

// Button 2
const btn2 = document.getElementById("btn2");
const layer2 = document.getElementById("layer2");
btn2.addEventListener("mouseenter", () => {
  layer2.style.height = `45px`;
});
btn2.addEventListener("mouseleave", () => {
  layer2.style.height = `0px`;
});

// Button 3
const btn3 = document.getElementById("btn3");
const layer3 = document.getElementById("layer3");
btn3.addEventListener("mouseenter", () => {
  layer3.style.width = `127px`;
  layer3.style.height = `45px`;
});
btn3.addEventListener("mouseleave", () => {
  layer3.style.width = `0px`;
  layer3.style.height = `0px`;
});

// Button 4
const btn4 = document.getElementById("btn4");
const layer4 = document.getElementById("layer4");
btn4.addEventListener("mouseenter", () => {
  layer4.style.width = `127px`;
  btn4.style.borderTopRightRadius = `50%`;
  btn4.style.borderBottomRightRadius = `50%`;
});
btn4.addEventListener("mouseleave", () => {
    layer4.style.width = `0px`;
    btn4.style.borderTopRightRadius = `2px`;
    btn4.style.borderBottomRightRadius = `2px`;
});

// Button 5
const btn5 = document.getElementById("btn5");
const layer5 = document.getElementById("layer5");
btn5.addEventListener("mouseenter", () => {
  layer5.style.height = `45px`;
  btn5.style.borderBottomRightRadius = `50%`;
  btn5.style.borderBottomLeftRadius = `50%`;
});
btn5.addEventListener("mouseleave", () => {
  layer5.style.height = `0px`;
  btn5.style.borderBottomRightRadius = `2px`;
  btn5.style.borderBottomLeftRadius = `2px`;
});

// Button 6
const btn6 = document.getElementById("btn6");
const layer6_1 = document.getElementById("layer6_1");
const layer6_2 = document.getElementById("layer6_2");
const layer6_3 = document.getElementById("layer6_3");
const layer6_4 = document.getElementById("layer6_4");
const layer6_5 = document.getElementById("layer6_5");
btn6.addEventListener("mouseenter", () => {
    layer6_1.style.width = `15px`;
    layer6_1.style.height = `15px`;
    layer6_2.style.width = `15px`;
    layer6_2.style.height = `15px`;
    layer6_3.style.width = `15px`;
    layer6_3.style.height = `15px`;
    layer6_4.style.width = `15px`;
    layer6_4.style.height = `15px`;
    layer6_5.style.width = `calc(127px - 2 * 10px)`;
    layer6_5.style.height = `calc(45px - 2 * 11px)`;
})
btn6.addEventListener("mouseleave", () => {
    layer6_1.style.width = `0px`;
    layer6_1.style.height = `0px`;
    layer6_2.style.width = `0px`;
    layer6_2.style.height = `0px`;
    layer6_3.style.width = `0px`;
    layer6_3.style.height = `0px`;
    layer6_4.style.width = `0px`;
    layer6_4.style.height = `0px`;
    layer6_5.style.width = `0px`;
    layer6_5.style.height = `0px`;
})

// Button 7
const btn7 = document.getElementById("btn7");
const layer7_1 = document.getElementById("layer7_1");
const layer7_2 = document.getElementById("layer7_2");
const layer7_3 = document.getElementById("layer7_3");
const layer7_4 = document.getElementById("layer7_4");
const layer7_5 = document.getElementById("layer7_5");
btn7.addEventListener("mouseenter", () => {
    btn7.style.border = "2px solid transparent";
    // width and height
    layer7_5.style.width = `calc(127px - 2 * 10px)`;
    layer7_5.style.height = `calc(45px - 2 * 11px)`;
    // translate
    layer7_1.style.transform = `translate(0, 0)`;
    layer7_2.style.transform = `translate(calc(127px - 15px), 0px)`;
    layer7_3.style.transform = `translate(0, calc(45px - 15px))`;
    layer7_4.style.transform = `translate(calc(127px - 15px), calc(45px - 15px))`;
    layer7_5.style.transform = `translate(10px, 10px)`;
    // background color
    layer7_1.style.background = `black`;
    layer7_2.style.background = `black`;
    layer7_3.style.background = `black`;
    layer7_4.style.background = `black`;
    layer7_5.style.background = `black`;
})
btn7.addEventListener("mouseleave", () => {
    btn7.style.border = "2px solid black";
    // width and height
    layer7_5.style.width = `0px`;
    layer7_5.style.height = `0px`;
    // translate
    layer7_1.style.transform = `translate(0, 0)`;
    layer7_2.style.transform = `translate(0, 0)`;
    layer7_3.style.transform = `translate(0, 0)`;
    layer7_4.style.transform = `translate(0, 0)`;
    layer7_5.style.transform = `translate(0, 0)`;
    // background color
    layer7_1.style.background = `transparent`;
    layer7_2.style.background = `transparent`;
    layer7_3.style.background = `transparent`;
    layer7_4.style.background = `transparent`;
    layer7_5.style.background = `transparent`;
})
