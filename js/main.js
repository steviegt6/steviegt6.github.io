// all functions & other important stuff below
window.addEventListener("load", loadEvent, false);

// main load event, nothing all that important
function loadEvent() {}

function handleCustomLinkLogic(url) {}

var error404URLs = [
  "https://http.cat/404",
  "https://httpstatusdogs.com/img/404.jpg",
  "https://i.pinimg.com/originals/9e/89/e9/9e89e9298bea2893ea034296a897ff70.jpg",
  "https://i.chzbgr.com/full/8424964096/h76440262/address-unknown"
];

function getRandomImage(name, id) {
  var array = processImageArrayInput(name);
  document.getElementById(id).innerHTML =
    '<img src ="' + array[Math.floor(Math.random() * array.length)] + '"/>';
}

function processImageArrayInput(name) {
  name = name.toLowerCase();

  switch (name) {
    case "error404urls":
      return error404URLs;

    default:
      throw "Array not found, input was: " + name;
  }
}
