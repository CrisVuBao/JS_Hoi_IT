var boxElement = document.querySelector(".box");
console.log(boxElement.classList); // Xuất thông tin class của boxElement
console.log(boxElement.classList.length); // Chiều dài danh scsh các class
console.log(boxElement.classList[0]); // Class thứ 0, ...
console.log(boxElement.classList.value); // Trả về chuỗi giá tri thuộc tính class
boxElement.classList.add('red','blue'); //  Thêm class red và blue vào thuộc trính class

// Kiểm tra class có tồn tại trong element hay không ?
console.log(boxElement.classList.contains('red')); // Nếu tồn tại class red => true
// Xóa class
boxElement.classList.remove('red'); // Xóa class red ra khỏi element
// Sử dụng setTimeout để thấy rõ hơn việc xóa class
setTimeout(function() {
    boxElement.classList.remove('red');
},3000)
// Phương thức toggle => có thì gỡ bỏ, không thì thêm vào
setInterval(function() {
    boxElement.classList.toggle('red');
},1000)