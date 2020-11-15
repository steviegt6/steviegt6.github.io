var error404URLs = [
    "https://http.cat/404",
    "https://httpstatusdogs.com/img/404.jpg"
];

function getRandomImage(name) {
    var array = name == "error404URLs" ? error404URLs : [""];

    if (array == [""]) {
        throw "Array was empty, input was: " + name;
    }

    return "<img src =\"" + array[Math.floor(Math.random() * array.length)] + "\"/>";
}