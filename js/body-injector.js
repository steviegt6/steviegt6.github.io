var injectFooter = `
<div id="bottom-bar">
  <p>
    © 2021 Stevie, MIT License
  </p>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML += injectFooter;
}, false);
