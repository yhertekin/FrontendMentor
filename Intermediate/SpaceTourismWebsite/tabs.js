let data;
fetch("./data.json")
	.then((response) => response.json())
	.then((_data) => (data = _data["destinations"]))
	.catch((error) => console.log(error));

const tabs = [...document.querySelectorAll(".tab")];
const picture = document.querySelector("picture");

tabs.map((tab) =>
	tab.addEventListener("click", () => {
		const content = data.filter((d) => d.name.toLowerCase() === tab.innerText.toLowerCase())[0];
		changeActiveTab(tabs, tab);
		changeActiveImage(picture, content);
		changeActiveContent(content);
	})
);

function changeActiveTab(tabs, currentTab) {
	tabs.forEach((t) => t.setAttribute("aria-selected", false));
	currentTab.setAttribute("aria-selected", true);
}

function changeActiveImage(picture, data) {
	const [source, img] = picture.children;

	source.srcset = data.images.webp;
	img.src = data.images.png;
}

function changeActiveContent(content) {
	const title = document.querySelector("#content-title");
	const text = document.querySelector("#content-text");
	const distance = document.querySelector("#content-distance");
	const travel = document.querySelector("#content-travel");
	title.innerText = content.name;
	text.innerText = content.description;
	distance.innerText = content.distance;
	travel.innerText = content.travel;
}
