'use strict';
var popup = document.querySelectorAll('.popup-overlay');
var popupError = document.querySelector('.popup-overlay--error');
var popupSuccess = document.querySelector('.popup-overlay--success');

var popupBtn = document.querySelectorAll('.popup__btn');
var popupOkBtn = document.querySelector('.popup__ok-btn');
var popupCloseBtn = document.querySelector('.popup__close-btn');


/*__________ДОДЕЛАТЬ!____________*/
for (var i=0; i < popupBtn.length; i++) {
  popupBtn[i].onclick = function() {
    if (!popup[i].classList.contains('popup-hide')) {
      popupError.classList.add('popup-hide');
    }
  };
}



