// Callback Hell:
//như kiểu function lồng trong function, thành hình kim tự tháp
// lý thuyết: lồng xử lý bất đồng bộ của js vào bên trong của nó

    // $.support.cors = true;
    const callback = (error, data) => {
        if(error) {
            console.log("calling callback with error: ", error);
        }
        if(data) {
            console.log("calling callback with data: ", data);
        }
    }

function getTodos(callback) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(this.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            const dataString = JSON.stringify(data)
            callback(undefined, data);
            callback(undefined, dataString);
            callback(undefined, request.responseText);
        };

        if(this.readyState === 4 && request.status !== 200) {
            callback("something wrongs", undefined);
        };
    };
    request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`,true);
    request.withCredentials = true;
    request.send();
};

   getTodos(1, callback);
