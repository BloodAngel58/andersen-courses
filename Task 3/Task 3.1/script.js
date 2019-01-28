var year = +prompt("Сколько лет ? ");
var smocking = confirm("Куришь ?");

if ((year < 18) && (smocking == false)) {
    alert("Так держать!");
} else if ((year < 18) && (smocking == true)) {
    alert("Маме расскажу!");
} else if ((year >= 18) && (smocking == false)) {
    alert("Молодец, и не надо");
} else {
    alert("Ну и зря");
}