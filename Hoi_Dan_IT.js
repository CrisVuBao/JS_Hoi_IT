let arrAnimals = [
  'Con Chó', // index arr: 0
  'Con Mèo',//  ---------: 1
  'Con Lợn'//    --------: 2
  // index belong to array from number 0
];

for(let i = 0; i<arrAnimals.length;i++) {
  console.log(i + 1,arrAnimals[i]); // i + 1: i start from number 1
}

//# while loop
let a = 0
while(a < arrAnimals.length) { // while loop // While(condition<điều kiện>) {};
  console.log(arrAnimals[a]);
  a++;
};

//# do while loop
do {
  console.log(a + 1, arrAnimals[a]);
  a++;
}while (a < 0)
