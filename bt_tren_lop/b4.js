const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

let data = localStorage.getItem("myProfile");
if (data) {
    let profile = JSON.parse(data);
    result.innerText = `Tên: ${profile.name} | Tuổi: ${profile.age}`;
} else {
    result.innerText = "Chưa có thông tin cá nhân"
}

btn.addEventListener("click", () => {
    let name = userName.value;
    let age = userAge.value;
    let profile = {
        name: name,
        age: age
    };

    let jsonData = JSON.stringify(profile);
    localStorage.setItem("myProfile", jsonData);
    result.innerText = `Tên: ${name} | Tuổi: ${age}`;
});