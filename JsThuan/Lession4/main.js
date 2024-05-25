const myInfo = {
  email: "tung@gmail.com",
  nickName: "tung",
  age: "20",
};

const { email, nickName, age } = myInfo; // Detructuring

console.log(email, nickName, age);

const teamLayKinh = [
  "Duong Tang",
  "Ngo Khong",
  "Bat Gioi",
  "Sa Tang",
  "Ngua Bach Long",
];

const [so1, so2] = teamLayKinh;
console.log(so1, so2);

// TODO: viết hàm sum nhận vào số lượng tham số bất kỳ, trả về tổng của các số điền vào.

function sum(...thamSo) {
  let sum = 0;
  for (let index = 0; index < thamSo.length; index++) {
    sum += thamSo[index];
  }

  // for (const number of thamSo) {
  //   sum += number;
  // }

  console.log(sum);
}

sum(1, 2, 3);
sum(100, 200);
