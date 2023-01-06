// Scope
let aPro = 10;
console.log(aPro); // global scope

function animals(dog,cat) { //function scope

  let aFun = "con Cho"; // function scope 

  let dogPro = { // block scope
    a : 10,
    b : 20
  };

};