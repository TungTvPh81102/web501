const teamLayKinh = [
  "Duong Tang",
  "Ngo Khong",
  "Bat Gioi",
  "Sa Tang",
  "Ngua Bach Long",
];

console.log(teamLayKinh);

// const [so1, so2, ...rest] = teamLayKinh; -- rest

const ecma1 = ["People 1", "People 2", "People 3"];
const ecma2 = ["People 4", "People 5", "People 6"];

// Spread
const ecma = [...ecma1, ...ecma2];
console.log(ecma);

const temLayKinh2 = {
  suPhu: "DuongTang",
  deTu1: "NgoKhong",
};

const teamMoi = {
  ...temLayKinh2,
  detu1: "Batgioi",
};

console.log(teamMoi);
