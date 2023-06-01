var date1 = new Date();
console.log(date1); // trả về ngày tháng hiện tại
// lưu ý: tháng bắt đầu từ 0 -> 11
var date2 = new Date(2022,0,20,13,25,47);
console.log(date2);
var date3 = new Date('2011-04-10');
console.log(date3);
console.log(date3.getFullYear()); // Trả về năm
console.log(date3.getMonth()); // Trả về tháng - 1
console.log(date3.getDate()); // Trả về ngày