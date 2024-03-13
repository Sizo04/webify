const hamButton = document.querySelector("#hamBtn");
const hamMenu = document.querySelector("#hamMenu");

hamButton.addEventListener("click", () => {
    hamMenu.classList.toggle("no-display");
})


