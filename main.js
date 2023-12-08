const hamburgerSwitch = document.querySelectorAll('.hamburger-switch');

hamburgerSwitch.forEach((x) => x.addEventListener('click', () => {
  let socialMediaBar = document.querySelector('.social-media-bar');
  socialMediaBar.classList.toggle('active');
  console.log('clicked');
}))

