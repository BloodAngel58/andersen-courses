var name = prompt("Как тебя зовут ?");
var year = +prompt("Сколько лет ? ");
var smoking = confirm("Куришь ?");
var year_on_display;
if ((year > 4 && year < 20) || ((year % 10 >= 5) || (year % 10 === 0))) {
    year_on_display = " " + year + "лет";
} else if ((year === 1) || (year % 10 === 1)) {
    // +god
    year_on_display = " " + year + " год";
} else {
    year_on_display = " " + year + "года";
}
if ((year < 18) && (smoking == false)) {

    alert(name + ", " + year_on_display + " так держать! ");

} else if ((year < 18) && (smoking == true)) {
    alert(name + ", " + year_on_display + " маме расскажу!");
} else if ((year >= 18) && (smoking == false)) {
    alert(name + ", " + year_on_display + " молодец, и не надо");
} else {
    alert(name + ", " + year_on_display + " ну и зря");
}