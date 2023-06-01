// //tạo bảng mô tả đối tượng (objconsstructor)
// function SinhVien(hoTen, tuoi) {
//     this.hoTen = hoTen;
//     this.tuoi = tuoi;
//     this.noiSinh = 'ha noi'; /* áp dụng cho tất cả đối tượng */
// }

// //tạo đối tượng
// var sv1 = new SinhVien('Le anh',10);
// console.log(sv1)
// var sv2 = new SinhVien('mtp', 100);
// console.log(sv2);

// //bổ sung thuộc tính
// sv1.noiSinh = 'hcm';
// console.log(sv1);

function HocSinh(hoTen,tuoi) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
};
HocSinh.prototype.hocBong = 12;
var hs1 = new HocSinh('le bong', 20);
console.log(hs1.hocBong);
HocSinh.prototype.xuatThongTin = function() {
    console.log(`Ho ten: ${this.hoTen}`)
}
hs1.xuatThongTin();
var hs2 = new HocSinh('mtppp', 112);
console.log(hs2.hocBong);
hs2.xuatThongTin();

