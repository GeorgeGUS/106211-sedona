'use strict';
var popup = document.querySelectorAll('.popup');
var popupSuccess = document.querySelector('.popup--success');
var form = document.querySelector('.form');
var phoneNum = document.querySelector('.form-section__input--phone');

var closePopup = function(evt) {
  if (evt.target.classList.contains('popup__btn')) {
    if (!this.classList.contains('popup--closed')) {
      this.classList.add('popup--closed');
    }
  }

  if (evt.target.classList.contains('popup__btn--send')) {
    form.submit();
  }
};

var checkSubmit = function(evt) {
  evt.preventDefault();
  popupSuccess.classList.remove('popup--closed');
};

for (var i = 0; i < popup.length; i++) {
  popup[i].addEventListener('click', closePopup);
}

form.addEventListener('submit', checkSubmit);
