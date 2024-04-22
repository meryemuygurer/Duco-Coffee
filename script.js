'use strict';
console.log('oldu');

const stickyIcon = document.querySelector('.wp-icon img');

stickyIcon.addEventListener('mouseover', function() {
    stickyIcon.style.width = '80px';
});

stickyIcon.addEventListener('mouseout', function() {
    stickyIcon.style.width = '70px'; 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-ul');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(element => {
    element.addEventListener('click', () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
});

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}); 

const kahveLiElements = document.querySelectorAll(".kahve-dd li");

kahveLiElements.forEach((liElement) => {
  liElement.addEventListener("click", function() {
    const linkElement = liElement.querySelector("a");

    if (linkElement) {
      const url = linkElement.getAttribute("href");
      window.location.href = url;
    }
  });
});
