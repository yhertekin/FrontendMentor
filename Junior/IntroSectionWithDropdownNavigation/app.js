const toggleMenu = document.querySelectorAll(".toggle-menu");
const menu = document.querySelector(".menu-mobile");

toggleMenu.forEach((btn) =>
	btn.addEventListener("click", () => {
		menu.classList.toggle("translate-x-full");
		menu.classList.toggle("translate-x-0");
	})
);

const handleDropdown = (btnClass, btnIconClass, btnMenuClass) => {
	console.log("hello");
	const btn = document.querySelector(`.${btnClass}`);
	const btnIcon = document.querySelector(`.${btnIconClass}`);
	const btnMenu = document.querySelector(`.${btnMenuClass}`);

	btn.addEventListener("click", () => {
		btnMenu.classList.toggle("hidden");
		if (btnMenu.classList.contains("hidden")) {
			btnIcon.src = "/assets/icon-arrow-down.svg";
		} else {
			btnIcon.src = "/assets/icon-arrow-up.svg";
		}
	});
};

handleDropdown("company", "company-icon", "company-menu");
handleDropdown("features", "features-icon", "features-menu");
handleDropdown("company-mobile", "company-icon-mobile", "company-menu-mobile");
handleDropdown("features-mobile", "features-icon-mobile", "features-menu-mobile");
