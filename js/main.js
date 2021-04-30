var navigationBar = `
<ul class="ul-nav">
  <div class="li-nav">
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </li>
  </div>
</ul>
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
