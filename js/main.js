var navigationBar = `
<div class="nav">
  <a href="index.html">Home</a>
  
  <a href="recruitment.html">Recruitment Memery</a>
  
  <a href="projects/tmlpatcher/subprojects.html">TML.Patcher Sub-Projects</a>
  
  <div class="drop">
    <button class="drop-btn">
      <a href="projects.html">Main Projects</a>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="drop-ctnt">
      <a href="projects/stardew64installer.html">Stardew64Installer</a>
      <a href="projects/tmlpatcher.html">TML.Patcher</a>
      <a href="projects/tmlmods.html">tModLoader Mods</a>
      <a href="projects/standaloneterraria.html">Standalone Terraria</a>
    </div>
  </div>
</div>
`;

window.onload = function() {
  // automatically add the navbar to the
  //beginning of all pages that load this
  // js file (contents are preserved perfectly)
  document.body.innerHTML = navigationBar + document.body.innerHTML;
};

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
