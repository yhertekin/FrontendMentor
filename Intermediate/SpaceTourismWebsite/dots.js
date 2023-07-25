let data;
fetch("./data.json")
	.then((response) => response.json())
	.then((_data) => (data = _data["crew"]))
	.catch((error) => console.log(error));

const dots = [...document.querySelectorAll(".dot")];

const picture = document.querySelector("picture");

dots.map((dot) =>
	dot.addEventListener("click", () => {
		const content = data.filter((d) => d.role.toLowerCase() === dot.name.toLowerCase())[0];
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

	source.srcset = data.images.webp;
	img.src = data.images.png;
}

function changeActiveContent(content) {
	const name = document.querySelector(".crew-name");
	const role = document.querySelector(".crew-role");
	const bio = document.querySelector(".crew-bio");

	name.innerText = content.name;
	role.innerText = content.role;
	bio.innerText = content.bio;
}
