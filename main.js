window.onload = () => {
  const hamburgerSwitch = document.querySelectorAll('#switch');

  hamburgerSwitch.forEach((x) => x.addEventListener('click', () => {
    let socialMediaBar = document.querySelector('.social-media-bar');
    socialMediaBar.classList.toggle('active');
    console.log('clicked');
  }))
}

