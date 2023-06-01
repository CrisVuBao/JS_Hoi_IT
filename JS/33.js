var inputValue; // khai báo biến để lưu trữ giá trị nếu cần
var inputValue = document.querySelector('input[type="text"]');
console.log(inputElement);

// // sự kiện change xảy ra khi có sự thay đổi giá trị trong input và chỉ xảy ra khi  blur ra ngoài hay khi bấm enter hoặc tab
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }
// // Để lấy giá trị trực tiếp khi gõ => oninput. sự kiện này diễn ra ngay khi giá trị bị thay đổi mà không cần phải blur
// inputElement.oninput = function(e) {
//     // lấy giá trị lưu vào biến
//     inputValue = e.target.value;
//     console.log(e.target.value);
// }
// // với checkbox => sự kiện onchange lấy giá trị  => checked
// var inputCheckElement = document.querySelector('input[type="checkbox"]');
// console.log(inputCheckElement);
// inputCheckElement.onchange = function(e) {
//     // lấy giá trị lưu vào biến nếu cần xử lý
//     inputValue = e.target.checked;
//     console.log(e.target.checked);
// }
// // với select => sự kiện onchange. lấy giá trị => value
// var inputSelectElement = document.querySelector('select');
// console.log(inputSelectElement);
// inputSelectElement.onchange = function(e) {
//     // lấy giá trị lưu vào biến
//     inputValue = e.target.value;
//     console.log(e.target.value);
// }

// sử dụng keyup kiểm tra phím bấm. để kiểm tra phím bấm trên web => sử dụng document.onkeydown hay onkeyup
inputElement.onkeyup = function(e) {
    console.log(e.target);
    switch(e.which) {
        case 27:
            console.log('ESC');
            break;
    }
}