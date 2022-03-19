"use strict";
const footerNav = document.querySelector(".footer__nav");
const footerContacts = document.querySelector(".footer__contacts");
const footerTitleNav = document.querySelector(".footer__title-nav");
const footerTitleContacts = document.querySelector(".footer__title-contacts");
const btnContactsFooter = document.getElementById("footerBtnContacts");
const btnNavFooter = document.getElementById("footerBtnNav");

footerNav.classList.remove("footer__nav--nojs");
footerContacts.classList.remove("footer__contacts--nojs");

footerTitleNav.addEventListener("click", () => {
    footerContacts.classList.remove("footer__contacts--opened");
    footerContacts.classList.add("footer__contacts--closed");

    if (footerNav.classList.contains("footer__nav--closed")) {
        footerNav.classList.add("footer__nav--opened");
        footerNav.classList.remove("footer__nav--closed");
    } else if (footerContacts.classList.contains("footer__contacts--opened")) {
        footerContacts.classList.remove("footer__contacts--opened");
        footerContacts.classList.add("footer__contacts--closed");
    } else {
        footerNav.classList.remove("footer__nav--opened");
        footerNav.classList.add("footer__nav--closed");
    }
})

btnNavFooter.addEventListener("click", () => {
    footerContacts.classList.remove("footer__contacts--opened");
    footerContacts.classList.add("footer__contacts--closed");

    if (footerNav.classList.contains("footer__nav--closed")) {
        footerNav.classList.add("footer__nav--opened");
        footerNav.classList.remove("footer__nav--closed");
    } else if (footerContacts.classList.contains("footer__contacts--opened")) {
        footerContacts.classList.remove("footer__contacts--opened");
        footerContacts.classList.add("footer__contacts--closed");
    } else {
        footerNav.classList.remove("footer__nav--opened");
        footerNav.classList.add("footer__nav--closed");
    }
});

footerTitleContacts.addEventListener("click", () => {
    footerNav.classList.remove("footer__nav--opened");
    footerNav.classList.add("footer__nav--closed");
    if (footerContacts.classList.contains("footer__contacts--closed")) {
        footerContacts.classList.add("footer__contacts--opened");
        footerContacts.classList.remove("footer__contacts--closed");
    } else if (footerNav.classList.contains("footer__nav--opened")) {
        footerNav.classList.remove("footer__nav--opened");
        footerNav.classList.add("footer__nav--closed");
    } else {
        footerContacts.classList.remove("footer__contacts--opened");
        footerContacts.classList.add("footer__contacts--closed");
    }
})


btnContactsFooter.addEventListener("click", () => {
    footerNav.classList.remove("footer__nav--opened");
    footerNav.classList.add("footer__nav--closed");
    if (footerContacts.classList.contains("footer__contacts--closed")) {
        footerContacts.classList.add("footer__contacts--opened");
        footerContacts.classList.remove("footer__contacts--closed");
    } else if (footerNav.classList.contains("footer__nav--opened")) {
        footerNav.classList.remove("footer__nav--opened");
        footerNav.classList.add("footer__nav--closed");
    } else {
        footerContacts.classList.remove("footer__contacts--opened");
        footerContacts.classList.add("footer__contacts--closed");
    }
});

// Form Popup
const btnPopup = document.getElementById("callUs");
const overflow = document.getElementById("overflow");
const popupName = document.getElementById("popname");
const popupform = document.querySelector(".mainformPopup");
const popupformbtn = document.querySelector(".btnPop");
const body = document.querySelector(".page__body");
const formPopup = document.querySelector(".main-formPopup");
const formPopupName = document.getElementById("popname");
const formPopupPhone = document.getElementById("popphone");
const formPopupFaq = document.getElementById("popfaq");

const form = document.getElementById("form");
const formName = document.getElementById("name");
const formPhone = document.getElementById("phone");
const formFaq = document.getElementById("faq");

btnPopup.addEventListener("click", () => {
    overflow.classList.add("overflow");
    popupform.classList.add("mainformPopup-js");
    body.style.overflowY = "hidden";
    popupform.style.overflowY = "scroll";
    formPopup.classList.add("scroll-form");
    popupName.focus();
});

overflow.addEventListener("click", () => {
    popupform.classList.remove("mainformPopup-js");
    overflow.classList.remove("overflow");
    body.style.overflowY = "scroll";
    popupform.style.overflowY = "hidden";
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        popupform.classList.remove("mainformPopup-js");
        overflow.classList.remove("overflow");
        body.style.overflowY = "scroll";
        popupform.style.overflowY = "hidden";
    }
});

popupformbtn.addEventListener("click", () => {
    popupform.classList.remove("mainformPopup-js");
    overflow.classList.remove("overflow");
    body.style.overflowY = "scroll";
    popupform.style.overflowY = "hidden";
});

formPopupName.removeAttribute("required");
formPopupPhone.removeAttribute("required");
formName.removeAttribute("required");
formPhone.removeAttribute("required");

popupform.addEventListener("submit", function (evt) {
    if (isValidName(formPopupName)) {
        formPopupName.classList.add("error");
        evt.preventDefault();
    } else {
        formPopupName.classList.remove("error");
        formPopupName.classList.add("success");
        localStorage.setItem("usernamePopup", formPopupName.value);
    }

    if (isValidPhone(formPopupPhone)) {
        formPopupPhone.classList.add("error");
        evt.preventDefault();
    } else {
        formPopupPhone.classList.remove("error");
        formPopupPhone.classList.add("success");
        localStorage.setItem("phonePopup", formPopupPhone.value);
    }

    if (!formPopupFaq.value.length == 0) {
        if (isValidText(formPopupFaq)) {
            formPopupFaq.classList.add("error");
            evt.preventDefault();
        } else {
            formPopupFaq.classList.remove("error");
            formPopupFaq.classList.add("success");
            localStorage.setItem("textPopup", formPopupFaq.value);
        }
    }

    if (
        formPopupPhone.classList.contains("success") &&
        formPopupName.classList.contains("success")
    ) {
        alert("Форма успешно отправлена");
    }
});

if(popupform.focus()){
    body.blur()
}

form.addEventListener("submit", function (evt) {
    if (isValidName(formName)) {
        formName.classList.add("error");
        evt.preventDefault();
    } else {
        formName.classList.remove("error");
        formName.classList.add("success");
        localStorage.setItem("username", formName.value);
    }

    if (isValidPhone(formPhone)) {
        formPhone.classList.add("error");
        evt.preventDefault();
    } else {
        formPhone.classList.remove("error");
        formPhone.classList.add("success");
        localStorage.setItem("phone", formPhone.value);
    }

    if (!formFaq.value.length == 0) {
        if (isValidText(formFaq)) {
            formFaq.classList.add("error");
            evt.preventDefault();
        } else {
            formFaq.classList.remove("error");
            formFaq.classList.add("success");
            localStorage.setItem("text", formFaq.value);
        }
    }

    if (
        formPhone.classList.contains("success") &&
        formName.classList.contains("success")
    ) {
        alert("Форма успешно отправлена");
    }
});

function isValidPhone(input) {
    return !/^(\+7|7|8)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
        input.value
    );
}

function isValidName(input) {
    return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{3,30}$/.test(input.value);
}

function isValidText(input) {
    return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{10,150}$/.test(input.value);
}

window.addEventListener("DOMContentLoaded", function () {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function mask(event) {
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                ? ""
                : a;
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = "";
        } else setCursorPosition(this.value.length, this);
    }
    formPopupPhone.addEventListener("input", mask, false);
    formPopupPhone.addEventListener("focus", mask, false);
    formPopupPhone.addEventListener("blur", mask, false);

    formPhone.addEventListener("input", mask, false);
    formPhone.addEventListener("focus", mask, false);
    formPhone.addEventListener("blur", mask, false);
});

// anchors

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
