const toggleMenu = document.querySelectorAll(".toggle-menu");
const menu = document.querySelector(".menu-mobile");

toggleMenu.forEach((btn) =>
	btn.addEventListener("click", () => {
		menu.classList.toggle("translate-x-full");
		menu.classList.toggle("translate-x-0");
	})
);

const features = document.querySelector(".features");
const featuresMenu = document.querySelector(".features-menu");
const featuresIcon = document.querySelector(".features-icon");

features.addEventListener("click", () => {
	featuresMenu.classList.toggle("hidden");
	if (featuresMenu.classList.contains("hidden")) {
		featuresIcon.src = "/assets/icon-arrow-down.svg";
	} else {
		featuresIcon.src = "/assets/icon-arrow-up.svg";
	}
});

const company = document.querySelector(".company");
const companyMenu = document.querySelector(".company-menu");
const companyIcon = document.querySelector(".company-icon");

company.addEventListener("click", () => {
	companyMenu.classList.toggle("hidden");
	if (companyMenu.classList.contains("hidden")) {
		companyIcon.src = "/assets/icon-arrow-down.svg";
	} else {
		companyIcon.src = "/assets/icon-arrow-up.svg";
	}
});
