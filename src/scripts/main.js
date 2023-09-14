/* eslint-disable max-len */
'use strict';

// const header = document.querySelector('.header');
// const navLinks = document.querySelectorAll('.nav__link');
// const socialIcons = document.querySelectorAll('.social__icon');
// const logoImage = document.querySelector('.logo__image');

// const blackImagePaths = {
//   navLinks: './images/your-black-nav-link.png',
//   logoImage: './src/images/black_logo.png',
//   socialIcons: [
//     './images/youtube-black.png',
//     './images/telegram-black.png',
//     './images/social-icon-3-black.png',
//   ],
// };

// const originalImagePaths = {
//   navLinks: './images/your-original-nav-link.png',
//   logoImage: './src/images/logo.png',
//   socialIcons: [
//     './images/youtube-fill.png',
//     './images/telegram-fill.png',
//     './images/social-icon-3.png',
//   ],
// };

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) {
//     header.classList.add('header__white');

//     navLinks.forEach(link => {
//       link.style.color = '#000';
//     });

//     socialIcons.forEach((icon, index) => {
//       icon.src = blackImagePaths.socialIcons[index];
//     });
//     logoImage.src = blackImagePaths.logoImage;
//   } else {
//     header.classList.remove('header__white');

//     navLinks.forEach(link => {
//       link.style.color = '#fff';
//     });

//     socialIcons.forEach((icon, index) => {
//       icon.src = originalImagePaths.socialIcons[index];
//     });
//     logoImage.src = originalImagePaths.logoImage;
//   }
// });

let counter = 1;

setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 2000);

const showAllButton = document.querySelector('.showAllSpeakers');
const hiddenSpeakers = document.querySelectorAll('.speakers__main--card.hidden');
const textBlock = document.querySelector('.speakers__main--first--text.hidden');

showAllButton.addEventListener('click', function() {
  hiddenSpeakers.forEach(speaker => {
    speaker.classList.remove('hidden');
  });
  textBlock.classList.remove('hidden');
});
