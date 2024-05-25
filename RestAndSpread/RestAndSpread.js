const myInfor = {
  username: "tungtv",
  email: "tung@gmail.com",
  address: "hn",
  age: 18,
};

const teamLayKinh = [
  "Sư phụ",
  "Ngo khong",
  "Bat gioi",
  "Sa tang",
  "Nghia bach long",
];

//! Toán tử rest: là phần còn lại và luôn luôn được khai báo cuối cùng

/*
 * 1. Rest là phần còn lại khi destructuring 1 object hoặc array
 * 2. Rest thường xuất hiện khi khai báo
 * 3. Rest thường là biến được khai báo cuối để gom những phần còn lại
 */

const { username, ...rest } = myInfor;
console.log(username);
console.log(rest);

const [Founder, ...cacDeTu] = teamLayKinh;
console.log(Founder);
console.log(cacDeTu);

function sum(...args) {
  //   console.log(...args);
  //   let tong = 0;
  //   for (let i = 0; i < args.length; i++) {
  //     tong += args[i];
  //   }
  //   return tong;
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

// ! Toán tử spread
/*
 * 1.Spread có nghĩa là trải ra, rải ra
 * 2.Spread dùng khi đưa dữ liệu từ object, array cũ vào object, array mới
 * 3.Spread có tể xuất hiện ở bất cứ vị trí nào trong khai báo giá trị object hoặc array
 */
const frontEndDevs = ["Tung", "Thanh", "Dat"];
const backEndDevs = ["Long", "Huy", "Phong"];
const nhomDATN = [...frontEndDevs, ...backEndDevs];
console.log(nhomDATN);

const newMyInfor = {
  ...myInfor,
  age: 22,
  linkFb: "https://facebook.com",
  linkTw: "https://twitter.com",
  linkGg: "https://google.com",
  ...nhomDATN,
};
console.log(newMyInfor);
