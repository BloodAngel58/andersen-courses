function superDelay(text, delay) {
  setTimeout(function() {
    console.log("Message: " + text + "!!!");
  }, delay);
}
superDelay("Дратути", 1000);
superDelay("Рабоооотает!!!", 3000);
superDelay("lol", 7000);
/////
// Вариант 2
////
function delay(f, ms) {
  return function() {
    var savedThis = this;
    var savedArgs = arguments;
    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}

function mymessage(msg) {
  console.log("Message: " + msg);
}

var superfunc = delay(mymessage, 3000);

superfunc("Тяп-Ляп");
