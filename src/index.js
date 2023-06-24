import './styles/main.scss'
import laughing from './assets/laughing.svg'
 
import f1 from './assets/f1.jpeg';
import logo from './assets/logo.svg';
import caseimg from './assets/caseimg.svg'
import layer from './assets/layer.svg'

// const laughImg = document.getElementById('laughImg')
// laughImg.src = laughing

// function showLinks(){
//   const navLink =  document.querySelector('.mobile-nav')
//   navLink.style.display = 'block'
//   console.log(navLink)
// }

const menu = document.querySelector('.hamburger')
menu.addEventListener('click', function(){
    const navLink =  document.querySelector('.mobile-nav')
    const html =  document.querySelector('html')
    menu.classList.toggle('is-active')
    navLink.classList.toggle('is-active')
    html.classList.toggle('overflow-hidden')
  
})
// console.log(menu)