// Async (Asynchronous): Bất đồng bộ
// + Ex: ví dụ trong ngôn ngữ java có tính (đồng bộ), khi run code, phải chạy code theo thứ tự.
//cái nào vào trước thì dc chạy trước
// + Ex 2: ví trọng trong javascript (bất đồng bộ) , không quan trọng thứ tự, code cứ chạy hết, cứ về đến đích là dc, ra kết quả là dc


// Ex Code:
console.log("Chó");
console.log("Lợn");
setTimeout( () => {
  console.log("Hello dog");
  
}, 3000);
console.log("Gao ồ");
// như dòng code trên về (bất đồng bộ): kết quả vận xuất ra chó, lợn, gao ồ trước
//rồi sau đó mới đến hello dog, vì bất đồng bộ là cái nào vào trước thì dc ra kết quả trước, ko cần phải xếp hàng đợi, ko cần theo thứ tự