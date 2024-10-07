/*toggle button */
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () =>{
    navMenu.classList.toggle("left-[-550px]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click",() =>{
        navMenu.classList.toggle("left-[-550px]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})
/*show scroll up */
const scrollUP = () =>{
    const scrollUPBtn = document.getElementById("scroll-up")

    if(this.screenY>=250){
        scrollUPBtn.classList.remove("-bottom-1/2")
        scrollUPBtn.classList.add("bottom-4")
    }
}
/*change background header */

/*swiper */

const swiper = new Swiper('.swiper', {
    // Optional parameters
  speed:400,
  spaceBetwwen:30,
  autoplay:{
    dealy:3000,
    disableOnInteraction: false
  },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
  
    
  });

/*scroll section active link */

/*scroll reveal animation */
const sr = ScrollReveal({
    origin :"top",
    distance:"60px",
    duration:3000,
    dealay: 300,
    reset: true
})
sr.reveal(`.home__data, .about__top, .popular__top, .review__top, .footer__icon, .footer__content, .copy__right`)
sr.reveal(`.home__image`, {delay:500,scale:0.5})

sr.reveal(`.service__card, .popular_card`,{interval: 100})

sr.reveal(`.about__leaf`,{delay:1000, origin:"right"})
sr.reveal(`.about__item__1-content, .about__item__2-img`,{delay:1000, origin:"right"})
sr.reveal(`.about__item__2-content, .about__item__1-img`,{delay:1000, origin:"left"})

sr.reveal(`.review__leaf, .footer__floral`,{delay:1000, origin:"left"})