let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("right").style.top = "100";
        document.getElementById("ham").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-100px";
        document.getElementById("right").style.top = "0";
        document.getElementById("ham").style.top = "-100";
    }
    prevScrollpos = currentScrollPos;
}

let TransitionEvent = () => {
    let workOn = document.querySelector("body");
    workOn.style.opacity = 1;
}
let workOn = document.getElementById("aboutSection");
workOn.addEventListener("pointerover", () => {
    document.getElementById("aboutSection").style.opacity = 1;
})
let scrolledOn = () => {
    let workOn = document.getElementById("aboutSection");
    workOn.style.opacity = 1;
}



let removeAttr = () => {
    if (checkBox.checked) {
        checkBox.checked = false;
    }
};


let checkBox = document.getElementById("checkBox");

let about = document.querySelector("#about");
let work = document.querySelector("#work").addEventListener('click', removeAttr);
let contact = document.querySelector("#contact").addEventListener('click', removeAttr);
let resume = document.querySelector("#resumeIn").addEventListener('click', removeAttr);
let skill = document.querySelector("#skill").addEventListener('click', removeAttr);

about.addEventListener("click", removeAttr);


new GitHubCalendar(".calendar", "gaurav7ingh");




let arr = ["Contact Me", "Email", "Linked In"]

setInterval(() => {
    let text = document.getElementById("btn1").innerText;
    switch (text) {

        case "Contact Me": document.getElementById("btn1").innerText = arr[1];

            break;

        case "Email": document.getElementById("btn1").innerText = arr[2];

            break;
        case "Linked In": text = document.getElementById("btn1").innerText = arr[0];

            break;
        default:
            break;
    }
}, 2000)


let btn = document.getElementById("btn1");

btn.addEventListener("click",()=>{
    let res = btn.innerText;
    if(res == "Contact Me"){
        location.g
    }
})