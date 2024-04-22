'use strict';
console.log('oldu');

const stickyIcon = document.querySelector('.wp-icon img');

stickyIcon.addEventListener('mouseover', function() {
    stickyIcon.style.width = '80px';
});

stickyIcon.addEventListener('mouseout', function() {
    stickyIcon.style.width = '70px'; // Mouse çıkışında boyutu eski değerine geri çevirin
});

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

// HTML'den kahve-dd li elementlerini seçin
const kahveLiElements = document.querySelectorAll(".kahve-dd li");

// Her bir kahve-dd li elementine tıklanabilirlik ekleyin
kahveLiElements.forEach((liElement) => {
  // Tıklama işlemi olduğunda çalışacak işlevi tanımlayın
  liElement.addEventListener("click", function() {
    // İlgili bağlantıyı alın
    const linkElement = liElement.querySelector("a");

    // Eğer bağlantı varsa, bağlantıya yönlendirin
    if (linkElement) {
      const url = linkElement.getAttribute("href");
      window.location.href = url;
    }
  });
});
