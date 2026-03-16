const btn = document.getElementById("btn");
document.body.style.backgroundColor = "white";
document.body.style.color = "black";

let theme = localStorage.getItem("theme");

if (!theme) {
    theme = "light";
}

if (theme === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

btn.addEventListener("click", () => {
    if (theme === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});