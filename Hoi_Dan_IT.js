// Map
let arr = [1,3,5,7,9,10];
for(let i = 0; i < arr.length; i++) { // thay đổi dữ liệu, modify
  arr[i] = arr[i] * arr[i];
}
console.log(arr);

let arrMap = arr.map((item,index) => { // đây là tạo ra mảng mới từ mảng ban đầu
  item = item * item;
  return item;
});
console.log(arrMap);

// nếu không muốn thay đổi biến, trả ra mảng mới, thì dùng map
// muốn tạo ra mảng mới trong biến arr thì dùng map, mảng cũ vẫn như cũ.