'use strict';

document.addEventListener('DOMContentLoaded', () => {
    function getMenu(hamburgerIco,menu,menuLink) {
        
        const hamburger = document.querySelector(hamburgerIco),
              mobileMenu = document.querySelector(menu),
              links = document.querySelectorAll(menuLink);

        if (hamburger && mobileMenu && links) {
            hamburger.addEventListener('click', event => {
                if (hamburger.classList.contains('hamburger_active')) {
                    hamburger.classList.remove('hamburger_active');
                    mobileMenu.classList.remove('nav_wrapper_active');
                } else {
                    hamburger.classList.add('hamburger_active');
                    mobileMenu.classList.add('nav_wrapper_active');
                }
            });

            links.forEach( link => {
                link.addEventListener('click', event => {
                    if (hamburger.classList.contains('hamburger_active')) {
                        hamburger.classList.remove('hamburger_active');
                        mobileMenu.classList.remove('nav_wrapper_active');
                    }
                });
            });
        }
    }
    getMenu('.hamburger','.nav_wrapper', '.nav_link');


});