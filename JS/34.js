// Lấy danh sách các thẻ a
aElements = document.links;
for(var i =0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        e.preventDefault();
    }
}