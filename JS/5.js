// Cấu trúc điều khiển
// 1. Cấu trúc if
// if(Điều kiện) {
    // KHỐI LỆNH
//}

// if (Điều kiện) {
    // Lệnh
//}
// else {
    //Lệnh
//}

//Giải pt bậc 1
var hsa = 0;
var hsb = 10;
if(hsa === 0){
    if(hsb === 0){
        console.log('Phương trình vô số nghiệm');
    }
    else{
        console.log('Phương trình vô nghiệm');
    }
}
else {
    console.log('Phương trình có nghiệm x = ' + -hsb / hsa);
}

//Phương trình bậc 2
var a = 1;
var b = 2;
var c = 3;
var delta = b * b - 4 * a * c;
if(delta < 0){
    console.log('Phương trình vô nghiệm');
}
else if(delta === 0){
    console.log('Phương trình có nghiệm kép x = ' + x);
}
else if(delta > 0){
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log('Phương trình có 2 nghiệm x1 = ' + x1 +',x2 = ' + x2 );
}

//Cấu trúc switch..case
var so = 1;
switch (so){
    case 1:
        console.log('hi');
    case 2:
        console.log('hello');
    case 3:
        console.log('bye');
    default:
        console.log('chao qq');
}

//Cấu trúc lặp
//Cấu trúc vòng lặp for
// Ví dụ: Tính tổng các giá trị trong mảng cho trước
var myarr = [3,1,2,5,7];
var tong = 0;
for(var i = 0; i< myarr.length; i++){
    tong += myarr[i];
}
console.log(tong);

//*Cấu trúc vòng lặp for..in: sử dụng để lặp qua các thuộc tính của đối tượng
var myobj = {
    hoten: 'Nguyen MTP',
    tuoi: 1000,
    quequan: 'win'
}
for(var key in myobj){
    console.log(myobj[key]);
}

//*Cấu trúc lặp for..of: sử dụng để lấy giá trị các phần tử trong mảng
for(var x of myarr){
    console.log(x); 
}