const body = document.querySelector("body")
const btnHamburger = document.querySelector("#btnHamburger")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")

btnHamburger.addEventListener("click", function () {
    if (header.classList.contains("open")) {
        header.classList.remove("open")
        body.classList.remove("noscroll")
        fadeElems.forEach((elem) => {
            elem.classList.remove("fade-in")
            elem.classList.add("fade-out")
        })
    } else {
        // overlay.classList.add("fade-in")
        // overlay.classList.remove("fade-out")
        body.classList.add("noscroll")
        header.classList.add("open")
        fadeElems.forEach((elem) => {
            elem.classList.add("fade-in")
            elem.classList.remove("fade-out")
        })
    }
})
