var injectFooter = `
<div id="bottom-bar">
  <p>
    © 2021 Stevie, MIT License - tsParticles by Matteo Bruni, MIT License (https://github.com/matteobruni/tsparticles)
  </p>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML += injectFooter;
}, false);
