var getUserName = prompt("hello! who are you");

console.log(getUserName);

document.getElementById("userName").innerText = getUserName

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })