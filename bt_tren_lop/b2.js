let count = localStorage.getItem("visitCount") | 0;
let countElement = document.getElementById("count");
window.addEventListener("load", () => {
    count++;
    localStorage.setItem("visitCount", count);
    countElement.innerText = count;
});