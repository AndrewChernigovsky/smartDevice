'use strict';
const btnAccardionNav = document.getElementById('footerBtnNav');
const footernojsNav = document.querySelector('.footer__nav--nojs');
const footerNavWrapper = document.querySelector('.footer__list-wrapper');
const footerNavOpened = document.querySelector('.footer__nav--opened');
const footerNavClosed = document.querySelector('.footer__nav--closed');

const btnAccardionContacts = document.getElementById('footerBtnNav');
const footernojsContacts = document.querySelector('.footer__contacts--nojs');
const footerContactsWrapper = document.querySelector('.footer__contacts-wrapper');
const footerContactsOpened = document.querySelector('.footer__contacts--opened');
const footerContactsClosed = document.querySelector('.footer__contacts--closed');

// footerNavWrapper.remove(footernojsNav);
// footerContactsWrapper.remove(footernojsContacts);


btnAccardionNav.addEventListener('click', ()=>{
  if(footerNavWrapper.classList.contains('.footer__contacts--closed')) {
    footerNavWrapper.classList.add('.footer__contacts--opened');
  } else {
    footerNavWrapper.remove('.footer__contacts--opened')
    footerNavWrapper.classList.add('.footer__contacts--closed');
  }
})

// btnAccardionContacts.addEventListener('click', ()=>{
//   if(footerContactsWrapper.contains(footerContactsClosed)) {
//     footerContactsWrapper.classList.add(footerContactsOpened);
//   } else {
//     footerContactsWrapper.classList.remove(footerContactsOpened)
//     footerContactsWrapper.classList.add(footerContactsClosed);
//   }
// })

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
