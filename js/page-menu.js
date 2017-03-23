'use strict';

var menu = document.querySelector('.page-menu');
var menuToggle = document.querySelector('.page-menu__btn');

menuToggle.addEventListener('click', function() {
  if (!menu.classList.contains('page-menu--opened')) {
    menu.classList.add('page-menu--opened');
  } else {
    menu.classList.remove('page-menu--opened');
  }
  if (menuToggle.classList.contains('page-menu__btn--open')) {
    menuToggle.classList.remove('page-menu__btn--open');
    menuToggle.classList.add('page-menu__btn--close');
  } else {
    menuToggle.classList.remove('page-menu__btn--close');
    menuToggle.classList.add('page-menu__btn--open');
  }
});
