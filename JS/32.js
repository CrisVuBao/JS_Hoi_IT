var buttonElement = document.querySelector("button");
buttonElement.onclick = function(e) {
    e.target.style.color = "#fff";
}
document.querySelector("button").onclick = function(e) {
    e.target.style.color = "#fff";
}