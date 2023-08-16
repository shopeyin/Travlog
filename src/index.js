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


const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')
const zoomIn = document.querySelectorAll('.zoom')

const options ={
  root:null,
  threshold: 0.2,

}
const appearOnScroll = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{
    if (!entry.isIntersecting){
      return
    }else{
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  
  })
},options)

faders.forEach((el)=>[
  appearOnScroll.observe(el)
])
sliders.forEach((el)=>[
  appearOnScroll.observe(el)
])
zoomIn.forEach((el)=>[
  appearOnScroll.observe(el)
])