function deleteFadeIn() {
    $("link[href='../css/fadein.css']").remove();
}

window.onLoad = setTimeout(deleteFadeIn, 8500);