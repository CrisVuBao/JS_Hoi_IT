// 15. xử lý đối tượng
//1. tạo đối tượng
// + cú pháp: var <tên đối tượng>{<tên thuộc tính>: <giá trị>,...}

var obj1 ={
    hoTen: 'Nguyen a',
    tuoi: 10,
    noiSinh: 'hcm'
};
console.log(obj1)

// trường hợp tên thuộc tính có chứa ký tự đặc biệt "-",...
var obj2={
    'ho-Ten': 'Nguyen a',
    tuoi:10,
    'noi-sinh':'hcm'
};
console.log(obj2);

//Tên thuộc tính là gá trị của biến thi tên biến đặt tronng cặp ngoặc [];
var myKey = 'tuoi';
var obj3 = {
    'ho-Ten': 'mtp',
    [myKey]: 10,
    'noi-Sinh': 'hcm'
};
console.log(obj3);

// trường hợp tên thuojc tính là hàm thi khai báo:
var obj4 = {
    hoTen: 'Nguyen a',
    tuoi: 11,
    XuatThongTin: function() {
        console.log(`Ho ten: ${this.hoTen} - Tuoi: ${this.tuoi}`);
    }
};
obj4.XuatThongTin();