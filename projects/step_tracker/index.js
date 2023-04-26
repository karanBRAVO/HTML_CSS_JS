console.log("Step Tracker");

const optionsContainer_imageContainer_button = document.getElementById("optionsContainer_imageContainer_button");
const optionsContainer_options = document.getElementById("optionsContainer_options");
const hiddenLayer = document.getElementById("hiddenLayer");
const dayLink_button = document.getElementById("dayLink_button");
const daySpan = document.getElementById("daySpan");
const weekLink_button = document.getElementById("weekLink_button");
const weekSpan = document.getElementById("weekSpan");
const monthLink_button = document.getElementById("monthLink_button");
const monthSpan = document.getElementById("monthSpan");
const layer_topContainer_graphs = document.getElementById("layer_topContainer_graphs");
const layer_bottomContainer_dates = document.getElementById("layer_bottomContainer_dates");
const graphBg = document.getElementById("graphBg");

let data = [5221, 5739, 5683, 162, 468, 5533, 5646, 5328, 285, 651, 67, 1151, 5570, 473, 3468, 382];

function createGraph(data) {
	let length = data.length;
	for (let i = 0; i < length; i++) {
		let bar = document.createElement("span");
		bar.className = "bars";
		bar.style.height = `${data[i] / 100 + 100}px`;
		layer_topContainer_graphs.append(bar);
		let spanDate = document.createElement("span");
		spanDate.innerHTML = `${4}/${i + 1}`;
		spanDate.className = `dates`;
		layer_bottomContainer_dates.append(spanDate);
		let divEle = document.createElement("div");
		graphBg.appendChild(divEle);
	}
}
createGraph(data);

optionsContainer_imageContainer_button.addEventListener("click", () => {
	optionsContainer_options.style.display = "block";
	hiddenLayer.style.display = "block";
});

hiddenLayer.addEventListener("click", () => {
	optionsContainer_options.style.display = "none";
	hiddenLayer.style.display = "none";
});

dayLink_button.addEventListener("click", () => {
	daySpan.className = "activeLink";
	weekSpan.className = "";
	monthSpan.className = "";
	dayLink_button.className = "links activeLinkCont";
	weekLink_button.className = "links";
	monthLink_button.className = "links";
});

weekLink_button.addEventListener("click", () => {
	daySpan.className = "";
	weekSpan.className = "activeLink";
	monthSpan.className = "";
	dayLink_button.className = "links";
	weekLink_button.className = "links activeLinkCont";
	monthLink_button.className = "links";
});

monthLink_button.addEventListener("click", () => {
	daySpan.className = "";
	weekSpan.className = "";
	monthSpan.className = "activeLink";
	dayLink_button.className = "links";
	weekLink_button.className = "links";
	monthLink_button.className = "links activeLinkCont";
});


