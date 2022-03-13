'use strict';

const { children } = require("cheerio/lib/api/traversing");

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
const popupName = document.getElementById('popname');
const popupform = document.querySelector('.mainformPopup');
const popupformbtn = document.querySelector('.btnPop');
const body = document.querySelector('.page__body');
const formPopup = document.querySelector('.main-formPopup');

btnPopup.addEventListener('click', ()=> {
    overflow.classList.add('overflow')
    popupform.classList.add('mainformPopup-js')
    body.style.overflowY = 'hidden'
    popupform.style.overflowY = 'scroll'
    formPopup.classList.add('scroll-form')
    popupName.focus()
})

popupform.addEventListener('blur', ()=> {
    popupName.focus()
});

overflow.addEventListener('click', ()=> {
    popupform.classList.remove('mainformPopup-js');
    overflow.classList.remove('overflow')
    body.style.overflowY = 'scroll'
    popupform.style.overflowY = 'hidden';
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        popupform.classList.remove('mainformPopup-js')
        overflow.classList.remove('overflow')
        body.style.overflowY = 'scroll'
        popupform.style.overflowY = 'hidden';
    }
})

popupformbtn.addEventListener('click', ()=> {
    popupform.classList.remove('mainformPopup-js')
    overflow.classList.remove('overflow')
    body.style.overflowY = 'scroll'
    popupform.style.overflowY = 'hidden';
})

// if(navMain.classList.contains(mainNavOpened)) {
// body.classList.add('overflow-hidden')
// navList.style.overflowY='scroll';
// } else {
// body.classList.remove('overflow-hidden')
// }

// if(navMain.classList.contains('none')) {
// body.classList.remove('overflow-hidden')
// navList.style.overflowY='hidden';
// }


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
