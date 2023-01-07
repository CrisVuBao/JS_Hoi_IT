// Arrow Function
/* Ex:
let sum = (a,b) => {
    return a + b;
}

console.log(sum(10,10));
*/

//Ex 2:
let getSum = (a,b) => {
  return a + b;
}
console.log(getSum(10,20));

//Ex 3:
let getName = (firstName,lastName) => {
  return lastName + ` ` + firstName;
}
console.log(getName("bao","vu"));

//Ex 4:
let getArr = (arr) => {
 arr = ['tao','pro','vip'];
  return arr;    
}
console.log(getArr());

//Ex 5:
let getLoop = (loop) => {
  loop = 10;
  for(let i = 0; i < loop; i++) {
    console.log(i)
  }
}
console.log(getLoop());


//Ex Function. Methods
let family = {
  name: "cho",
  age: "10",
  getDog: function(n1) {
    return n1
  }
}
console.log(family.getDog("gọi câu này từ function bên trong object"));