var a = +prompt("Введите число ");
var count = 0;
var temp = a;
var result = 0;
while (temp != 0) {
    temp = parseInt(temp / 10);
    count++;
}
var i = count;
for (var j = 1; j < count; j++) {

    result += parseInt(a % Math.pow(10, j) / Math.pow(10, j - 1)) * Math.pow(10, i - 1);
    i--;
}
result += parseInt(a / Math.pow(10, count - 1));
alert(result);