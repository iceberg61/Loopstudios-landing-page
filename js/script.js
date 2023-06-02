// const navToggle = document.getElementById('mobile-nav-toggle');
// const primaryNav = document.getElementById('primary-navigation');

// navToggle.addEventListener('click', ()=> {
//     const visibility = primaryNav.getAttribute('data-visible');
//     // console.log(visibility);
//     if (visibility === 'false') {
//         primaryNav.setAttribute('data-visible', 'true')
//         navToggle.setAttribute('aria-expanded', 'true')
//     } else {
//         primaryNav.setAttribute('data-visible', 'false')
//         navToggle.setAttribute('aria-expanded', 'false')
//     }
// });

const hambuger = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

const primaryNav = document.getElementById('primary-navigation');
const navToggle = ()=> primaryNav.classList.toggle('active');

hambuger.addEventListener('click', navToggle)
closeBtn.addEventListener('click', navToggle)