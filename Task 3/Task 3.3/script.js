var a = +prompt("Введите число ");
var str = a.toString();
var result = str
  .split("")
  .reverse()
  .join("");
console.log(result);
alert(result);
