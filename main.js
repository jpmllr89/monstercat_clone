const hamburgerSwitchVert = document.querySelector('.hamburger-switch.vert');
const hamburgerSwitchHorz = document.querySelector('.hamburger-switch.horz');

hamburgerSwitchVert.addEventListener('click', () => {
  let socialMediaVert = document.querySelector('.social-media-bar.vert');
  console.log(socialMediaVert);
  socialMediaVert.classList.toggle('active');
  console.log('clicked');
});

hamburgerSwitchHorz.addEventListener('click', () => {
  let socialMediaHorz = document.querySelector('.social-media-bar.horz');
  console.log(socialMediaHorz);
  socialMediaHorz.classList.toggle('active');
  console.log('clicked');
});

