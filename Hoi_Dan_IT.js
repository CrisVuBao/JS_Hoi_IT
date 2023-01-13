// HTTP Requests: request(yêu cầu) API từ bên page nào đó, để lấy data từ bên page đó
//cho vào page của mình (gọi là mượn dữ liệu từ nơi khác để phục vụ cho mình).ok
// Ex:
var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(":)) output: ", request);
  };
};

request.open("Get","https://jsonplaceholder.typicode.com/todos",true);
request.send();
