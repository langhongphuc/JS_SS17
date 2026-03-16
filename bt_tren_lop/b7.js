const countDisplay = document.getElementById("count");
const more = document.getElementById("more");
const less = document.getElementById("less");
const reset = document.getElementById("reset");

let count = localStorage.getItem("counterValue");
if (count === null) {
    count = 0;
} else {
    count = +count;
}

countDisplay.innerText = count;

more.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
    localStorage.setItem("counterValue", count);
});

less.addEventListener("click", () => {
    count--;
    countDisplay.innerText = count;
    localStorage.setItem("counterValue", count);
});

reset.addEventListener("click", () => {
    count = 0;
    countDisplay.innerText = count;
    localStorage.setItem("counterValue", count);
})