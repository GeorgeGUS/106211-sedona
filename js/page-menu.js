'use strict';

var menu = document.querySelector('.page-menu');
var menuList = document.querySelector('.page-menu__list');
var menuToggle = document.querySelector('.page-menu__btn');

menu.classList.remove('page-menu--no-js');

menuToggle.addEventListener('click', function() {
  if (!menuList.classList.contains('page-menu__list--closed')) {
    menuList.classList.add('page-menu__list--closed');
  } else {
    menuList.classList.remove('page-menu__list--closed');
  }

  if (menuToggle.classList.contains('page-menu__btn--close')) {
    menuToggle.classList.remove('page-menu__btn--close');
    menuToggle.classList.add('page-menu__btn--open');
  } else {
    menuToggle.classList.remove('page-menu__btn--open');
    menuToggle.classList.add('page-menu__btn--close');
  }
});
