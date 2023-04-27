console.log("Image Slider");

const moveBack = document.getElementById("moveBack");
const moveForward = document.getElementById("moveForward");
const slideShow = document.getElementById("slideShow");

function scrollSlider(x_pos) {
	slideShow.scrollTo(x_pos, 0);	
}

let scrollbar_x_pos = 0;
let scrollingVal = 235;
let finalPos = scrollingVal * 7;
let initialPos = 0;

scrollSlider(scrollbar_x_pos);

moveBack.addEventListener("click", () => {
	scrollbar_x_pos -= scrollingVal;
	if (scrollbar_x_pos < initialPos) {
		scrollbar_x_pos = finalPos;
	}
	scrollSlider(scrollbar_x_pos);
});

moveForward.addEventListener("click", () => {
	scrollbar_x_pos += scrollingVal;
	if (scrollbar_x_pos > finalPos) {
		scrollbar_x_pos = initialPos;
	}
	scrollSlider(scrollbar_x_pos);
});

