'use strict';
const footerNav = document.querySelector('.footer__nav')
const footerNavNoJS = document.querySelector('footer__nav--nojs')
const footerNavClosed = document.querySelector('footer__nav--closed')
const footerNavOpened = document.querySelector('footer__nav--opened')
const btnNavFooter = document.getElementById('footerBtnNav');

footerNav.classList.remove('footer__nav--nojs')

btnNavFooter.addEventListener('click', ()=> {
  if (footerNav.classList.contains('footer__nav--closed')) {
    footerNav.classList.add('footer__nav--opened')
    footerNav.classList.remove('footer__nav--closed')
    console.log(1)
  } else {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
    console.log(2)
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
