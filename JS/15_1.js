// lấy đối tượng thông qua id
var headingNode = document.getElementById('heading'); //trả về nukk nếu khoiong có

// lấy đối tượng thông qua class
var headingNodes = document.getElementsByClassName('heading');

//lấy đối tượng thông ua tag
var headingNodes = document.getElementsByClassName('h1');
console.log(headingNodes); // trả về HTML collection có 3 phần tử

//lấy thông qua css selector
var headingNode = document.querySelector('.heading') // trả về đối tượng đầu tiên tìm thấy
console.log([headingNode]);

var headingNodes = document.querySelectorAll('.heading'); // trả về tất cả các đối tượng => nodeList
console.log(headingNodes); // trả về NodeLisst