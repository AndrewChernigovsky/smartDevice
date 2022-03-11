'use strict';
const footerNav = document.querySelector('.footer__nav')
const footerNavNoJS = document.querySelector('.footer__nav--nojs')

footerNav.classList.remove(footerNavNoJS)


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
