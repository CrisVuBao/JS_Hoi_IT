var boxElement = document.querySelector(".box");
boxElement.innerHTML = "Heading";// thêm text node
boxElement.innerHTML = "<h1>Heading</h1>"; // Thêm thẻ con
console.log(boxElement.innerHTML); // lấy nội dung html của thẻ
// thay đổi nội dung thẻ h1
var h1Element = document.querySelector("h1");
h1Element.innerText = "New Heading";
// thao tác thẻ với outerHTML => thay thế div bằng span => ít dùng
boxElement.outerHTML = "<span style='color:red;'>Heading</span>";
