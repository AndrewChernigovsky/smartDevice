'use strict';
const footerNav = document.querySelector('.footer__nav')
const footerNavNoJS = document.querySelector('.footer__nav--nojs')
const footerNavClosed = document.querySelector('.footer__nav--closed')
const footerNavOpened = document.querySelector('.footer__nav--opened')
const btnNavFooter = document.getElementById('footerBtnNav');

footerNav.classList.remove(footerNavNoJS)

btnNavFooter.addEventListener('click', ()=> {
  if (footerNavClosed) {
    footerNav.classList.add(footerNavOpened)
    footerNav.remove(footerNavClosed)
    console.log(1)
  } else {
    footerNav.remove(footerNavOpened)
    footerNav.classList.add(footerNavClosed)
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
