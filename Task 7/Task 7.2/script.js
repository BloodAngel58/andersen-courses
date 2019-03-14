var tags = new Array();
var countTags = {};

function CountTags() {
  var elems = document.body.getElementsByTagName("*");
  elems = Array.prototype.slice.call(elems);
  elems.forEach(function (elem) {
    addTags(elem.tagName);

  });
  showTags();
}

function addTags(elem) {
  if (tags.indexOf(elem) == -1) {
    tags.push(elem);
    countTags[elem] = 1;
  } else {
    countTags[elem]++;

  }

}

function showTags() {
  for (var key in countTags) {
    console.log("ТЕГ: " + key + " значение: " + countTags[key]);
  }
}

CountTags();