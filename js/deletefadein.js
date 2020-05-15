function deleteFadeIn() {
    document.getElementsByClassName("fadeBody").style[0] = "opacity: 1;"
}
document.onload = setTimeout(deleteFadeIn, 8500);