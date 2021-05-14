/*
 * automatically handles adding other javascript files
 * to a page on load. "injects" them in, lol
 * also handles stylesheets
 */
window.onload = function() {
  //add(fileType.JS, "body", "/js/vincent_garreau/particles.js", appendType.Beginning);
  //add(fileType.JS, "body", "/js/particleHandler.js", appendType.Beginning);
  
  //document.body.innerHTML =
  //  '<div id="particles-js"></div>' + document.body.innerHTML;
  
  add(fileType.CSS, "head", "/css/main.css", appendType.End);
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
        case appendType.Beginning:
          headElement.innerHTML = createStyleSheetRef(file) + headElement.innerHTML;
          break;
          
        case appendType.End:
          headElement.innerHTML += createStyleSheetRef(file);
          break;
      }
      break;

    case fileType.JS:
      switch (append) {
        case appendType.Beginning:
          headElement.innerHTML = createScriptRef(file) + headElement.innerHTML;
          break;
          
        case appendType.End:
          headElement.innerHTML += createScriptRef(file);
          break;
      }
      break;
  }
}
