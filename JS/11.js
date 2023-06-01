//truy xuất thuộc tính đối tượng

var myKey = 'tuoi';
var obj3 = {
    hoTen: 'Nguyen a',
    [myKey]: 20,
    'noi-Sinh': 'hcm'
};
// console.log(obj3.hoTen);
// console.log(obj3[myKey]);
// console.log(obj3['noi-Sinh']);
// console.log(obj3.diachi);

//thêm thuộc tính sau khi tạo đối tượng
// Cách 1:
obj3.diachi = 'ha noi';
console.log(obj3);
// cách 2:
obj3['hocBong'] = 10;
console.log(obj3);

//xóa thuộc tính
delete obj3.hoTen;
console.log(obj3);
delete obj3['noi-Sinh'];
console.log(obj3);