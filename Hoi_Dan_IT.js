// Throwing Errors
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



// Async & Await 
// xử lý bất đồng bộ sao dễ vậy
//*** Throwing Errors
// const getNewTodo = async(id) => {
//    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     if(response && response.status !== 200) {
//         throw new Error("something wrongs with status code: "+ response.status);
//         //reject
//     }

//     let data = await response.json(); 
//     return data; // resolve
// }


// getNewTodo("hjakfjkasd").then(data => {
//     console.log("get data: ", data);
// })
//     .catch(err => { 
//         console.log("check error: ", err.message);
//     });

// *** Try - catch
const getNewTodo = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response && response.status !== 200) {
            throw new Error("something wrongs with status code: " + response.status);
            // reject
        }

        let data = await response.json();
        return data; // resolve
    } catch (e) {
        console.log("check catch error: ", error.message);
    };
}

getNewTodo(1).then(data => {
    console.log("get data for try catch: ", data);
})
    .catch(err => { 
        console.log("check error try catch: ", err.message);
    });
    
