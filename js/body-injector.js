var injectFooter = `
<div id="bottom-bar">
  <p>
    © 2021 Stevie, MIT License - particles.js by Vincent Garreau, MIT License (https://vincentgarreau.com/particles.js/)
  </p>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML += injectFooter;
}, false);
