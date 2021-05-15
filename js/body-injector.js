var injectParticles =
`
<div id="particles-js"></div>
<script src="/js/vincent_garreau/particles.js"></script>
<script src="/js/particleHandler.js"></script>
`

var injectFooter =
`
<div id="bottom-bar">
  <p>
    © 2021 Stevie, MIT License - particles.js by Vincent Garreau, MIT License (https://vincentgarreau.com/particles.js/)
  </p>
</div>
`

//TODO: navbar injection too
window.onload = function() {
    document.body.innerHTML = injectParticles + document.body.innerHTML + injectFooter;
};