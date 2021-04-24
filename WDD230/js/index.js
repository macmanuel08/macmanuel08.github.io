document.querySelector('#year').innerText = new Date().getFullYear();
var date = newDate(document.lastModified);
document.querySelector('#lastModified').innerText = date;