var formNodes = document.forms; // trả về html collection
console.log(formNodes); 
console.log(formNodes[1]); // truy xuất form đầu tiên với index (chỉ mục)
console.log(formNodes["form-2"]) // truy xuất với key trùng với id của form
console.log(formNodes.textform); // truy xuất với key trùng với id của form