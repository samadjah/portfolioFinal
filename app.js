// console.log("hello from");
const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
const btnClose = document.querySelector('.close');
const frameImage = document.querySelector('#frame');
const images = ['elemLogoRing.png', 'elemLogoRuut.png'];
const modal = document.querySelector('.modal');
const contactForm = document.querySelector('.contact-form')
const btnOpenModal = document.querySelector('#btn-open-form');


btnOpenModal.addEventListener('click', () => {
  modal.style.display = 'block',
    contactForm.style.display = 'block';
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}



let currentImageIndex = 0;


// pildi kattesaamine
frameImage.addEventListener('click', () => {
  currentImageIndex++;
// kui teil on 5 ja objekte 6 ja toimib, siis mul hakkas alles sis toimima kui ütlesin 2 ja objekte ka kaks
  if (currentImageIndex >= 2) {
    currentImageIndex = 0;
  }
  frameImage.src = 'images/' + images[currentImageIndex];
})


btnHamburger.addEventListener('click', () => { 
  menuPanel.classList.toggle('active');
});

// ristist kinni kastialale klikkimine
btnClose.addEventListener('click', () => { 
  menuPanel.classList.remove('active');
});

document.addEventListener('click', (event) => { 
  if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
    menuPanel.classList.remove('active');
  }  
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuPanel.classList.remove('active');
  });
});

