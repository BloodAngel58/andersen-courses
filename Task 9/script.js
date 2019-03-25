document.addEventListener(
    'DOMContentLoaded', init);

function init() {
    var d1, d3, a1;
    a1 = document.getElementById('a1');
    a1.addEventListener('click', onClickA1);
    document.addEventListener('mousemove', onMouseMove);
}

function onClickA1(e) {
    var int = document.getElementById("int").value;
    if (isNumeric(int) && int < 100) {
        console.log(int)
        for (var i = 0; i < int; i++) {
            document.getElementById("ins-div").innerHTML += '<div onmouseover="mouselog(event)" class="inserted-div"></div>';
        }
    } else {
        console.log("Ошибка", int)
        alert("Ошибка!!  Вы ввели:" + " " + int + "Допустимые значение : от 0 до 100")
    }
    document.getElementById("int").value = 0;
}

function mouselog(event) {
    console.log(event.target.className);
    if (event.target.className !== "true-div") {
        event.target.className = 'true-div';

    }
    game();
}

function isNumeric(n) {
    return (parseInt(n));
}

function color() {
    block.classList.add('true-div');
}

var timeout = null;

function heavy(e) {
    var s1;

    timeout = null;
    s1 = document.getElementById('s1');
    console.log('курсорчик побежааал');
    s1.style.left = e.clientX + 'px';
    s1.style.top = e.clientY + 'px';
}

function onMouseMove(e) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    timeout = setTimeout(function () {
        heavy(e);
    }, 20);
}

function game() {
    var x = document.getElementsByClassName("true-div").length;
    console.log('проверка');
    console.log(x);
    var y = document.getElementsByClassName("inserted-div").length;
    console.log(y);
    if (y == 0) {
        Completed();
        alert('Вы выиграли');
    }
}

function Completed() {
    console.log("УДАЛЯЕМ");
    /*var div = document.getElementById('ins-div');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }*/
    document.getElementById('ins-div').innerHTML = '';

}
//1) mouse move
// mousemove 
// mouseenter mouseleave
// mouseover mouseout

//2) mouse button
// mousedown mouseup click dblclick

//3) keyboard
// keydown keyup keypress  e.keyCode ASCII

//4) input
// change [blur] input