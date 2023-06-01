// cách 1: lấy thông tin qua document
var listItemNodes =document.querySelectorAll('.box-1 li');
console.log(listItemNodes);

// cách 2: lấy thông tin qua đối tượng chứa
var boxNode1 = document.querySelector('.box-1');
console.log(boxNode1);
// lấy các thẻ li trong boxNode1
var listItemNodes1 = boxNode1.querySelectorAll('li');
console.log(listItemNodes1);