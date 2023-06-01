function render(html) {
    var ulElement = document.querySelector("ul");
    ulElement.innerHTML = html;
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học CSS</li>
    <li>Khóa học vip</li>
`)