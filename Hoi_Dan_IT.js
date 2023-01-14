// Promise - Translate: lời hứa
// Bản chất promise là một function

const promiseEx = () => {

    // resolve: là giải quyết được vấn đề // reject: là từ chối vấn đề
    return new Promise((resolve, reject) => {
        resolve({name: "pro", age: 100});
        reject("hello promise");
    }); 
}
promiseEx()
 .then(data => { // data là cái đống shit truyền vào trong hàm resolve
    // muốn lấy được biến resolve thì phải dùng .then
    console.log(data);
 }) 
 .catch(error => {
    // muốn lấy được biến reject phải dùng .catch
    console.log(error);
 });


//  const promiseCall = (id,callback) => {

//     return new Promise((resolve,reject) => {   
//     let request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
//     if (this.readyState === 4 && request.status === 200) {
//       // typecal action to be performed when the document is ready:
//     //   callback(undefined, "- my data");
//     resolve(data);
//     }
//     if (this.readyState === 4 && request.status !== 200) {
//     //   callback("- something wrongs", undefined);
//     reject("something wrongs");
//     }
//   };

//   request.open("get", "https://jsonplaceholder.typicode.com/todos",true);
//   request.send();
//     });
//  };
//  promiseCall(1).then(data => {
//     console.log("get data: ", data);
//  }).catch(err => {
//     console.log(">>>", err);
//  });