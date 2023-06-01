// trước khi thamn chiếu đến attibute node hay text node => tham chiếu đến element node chứa các node
var headingElement = document.querySelector('h2');
// thêm các thuộc tính hợp lệ
headingElement.title = 'heading 2';
headingElement.id = 'head2';
headingElement.className = 'head2';
// thêm các thuojc tính  bất kỳ (bao gồm các thuộc tính hợp lệ và các thuộc tính tự đặt)
headingElement.setAttribute('class', 'head2');
headingElement.setAttribute('href', 'head2');
headingElement.setAttribute('data-1', 'head2');

// lấy giasd trị thuộc tính 
console.log(headingElement.getAttribute('class'));
console.log(headingElement.title);
