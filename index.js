let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("right").style.top = "100";
    } else {
        document.getElementById("nav").style.top = "-100px";
        document.getElementById("right").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}