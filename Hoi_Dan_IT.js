let arrNum = [1,10,5,3];

let outAN = arrNum.sort((a,b) => { // sort: công dụng là sắp lại theo đúng thứ tự quy định
  return a - b;
});
console.log(outAN);

let objName = [
  {stt:3, name: "mtp"},
  {stt:7, name: "key trần"},
  {stt:1, name: "low "},
  {stt:10, name: "mười"}
];

let outObj = objName.sort((item1,item2) => { // Ex sort: sắp xếp stt theo thứ tự là "stt: 1,3,7,10"
  return item1.stt - item2.stt;
});
console.log(outObj);