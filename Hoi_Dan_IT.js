// Callbacks
// Callbacks là khi gọi ra (có thể là console.log) 2 hàm đều trùng tên với nhau, 
// cái nào được gọi sau cùng, thứ tự từ trên xuống, thì kết quả của hàm gọi sau sẽ hiện lên.

//setTimeOut
setTimeout(() => {
  console.log("hello settimeout");
}, 10000);

//setInterval
setInterval(() => {
  // console.log("hello setinterval");
}, 1000);
