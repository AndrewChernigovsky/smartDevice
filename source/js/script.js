'use strict';
const footerNav = document.querySelector('.footer__nav')
const footerContacts = document.querySelector('.footer__contacts')

const btnContactsFooter = document.getElementById('footerBtnContacts');
const btnNavFooter = document.getElementById('footerBtnNav');

footerNav.classList.remove('footer__nav--nojs')
footerContacts.classList.remove('footer__contacts--nojs')

btnNavFooter.addEventListener('click', ()=> {
  if (footerNav.classList.contains('footer__nav--closed')) {
    footerNav.classList.add('footer__nav--opened')
    footerNav.classList.remove('footer__nav--closed')
  } else {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
  }
  if (footerContacts.classList.contains('footer__nav--opened')) {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
  }
})

btnContactsFooter.addEventListener('click', ()=> {
  if (footerContacts.classList.contains('footer__contacts--closed')) {
    footerContacts.classList.add('footer__contacts--opened')
    footerContacts.classList.remove('footer__contacts--closed')
  } else {
    footerContacts.classList.remove('footer__contacts--opened')
    footerContacts.classList.add('footer__contacts--closed')
  }
  if (footerNav.classList.contains('footer__nav--opened')) {
      footerContacts.classList.remove('footer__contacts--closed')
      footerContacts.classList.add('footer__contacts--closed')
  }
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
