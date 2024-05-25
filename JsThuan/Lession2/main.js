// function sum(a, b) {
//   return a + b;
// }

function binhPhuong(a) {
  return a * a;
}

// !Named function: function có tên tường minh (regular function)
function loiChao(name = "ban", gioiTinh) {
  // Nếu ko truyền name thì có thể default parameter name = 'ban
  if (gioiTinh === "nam") {
    console.log(`Xin chào quý ông: ${name}`);
  } else {
    console.log(`Xin chào quý cô: ${name}`);
  }
}

// ! Anonymous function:
// ! Arrow function:
const sum1 = (a, b) => {
  return a + b;
};

// ? Arrow function với cú pháp viết tắt
const sum2 = (a, b) => a + b;

// ? Arrrow function muốn trả về 1 object
const checkUser = () => ({
  // Trả ra nội dung là 1 object, dấu ngoặc tròn tương ứng với return
  name: "Trương Văn Tùng",
  address: "Việt Nam",
});

console.log(sum1(2, 3));
console.log(sum2(8, 3));
console.log(checkUser());

// Destructuring
const months = ["Jan", "Feb", "Mar", "Apr", "May"];
let [jan, feb, mar, apr] = months;
console.log(jan);

let { first_name, last_name } = {
  first_name: "Trương Văn ",
  last_name: "Tùng",
};

console.log(first_name);

// ! Các function được lồng ghép với nhau theo tuần tự
// const tinhToanA = () => () => () => {

// }

// ! Expression function
const sum3 = function (a, b) {
  return a + b;
};

// ! Viết function đưa vào số nguyên dương n có chức năng in ra các số chẵn từ 0 đến n.
function tinhSoChan(n) {
  if (typeof n !== "number" || n <= 0) {
    console.log("N không hợp lệ");
    return;
  }
  const result = [];
  for (let index = 1; index <= n; index++) {
    if (index % 2 === 0) {
      result.push(index);
    }
  }
  console.log(result);
}

tinhSoChan(10);
