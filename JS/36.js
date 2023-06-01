// Mô tả 1: sử dụng DOM Event để khi click vào thẻ div thực hiện 3 việc: việc 1, việc 2, việc 3
// sau 3 giây thì sự kiện click không còn hoạt động
var divElement = document.querySelector('div');
function ham1() {
    console.log('Viec 1');
}
function ham2() {
    console.log('Viec 2');
}
function ham3() {
    console.log('Viec 3');
}

// divElement.onclick = function(e) {
//     ham1();
//     ham2();
//     ham3();
// }
// setTimeout(function() {
//     divElement.oncli = function(e) {}
// },2000) 

// Mô tả 2: sử dụng Event Listener để giải quyết bài toán trên
// Lắng nghe với phương thức AddEventListener
divElement.addEventListener('click', ham1);
divElement.addEventListener('click',ham2);
divElement.addEventListener('click',ham3);
// sau 3 giây không thực hiện việc 2
setTimeout(function() {
    divElement.removeEventListener('click', ham2);
},3000);