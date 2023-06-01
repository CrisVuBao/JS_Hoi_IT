// Hàm trong JS
// 1. Tạo hàm: function <Tên hàm> (<Danh sách tham số>) {...}
// 2. Gọi hàm
// 3. Arguments với vòng lặp for of
// 4. Hàm có giá trị trả về => return
// => Một số chú ý về hàm:
// - Hàm trùng tên: Hàm định nghĩa sau ghi đè hàm định nghĩ trước.
// - Khi gọi, hàm định nghĩa sau được thực thi
// - Khai báo biến trong hàm: phạm vi chỉ sử dụng bên trong hàm
// 5. Định nghĩa hàm trong hàm: sử dụng bên trong hàm tương tự như biến trong hàm
// 6. Các loại hàm
// 6.1. Declaration function: function <Tên hàm>(tham số).
//  => Đặc điểm của loại hàm này là có thể gọi trước khi định nghĩa hàm 
// 6.2. Expresstion function var <Tên biến> = function() {...}.
//   => Chỉ gọi hàm này sau khi định nghĩa.
// 6.3. Call back: hàm đóng vai trò là một tham số của hàm khác
// 6.4. Arrow function: trình bày sau

// Thí dụ 1: Tạo hàm
function xuatThongTin () {
    console.log("chao cac ban");
}
// Gọi hàm
xuatThongTin();
// ví dụ 2: Tạo hàm
function xuatHoTen(ht){
    console.log('Ho va ten: ' + ht);
}
xuatHoTen('Nguyen MTP');
    //console.log(1,2,3,4,5,'MTP');

// Sử dụng Arguments với vòng lặp for of
function myInfo () {
    for(var p in arguments) {
        console.log(p);
    }
}
myInfo('MTP',23,'HCM', 'Dai hoc');

// Hàm có giá trị trả về
function tinhTong(a,b) {
    return a + b;
}
var x = tinhTong(2,10);
console.log('Tong 2 so la: ' +  x);
// Chú ý về hàm trùng tên: Hàm định nghĩa sau ghi đè hàm định nghĩa trước
function myInfo() {
        console.log('Hàm ten myInfo');
}
myInfo();

// Định nghĩa hàm trong hàm
function myParent() {
    console.log('Ham cha');
    function myChild() {
        console.log('Ham con');
    }
    myChild();
}
myParent();

// Expenssion function
var phepTru = function(a,b) {
    return a - b;
}

// Gọi hàm thông qua tên biến
console.log(phepTru(10,5));

// Ví dụ về hàm callback
function tinh1(x,y) {
    return x + y;
}
function tinh2(x,y) {
    return x - y;
}

// Ví dụ về arrow function
var tinh3 = (x,y) => x + y;
console.log('Ket qua Arrow function tinh duoc: ' + tinh3(100,200));

function tinhToan(ham, a, b) {
    var kq = ham(a,b);
    console.log(kq);
}
tinhToan(tinh1,10,5);
tinhToan(tinh2,10,10);