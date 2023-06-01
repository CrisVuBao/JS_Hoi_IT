// Tạo mảng
// Tạo thông thường
var myarr1 = ['javascript', 12, 'PHP', 'CSS']
console.log(myarr1);
console.log(typeof myarr1);

// Cách tạo khác
// var myarr2 = new Array('javascript', 12, 'PHP', 'CSS');
// console.log(myarr2);
console.log(myarr1.length);
console.log(myarr1[1]);
// Các phương thức chuyển mảng sang chuỗi
var strArr = myarr1.toString();
console.log(strArr);
var strArr1 = myarr1.join(':');
console.log(strArr1);
var item = myarr1.pop();

// console.log(item);
myarr1.push('html');
console.log(myarr1);
console.log(newLength);

/*
Hàm spilce
    - Xóa: <tên mảng>.splice(<chỉ mục bắt đầu>,<số phần tử xóa>)
    - Chèn: <tên mảng>.splice(<chỉ mục bắt đầu>,0,<giá trị chèn vào>, ...) => có thể chèn nhiều phần tử.
    - Vừa xóa vừa chèn: <tên mảng>.splice(<chỉ mục bắt đầu>,<số phần tử xóa>, <giá trị chèn>)
*/

myarr1.splice(2,3);
console.log(myarr1);
myarr1.splice(2,0,'chính trị','pháp luật');
console.log(myarr1);
myarr1.splice(1,2,'html','ruby');
console.log(myarr5);

//hàm slice: trích xuất một số phần tử trong mảng
var myArr6 = ['html','css','javascript','ruby','php','asp'];
var myArr7 = myArr6.slice(1,5);
console.log(myArr7);