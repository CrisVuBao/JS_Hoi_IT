//Một số chú ý với && và ||
var kq = 5 > 4 && 2>1;
var kq1 = 1 > 5 && 2 > 1 && 6 >3;
var kq2 = 'hello' && 'hi' && 'goodbye';
var kq3 = '' && 'hi';
var kq4 = 'hello' && '' && 'goodbye';

var kq5 = 5 < 4 || 2 > 1;
var kq6 = '' || 0 || 'hi';
console.log(kq);
console.log(kq1);
console.log(kq2);
console.log(kq3);
console.log(kq4);
console.log(kq5);
console.log(kq6);