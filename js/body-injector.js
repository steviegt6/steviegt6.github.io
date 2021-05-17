var injectParticles = `
<div id="tsparticles"></div>
<script src="/js/matteo/bruni/tsparticles.js"></script>
<script src="/js/particleHandler.js"></script>
`;

var injectFooter = `
<div id="bottom-bar">
  <p>
    © 2021 Stevie, MIT License - tsParticles by Matteo Bruni, MIT License (https://github.com/matteobruni/tsparticles)
  </p>
</div>
`;

document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.body.innerHTML = injectParticles + document.body.innerHTML + injectFooter;
  },
  false
);
