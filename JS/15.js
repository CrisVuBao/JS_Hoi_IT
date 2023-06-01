// Phương thức every
var numbers = [45,10,9,10];
var kt = numbers.every(function(value,index, array) {
    return value > 1;
});
console.log(kt);

// Phương thức some: trả về true
var numbers = [10,10,10,10,10];
var kt = numbers.some(function (value,index, array){
    return value > 180;
})

//phương thức filter: giá trị trả về là mảng phần tử thỏa điều kiện.
var numbers = [10,20,30,40,50];
var arr = numbers.filter(function (value, index, array){
    return value > 18;
})
