// .setItem: Tạo key và value
localStorage.setItem("name", "Đạt Bé Bỏng");

// .getItem: Lấy value của key
let nameByLocal = localStorage.getItem("name");
console.log(nameByLocal);

// .removeItem: Xóa theo key
// localStorage.removeItem("name");

// .clear: Xóa hết
// localStorage.clear();

// Cách lưu giá trị là mảng hoặc object lên localstorage
let todos = [
    { id: 0, name: "Chơi game", status: true },
    { id: 1, name: "Xem phim", status: false },
];

// Kiểu dữ liệu json

// JSON.stringify: Chuyển mảng hoặc object về dạng JSON
localStorage.setItem("listTodo", JSON.stringify(todos));

// JSON.parse: Chuyển JSON về kiểu dữ liệu mảng hoặc object
let data = JSON.parse(localStorage.getItem("listTodo"));
console.log(data);

// 34578