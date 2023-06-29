import './styles/main.scss'
import laughing from './assets/laughing.svg'
 
import f1 from './assets/f1.jpeg';
import logo from './assets/logo.svg';
import caseimg from './assets/caseimg.svg'
import layer from './assets/layer.svg'





const menu = document.querySelector('.hamburger')
menu.addEventListener('click', function(){
    const navLink =  document.querySelector('.mobile-nav')
    const html =  document.querySelector('html')
    menu.classList.toggle('is-active')
    navLink.classList.toggle('is-active')
    html.classList.toggle('overflow-hidden')

    console.log('clicked')
  
})


const swiper = new Swiper('.swiper', {
    loop: true,
  
    //If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
 
  });
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 0,
   
    watchOverflow: true,
    centeredSlides: true,
   
  })
