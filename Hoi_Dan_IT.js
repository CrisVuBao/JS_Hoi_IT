// Chaining Promises

    const callback = (error, data) => {
        if(error) {
            console.log("calling callback with error: ", error);
        }
        if(data) {
            console.log("calling callback with data: ", data);
        }
    }

// #8 ********
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
            callback("something wrongs ", undefined);
            };
    };
    request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`,true);
    request.withCredentials = true;
    request.send();
    });   
};

getTodos(1)
    .then(data1 => {
        console.log("get data1: ", data1);
        return getTodos(2);
    }).then(data2 => {
        console.log("get data2: ", data2);
        return getTodos(3);
    })
    .then(data3 => {{
        console.log("get data3: ", data3);
    }})

    .catch(err => {
        console.log("error", err);
    });