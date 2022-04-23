function check() {
    var a = document.getElementById("name").value;
    if (a.length == 0) {
        document.getElementById("show").innerHTML = "no data ";

    } else
        document.getElementById("show").innerHTML = a;
}