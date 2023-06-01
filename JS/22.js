var headingNode = document.querySelector('.heading');
// lấy nội dung của h1
console.log(headingNode.innerText); // trả về nội dung thấy trên trình duyệt
console.log(headingNode.textContent); // trả về toàn bộ nội dung, chỉ bỏ qua thẻ

// gán nội dung cho h1
headingNode.innerText = 'new Heading';
headingNode.textContent = 'new Heading';