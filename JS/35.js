document.querySelector('div').onclick = function(e) {
    console.log('DIV');
}

document.querySelector('h1').onclick = function(e) {
    e.stopPropagation();
    console.log('H1');
}