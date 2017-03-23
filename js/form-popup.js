'use strict';
var popup = document.querySelectorAll('.popup-overlay');
var popupSuccess = document.querySelector('.popup-overlay--success');
var form = document.querySelector('.form');

var closePopup = function(evt) {
  if (evt.target.classList.contains('popup__btn')) {
    if (!this.classList.contains('popup-hide')) {
      this.classList.add('popup-hide');
    }
  }

  if (evt.target.classList.contains('popup__send-btn')) {
    form.submit();
  }
};

var checkSubmit = function(evt) {
  evt.preventDefault();
  console.dir(evt.target);
  popupSuccess.classList.remove('popup-hide');
};

for (var i = 0; i < popup.length; i++) {
  popup[i].addEventListener('click', closePopup);
}

form.addEventListener('submit', checkSubmit);
