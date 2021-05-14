/*
 * automatically handles adding other javascript files
 * to a page on load. "injects" them in, lol
 * also handles stylesheets
 */
window.onload = function() {
  add(fileType.CSS, "/css/main.css");
  add(fileType.JS, "/js/particleHandler.js");
};

const fileType = {
  CSS: "css",
  JS: "js"
};

function createStyleSheetRef(file) {
  return "<link rel=\"stylesheet\" href=" + file + ">";
}

function createScriptRef(file) {
  return "<script src=" + file + "></script>";
}

function add(type, file) {
  var headElement = document.getElementsByTagName("head")[0];

  switch (type) {
    case fileType.CSS:
      headElement.innerHTML += createStyleSheetRef(file);
      break;

    case fileType.JS:
      headElement.innerHTML += createScriptRef(file);
      break;
  }
}
