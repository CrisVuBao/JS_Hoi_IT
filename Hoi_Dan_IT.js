let  dogNumber = [
  {name: 'husky', crazy: 1},
  {name: 'alaska', crazy: 2},
  {name: 'cogy', crazy: 3},
  {name: 'cho ngu', crazy: 3}
];
// Filter, Find
let putFilter = dogNumber.filter((item,index) => {
  return item &&  item.crazy === 3; // nếu chỉ để mỗi item.crazy === 3 thì 
  // nó sẽ trả về true hoặc false 
  // Còn nếu thêm item && , thì nó sẽ cố gắng trả về phần tử trong mảng đã khai báo
});
console.log(putFilter);

//Find
let outFind = dogNumber.find((item, index) => { 
// Find: tìm và xuất ra phần tử đầu tiên trong mảng, object,.vv nếu thỏa điều kiện
  return item && item.crazy > 1;
});
console.log(outFind);
