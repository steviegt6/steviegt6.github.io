/*
 * automatically handles adding other javascript files
 * to a page on load. "injects" them in, lol
 * also handles stylesheets
 */
window.onload = function() {
  document.body.innerHTML =
    '<div id="particles-js"></div>' + document.body.innerHTML;

  add(fileType.CSS, "head", "/css/main.css");
  add(fileType.JS, "body", "/js/vincent_garreau/particles.js");
  add(fileType.JS, "body", "/js/particleHandler.js");
};

const fileType = {
  CSS: "css",
  JS: "js"
};

const appendType = {
  Beginning: "beginning",
  End: "end"
};

function createStyleSheetRef(file) {
  return '<link rel="stylesheet" href=' + file + ">";
}

function createScriptRef(file) {
  return "<script src=" + file + "></script>";
}

function add(type, element, file, append) {
  var headElement = document.getElementsByTagName(element)[0];

  switch (type) {
    case fileType.CSS:
      switch (append) {
          case appendType.Beginning
      }
      headElement.innerHTML += createStyleSheetRef(file);
      break;

    case fileType.JS:
      headElement.innerHTML += createScriptRef(file);
      break;
  }
}
