/*
 * automatically handles adding other javascript files
 * to a page on load. "injects" them in, lol
 * also handles stylesheets
 */
window.onload = function() {
  add(fileType.CSS, "/css/main.css")
};

const fileType = {
  CSS: "css",
  JS: "js"
};

function createStyleSheetRef(file) {
  var cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";
  cssLink.href = "style.css";
  return cssLink;
}

function add(type, file) {
  var headElement = document.getElementsByTagName("head")[0];

  switch (type) {
    case fileType.CSS:
      headElement.appendChild(createStyleSheetRef(file));
      break;

    case fileType.JS:
      break;
  }
}
