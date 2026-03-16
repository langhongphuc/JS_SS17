const inputElement = document.getElementById("input");
const btn = document.getElementsByTagName("button")[0];
const h2 = document.getElementsByTagName("h2")[0];

btn.addEventListener("click", () => {
    let value = inputElement.value;
    localStorage.setItem("userName", value);
    let name = localStorage.getItem("userName");
    h2.innerText = `Chào ${name}`;
});