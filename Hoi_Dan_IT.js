let dogs = ['husky','chó cỏ','alaska']

for(let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);

  // in loop
  // Nên sử dụng let vì phạm vi(scope) ngắn, chỉ trong vòng lặp
  // phạm vi của var rộng, nên dễ bị sai xót, hiểu lầm.
  // Ex: for(let a = 5), chỉ trong vòng lặp mới biết a = 5;
  //     for(var a = 5) {};
  //   console.log(a); //, khi console.log ở bên ngoài vòng lặp thì vẫn biết a = 5
}

console.log(i);

// i++ and ++i
//Ex:
let i1 = 10;
let j1 = i1++; // i = 11, j = 10
console.log(j)  
//Ex 2:
let i2 = 10;
let j2 = ++i2; // i = 11; j = 11;