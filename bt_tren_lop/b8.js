const textarea = document.getElementById("draft");
const btn = document.getElementById("btn");

let draft = localStorage.getItem("draft");
if (draft) {
    textarea.value = draft;
}

textarea.addEventListener("input", () => {
    localStorage.setItem("draft", textarea.value);
});

btn.addEventListener("click", () => {
    localStorage.removeItem("draft");
    textarea.value = "";
});