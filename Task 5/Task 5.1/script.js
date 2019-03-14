addName();

function addName() {
  var R = prompt("Введите размер массива");

  array = new Array(R); // создаем массив
  for (var i = 0; i < R; i++) {
    array[i] = prompt("Введите " + (i + 1) + " элемент"); // Заполняем массив
  }
  //alert("Ваш массив " + arr);
  //console.log(arr);
  var max = getMaxValue(array);
  var min = getMinValue(array);
  var summ = getSummValue(array);
  alert(
    "Максимальный элемент :" +
      max +
      " ;" +
      "Минимальный элемент :" +
      min +
      " ;" +
      "Сумма элементов :" +
      summ +
      " ;"
  );
  console.log(array);
}
// получение максимального элемента массива
function getMaxValue(array) {
  var max = array[0]; // берем первый элемент массива
  for (var i = 0; i < array.length; i++) {
    // переберем весь массив
    // если элемент больше, чем в переменной, то присваиваем его значение переменной
    if (max < array[i]) max = array[i];
  }
  // возвращаем максимальное значение
  return max;
}

// получение минимального элемента массива
function getMinValue(array) {
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
}
// Суммма элементов массива
function getSummValue(array) {
  var Summ = 0;
  for (var i = 0; i < array.length; i++) {
    Summ = Summ + parseInt(array[i]);
  }
  return Summ;
}
