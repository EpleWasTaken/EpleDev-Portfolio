const logo = document.getElementById("logo");

logo.addEventListener("click", homeFunction);

function homeFunction() {
    window.location.href = "/";
}

const backToTop = document.getElementById("Icon_awesome-arrow-up");

window.onscroll = function() {scrollToTop()};

function scrollToTop() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 