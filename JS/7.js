/* 
Xử lý chuỗi trong JS
1. Tạo chuỗi
+ Các trường hợp sử dụng ký tự \ trong chuỗi
+ xem độ dài chuỗi và chú ý độ dài khi viết code: sử dụng thuộc tính length.
+ Template string trong ES6: `... ${<Tên biến>} ..`
+ Tìm indexL <chuoi>.indexOf(<chuoi tim>) => trả về  vị trí đầu tiên tìm thấy ...
+ Để tìm ở vị trí cuối cùng => lastIndexOf.
+ Cắt chuỗi: sử dụng <chuoi>.slice(<vị trí bắt đầu>[<vị trí kết thúc>]).
    => Cắt từ phải sang trái => sử dụng dấu -
+ Thay thế chuỗi: sử dungk <chuoi>.replace(..) => có thể sử dụng biểu thức chính
+ chuyển sang chữ in: <chuoi>.toUpperCasse()
+ Chuyển sang chữ thường: <chuoi>.toLowerCase()
+ Trim chuỗi: loại bỏ khoảng trắng ở đầu và cuối chuỗi.
+ Split chuỗi: chuyển đổi chuỗi thành array
+ Lấy kỹ tự theo chỉ mục: <chuỗi>.charAt(<vị trí) hoặc truy xuất tương tự
*/

// Tạo chuỗi
//1. Cách 1: Thường dùng
var s = 'HelloWorld';
//2. Cách 2: ít dùng
var s1 = new String('Hello');

// sử dụng ký tự \ trong chuỗi: khi cần xuất ra kí tự đặc biệt
console.log('chao ban \'Nguyen MTP\' ');
// xem độ dài chuỗi
console.log(s.length);
// sử dụng template string
var s2 = 'Nguyen MTP1';
console.log(`chao ban:  ${s2}`);
console.log(s.indexOf('o'));
// tìm ở vị trí cuối cùng => lastIndexOf
console.log(s.lastIndexOf('o'));
var s3 = s.slice(5);
var s4 = s.slice(5,8); // chỉ cắt tới vị trí thứ 8 - 1= 7 => trườn hợp số âm
console.log(s4);
// thay chuỗi
var s5 = s.replace('W','w');
console.log(s5);
console.log(s5.toUpperCase());
// chuyển chuỗi thành mảng
var s6 = s.split('');
console.log(s6);