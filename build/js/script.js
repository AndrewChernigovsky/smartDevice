'use strict';
const footerNav = document.querySelector('.footer__nav')
const footerContacts = document.querySelector('.footer__contacts')
const btnContactsFooter = document.getElementById('footerBtnContacts');
const btnNavFooter = document.getElementById('footerBtnNav');

footerNav.classList.remove('footer__nav--nojs')
footerContacts.classList.remove('footer__contacts--nojs')

btnNavFooter.addEventListener('click', ()=> {
    footerContacts.classList.remove('footer__contacts--opened')
    footerContacts.classList.add('footer__contacts--closed')

  if (footerNav.classList.contains('footer__nav--closed')) {
    footerNav.classList.add('footer__nav--opened')
    footerNav.classList.remove('footer__nav--closed')
  } else if (footerContacts.classList.contains('footer__contacts--opened')) {
    footerContacts.classList.remove('footer__contacts--opened')
    footerContacts.classList.add('footer__contacts--closed')
    } else {
        footerNav.classList.remove('footer__nav--opened')
        footerNav.classList.add('footer__nav--closed')
    }
})

btnContactsFooter.addEventListener('click', ()=> {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
  if (footerContacts.classList.contains('footer__contacts--closed')) {
    footerContacts.classList.add('footer__contacts--opened')
    footerContacts.classList.remove('footer__contacts--closed')
  } else if (footerNav.classList.contains('footer__nav--opened')) {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
    } else {
        footerContacts.classList.remove('footer__contacts--opened')
        footerContacts.classList.add('footer__contacts--closed')
  }
})

// Form Popup
const btnPopup = document.getElementById('callUs');
const overflow = document.getElementById('overflow');
const popupshow = document.querySelector('.mainformPopup-js');
const popupform = document.querySelector('.mainformPopup');
const popupformbtn = document.querySelector('.btnPop');
const body = document.getElementsByTagName('body')[0];

btnPopup.addEventListener('click', ()=> {
    overflow.classList.add('overflow')
    popupform.classList.add('mainformPopup-js');
})

overflow.addEventListener('click', ()=> {
    popupform.classList.remove('mainformPopup-js');
    overflow.classList.remove('overflow')
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        popupform.classList.remove('mainformPopup-js')
        overflow.classList.remove('overflow')
    }
})

popupformbtn.addEventListener('click', ()=> {
    popupform.classList.remove('mainformPopup-js')
    overflow.classList.remove('overflow')
})

if(popupform.classList.contains('mainformPopup-js')) {

    body.classList.add('overflow-hidden')
    popupform.style.overflowY='scroll';
} else {
        body.classList.remove('overflow-hidden')
        popupform.style.overflowY='hidden';
    }
// anchors

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
