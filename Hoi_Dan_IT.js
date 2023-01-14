// Callback advance
// Callback: bản chất là có một function, và truyền vào function đấy một cái function khác thì gọi đó là callback.
// Ex: có function A và B, trong function A có chứa function B, thì function B gọi là callback

// Ex:
// let sum = (a,b) => {
//   console.log("hello");
//   return a + b;
// };

// let funSum = () => {  
//   return sum();
// };
// funSum(sum);

// Ex 2:
// let call = () => {
//   console.log("hello callback");
// }

// let sum = () => {
//   return call();
// }
// sum(call);

// Ex 3:
let callback = (error,data) => {
  if (error) {

    console.log("calling callback with error", error);
  }
  else if (data) {
    console.log("calling callback with data", data);
  }
}

let getTodos = (callback) => {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState === 4 && request.status === 200) {
      // typecal action to be performed when the document is ready:
      callback(undefined, "- my data");
    }
    if (this.readyState === 4 && request.status !== 200) {
      callback("- something wrongs", undefined);
    }
  }
  request.open("get", "https://jsonplaceholder.typicode.com/todos",true);
  request.send();
}

getTodos(callback);
