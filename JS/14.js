var result = 0;
var numbers = [10,20,100];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(`Gia tri hien hanh: ${value} -  chi muc hien hanh ${index}`);
    console.log(array);
    result = result + value;
}
console.log(result);

// //cách 2:
// var result1 = 0;
// numbers.forEach(function(value, index, array) {
//     result1 = result1 + value;
// });
// console.log(`su dung forEach cach 2 duoc ket qua: ${result1}`);