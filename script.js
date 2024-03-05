const hamButton = document.querySelector("#hamBtn");
const hamMenu = document.querySelector("#hamMenu");

hamButton.addEventListener("click", () => {
    hamMenu.classList.toggle("no-display");
})


let toTop = document.querySelector("#backToTop");

toTop.addEventListener("click", () => {
    goToTop();
})


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

function goToTop() {

    document.documentElement.scrollTop = 0;
}
