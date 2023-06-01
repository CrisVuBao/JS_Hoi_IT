//1. Tạo số
// Cách 1
var n = 12;
var m = 12.5;
console.log(typeof n);
console.log(typeof m);

// Cách 2
var n1 = new Number(12);
console.log(typeof n1);

//2. Kiểm tra giá trị là số
var x = 12 / 'abc';
console.log(x);
console.log(typeof x); // Mặc dù x có giá trị là NaN nhưng x vẫn có kiểu là number
console.log(isNaN(x)); // true => x có giá trị là NaN
console.log(isNaN(n));

// Hàm toString => chuyển số thành chuỗi
var n2 = 15;
console.log(typeof n2);
console.log(typeof n2.toString());

// Hàm toFixed => làm tròn số và trả về chuỗi
var n3 = 12.456;
console.log(n3.toFixed(0));
console.log(n3.toFixed(1));

// Chuyển chuỗi thành số
// Chuyển chuỗi thành số nguyên
var n4 = '12345';
console.log(typeof parseInt(n4));
console.log(typeof Number(n4));

// Chuyern chuỗi thành số thực
var n5 = '123.45';
console.log(typeof parseFloat(n5));