let data;
fetch("./data.json")
	.then((response) => response.json())
	.then((_data) => (data = _data["technology"]))
	.catch((error) => console.log(error));

const dots = [...document.querySelectorAll(".number-indicator")];

const picture = document.querySelector("picture");

dots.map((dot) =>
	dot.addEventListener("click", () => {
		const content = data.filter((d) => d.name.toLowerCase() === dot.name.toLowerCase())[0];
		changeActiveDot(dots, dot);
		changeActiveImage(picture, content);
		changeActiveContent(content);
	})
);

function changeActiveDot(dots, currentDot) {
	dots.forEach((t) => t.setAttribute("aria-selected", false));
	currentDot.setAttribute("aria-selected", true);
}

function changeActiveImage(picture, data) {
	const [source, img] = picture.children;

	source.srcset = data.images.landscape;
	img.src = data.images.portrait;
}

function changeActiveContent(content) {
	const name = document.querySelector(".tech-name");
	const description = document.querySelector(".tech-description");

	name.innerText = content.name;
	description.innerText = content.description;
}
