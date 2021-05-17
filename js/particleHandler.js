tsParticles
  .loadJSON("tsparticles", "assets/particles.json")
  .then(container => {
    console.log("callback - tsparticles config loaded");
  })
  .catch(error => {
    console.error(error);
  });
