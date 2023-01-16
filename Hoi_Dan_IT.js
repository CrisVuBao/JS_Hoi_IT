// Async & Await
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



// #10 Async & Await 
// xử lý bất đồng bộ sao dễ vậy
// * Async
const getNewTodo = async(id) => {
   let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
   let data = await response.json(); 
   console.log("get data", data);
    // nếu console ra promise {pending}: gọi là code chạy xong rồi, nhưng promise chưa trả ra kết quả, nghĩa là: đang tạm ngừng.

}
console.log(getNewTodo()); // nếu chỉ getNewTodo thôi thì , sẽ là tham chiếu đến hàm async()
                            // nếu getNewTodo() , đang gọi hàm getNewTodo

getNewTodo(3).then(data => {
    console.log("get data: ", data);
});

