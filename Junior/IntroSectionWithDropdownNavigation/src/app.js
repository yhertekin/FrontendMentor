const toggleMenuButton = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu");

toggleMenuButton.addEventListener("click", function () {
	menu.classList.toggle("hidden");
});
