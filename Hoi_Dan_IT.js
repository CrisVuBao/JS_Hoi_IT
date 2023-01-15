// Fetch API

    const callback = (error, data) => {
        if(error) {
            console.log("calling callback with error: ", error);
        }
        if(data) {
            console.log("calling callback with data: ", data);
        }
    }

function getTodos(id, callback) {
    
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if(this.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            const dataString = JSON.stringify(data)
            resolve(data);
            };

            if(this.readyState === 4 && request.status !== 200) {
            reject("something wrongs with id: " + id);
            };
    };
    request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`,true);
    request.withCredentials = true;
    request.send();
    });   
};



// #9 Fetch API
fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(Response => {
        return Response.json();
    })
    .then(data => {
        console.log("check fetch data:", data);
    })
