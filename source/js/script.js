'use strict';
const btnAccardionNav = document.getElementById('footerBtnNav');
const footernojsNav = document.querySelector('.footer__nav--nojs');
const footerNavWrapper = document.querySelector('.footer__list-wrapper');
const footerNavOpened = document.querySelector('.footer__nav--opened');

const btnAccardionContacts = document.getElementById('footerBtnNav');
const footernojsContacts = document.querySelector('.footer__contacts--nojs');
const footerContactsWrapper = document.querySelector('.footer__contacts-wrapper');
const footerContactsOpened = document.querySelector('.footer__contacts--opened');

btnAccardionContacts.addEventListener('click', ()=>{
  footerContactsWrapper.remove(footernojsContacts);
  footerContactsWrapper.toggle(footerContactsOpened);
})


btnAccardionNav.addEventListener('click', ()=>{
  footerNavWrapper.remove(footernojsNav);
  footerNavWrapper.toggle(footerNavOpened);
})


// Form
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
