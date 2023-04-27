console.log("Digital Clock");

// hours
// upper half
const hrsTenth_upperhalf_top = document.getElementById("hrsTenth_upperhalf_top");
const hrsTenth_upperhalf_left = document.getElementById("hrsTenth_upperhalf_left");
const hrsTenth_upperhalf_right = document.getElementById("hrsTenth_upperhalf_right");
const hrsTenth_mid = document.getElementById("hrsTenth_mid");
const hrsTenth_lowerhalf_top = document.getElementById("hrsTenth_lowerhalf_top");
const hrsTenth_lowerhalf_left = document.getElementById("hrsTenth_lowerhalf_left");
const hrsTenth_lowerhalf_right = document.getElementById("hrsTenth_lowerhalf_right");
// lower half
const hrsOnes_upperhalf_top = document.getElementById("hrsOnes_upperhalf_top");
const hrsOnes_upperhalf_left = document.getElementById("hrsOnes_upperhalf_left");
const hrsOnes_upperhalf_right = document.getElementById("hrsOnes_upperhalf_right");
const hrsOnes_mid = document.getElementById("hrsOnes_mid");
const hrsOnes_lowerhalf_top = document.getElementById("hrsOnes_lowerhalf_top");
const hrsOnes_lowerhalf_left = document.getElementById("hrsOnes_lowerhalf_left");
const hrsOnes_lowerhalf_right = document.getElementById("hrsOnes_lowerhalf_right");

// minutes
// upper half
const minTenth_upperhalf_top = document.getElementById("minTenth_upperhalf_top");
const minTenth_upperhalf_left = document.getElementById("minTenth_upperhalf_left");
const minTenth_upperhalf_right = document.getElementById("minTenth_upperhalf_right");
const minTenth_mid = document.getElementById("minTenth_mid");
const minTenth_lowerhalf_top = document.getElementById("minTenth_lowerhalf_top");
const minTenth_lowerhalf_left = document.getElementById("minTenth_lowerhalf_left");
const minTenth_lowerhalf_right = document.getElementById("minTenth_lowerhalf_right");
// lower half
const minOnes_upperhalf_top = document.getElementById("minOnes_upperhalf_top");
const minOnes_upperhalf_left = document.getElementById("minOnes_upperhalf_left");
const minOnes_upperhalf_right = document.getElementById("minOnes_upperhalf_right");
const minOnes_mid = document.getElementById("minOnes_mid");
const minOnes_lowerhalf_top = document.getElementById("minOnes_lowerhalf_top");
const minOnes_lowerhalf_left = document.getElementById("minOnes_lowerhalf_left");
const minOnes_lowerhalf_right = document.getElementById("minOnes_lowerhalf_right");

// seconds
// upper half
const secTenth_upperhalf_top = document.getElementById("secTenth_upperhalf_top");
const secTenth_upperhalf_left = document.getElementById("secTenth_upperhalf_left");
const secTenth_upperhalf_right = document.getElementById("secTenth_upperhalf_right");
const secTenth_mid = document.getElementById("secTenth_mid");
const secTenth_lowerhalf_top = document.getElementById("secTenth_lowerhalf_top");
const secTenth_lowerhalf_left = document.getElementById("secTenth_lowerhalf_left");
const secTenth_lowerhalf_right = document.getElementById("secTenth_lowerhalf_right");
// lower half
const secOnes_upperhalf_top = document.getElementById("secOnes_upperhalf_top");
const secOnes_upperhalf_left = document.getElementById("secOnes_upperhalf_left");
const secOnes_upperhalf_right = document.getElementById("secOnes_upperhalf_right");
const secOnes_mid = document.getElementById("secOnes_mid");
const secOnes_lowerhalf_top = document.getElementById("secOnes_lowerhalf_top");
const secOnes_lowerhalf_left = document.getElementById("secOnes_lowerhalf_left");
const secOnes_lowerhalf_right = document.getElementById("secOnes_lowerhalf_right");

// id_arr = [upHalf_top, upHalf_left, upHalf_right, lowerHalf_top, lowerHalf_left, lowerHalf_right, mid];

let idDict = {
	hrsTenth: [hrsTenth_upperhalf_top, hrsTenth_upperhalf_left, hrsTenth_upperhalf_right,
				 hrsTenth_lowerhalf_top, hrsTenth_lowerhalf_left, hrsTenth_lowerhalf_right,
				 hrsTenth_mid],
	hrsOnes: [hrsOnes_upperhalf_top, hrsOnes_upperhalf_left, hrsOnes_upperhalf_right,
				 hrsOnes_lowerhalf_top, hrsOnes_lowerhalf_left, hrsOnes_lowerhalf_right,
				hrsOnes_mid],
	minTenth: [minTenth_upperhalf_top, minTenth_upperhalf_left, minTenth_upperhalf_right,
				 minTenth_lowerhalf_top, minTenth_lowerhalf_left, minTenth_lowerhalf_right,
				minTenth_mid],
	minOnes: [minOnes_upperhalf_top, minOnes_upperhalf_left, minOnes_upperhalf_right,
				 minOnes_lowerhalf_top, minOnes_lowerhalf_left, minOnes_lowerhalf_right,
				minOnes_mid],
	secTenth: [secTenth_upperhalf_top, secTenth_upperhalf_left, secTenth_upperhalf_right,
				 secTenth_lowerhalf_top, secTenth_lowerhalf_left, secTenth_lowerhalf_right,
				  	secTenth_mid],
	secOnes: [secOnes_upperhalf_top, secOnes_upperhalf_left, secOnes_upperhalf_right,
				 secOnes_lowerhalf_top, secOnes_lowerhalf_left, secOnes_lowerhalf_right,
				  secOnes_mid]
};

let colorDict = {
	0: ["black", "black", "black", "black", "black", "black", "white"],
	1: ["white", "white", "black", "white", "white", "black", "white"],
	2: ["black", "white", "black", "black", "black", "white", "black"],
	3: ["black", "white", "black", "black", "white", "black", "black"],
	4: ["white", "black", "black", "white", "white", "black", "black"],
	5: ["black", "black", "white", "black", "white", "black", "black"],
	6: ["black", "black", "white", "black", "black", "black", "black"],
	7: ["black", "white", "black", "white", "white", "black", "white"],
	8: ["black", "black", "black", "black", "black", "black", "black"],
	9: ["black", "black", "black", "black", "white", "black", "black"]
};

function changeColor(id_val, color) {
	id_val.style.background = color;
	id_val.style.borderColor = color;
}

function makeChanges_all(id_arr, colorArr) {
	if (id_arr.length === colorArr.length) {
		for (let i = 0; i < id_arr.length; i++) {
			changeColor(id_arr[i], colorArr[i]);
		}
	}
}

function display(idDict, key1, key2, colorDict, num) {
	if (num < 10) {
		makeChanges_all(idDict[key1], colorDict[0]);
	}
	else {
		makeChanges_all(idDict[key1], colorDict[(parseInt)(num / 10)]);
	}
	makeChanges_all(idDict[key2], colorDict[num % 10]);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function mainLogic(idDict, colorDict) {
	while (true) {
		let date = new Date();
		let hrs = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();

		display(idDict, "hrsTenth", "hrsOnes", colorDict, hrs);
		display(idDict, "minTenth", "minOnes", colorDict, min);
		display(idDict, "secTenth", "secOnes", colorDict, sec);		
		
		await sleep(1000);
	}
}
mainLogic(idDict, colorDict);

