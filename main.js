// Xử lý nút bấm bằng js
const btn = document.querySelector("button");
const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");

function onClick() {
  alert("Xin chào thầy hoàng ");
}

click1.addEventListener("click", onClick); // gọi đến hàm bên trên dòng 6
click2.onclick = onClick;

// TODO: Object thông tin cá nhân của sinh viên
const myInfo = document.getElementById("show-info");

const info = {
  name: "Trương Văn Tùng",
  age: 20,
  mssv: "PH46392",
  study: "FPT Polytechnic",
  address: "Hà Nam",
};

console.log(info);

const des = document.getElementById("des");
const creteInfo = document.createElement("div");
creteInfo.innerHTML = `
    <h3>${info.name}</h3>
    <p>Age: ${info.age}</p>
    <p>Mssv: ${info.mssv}</p>
    <p>Study: ${info.study}</p>
    <p>Address: ${info.address}</p>
`;

des.appendChild(creteInfo);
