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
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const contactFormKaks = document.querySelector('#contact-form');

// vormi esitamine
contactFormKaks.addEventListener('submit', (event) => {
  // alert('form submitted!');
  event.preventDefault();

  const name = inputName.value;
  const email = inputEmail.value;
  const message = inputMessage.value;
  
  //object literal
  const formData = {
    userName: name,
    userEmail: email,
    userMessage:message,
  }

  // logalStorage.setItem('formData', JSON.stringify(formData));
  logalStorage.setItem('name', JSON.stringify(formData.userName));
  logalStorage.setItem('email', JSON.stringify(formData.userEmail));
  logalStorage.setItem('message', JSON.stringify(formData.userMessage));

  console.log('form submitted');
});



// localstorage kokkukorjamine
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

