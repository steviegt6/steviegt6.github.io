var error404URLs = [
    "https://http.cat/404",
    "https://httpstatusdogs.com/img/404.jpg"
];

function get404Image() {
    var imgText = "<img src =\"";
    var index = Math.floor(Math.random() * error404URLs.length);
    imgText += error404URLs[index];
    imgText += "\"/>";
    return imgText;
}