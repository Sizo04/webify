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



function toggleProgressBar() {
    var progressBar = document.getElementById('progressbar');
    if (window.innerWidth > 767) {
      progressBar.style.display = 'block';
    } else {
      progressBar.style.display = 'none';
    }
  }
  
  // Call the function on page load and on window resize
  window.onload = toggleProgressBar;
  window.onresize = toggleProgressBar;

