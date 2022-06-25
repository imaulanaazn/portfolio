const menus = document.querySelectorAll('nav ul.menu-container li a');
let lastClickedMenu = 'home-nav';
const title = document.getElementById('title');

menus.forEach(menu => menu.addEventListener('click',()=>{
    homeWorksSwitch(menu)
}))

function homeWorksSwitch(menu){
    if(menu.getAttribute('id') === 'home-nav' && lastClickedMenu !== 'home-nav'){
       runWorks(menu);
    }
    if(menu.getAttribute('id') === 'works-nav' && lastClickedMenu !== 'works-nav'){
        runHome(menu);
}}

function runWorks(menu){
    gsap.to('#logo',{
        left: '1.5rem',
        x:'0',
    })
    gsap.to('#address',{
        left: '1.5rem',
        x:'0',
        delay: '.1',
    })
    gsap.to('#myWorksText',{
        opacity: '0',
        left: '3.5rem',
        duration: 1.5,
        ease: "power3.out"
    })
    gsap.to('.myworks-gallery',{
        x: '100%',
        duration: 1.1
    })
    gsap.to('.profile',{
        x: '0',
        duration: 1
    })
    gsap.to('.circle',{
        borderRadius: '50%',
        rotate: '0deg',
        scale: 1
    })
    gsap.to('#title',{
        rotate: '0deg'
    })
    title.textContent = "Make It Simple :)"
    lastClickedMenu = menu.getAttribute('id');
}

function runHome(menu){
    gsap.to('#logo',{
        left: '0',
        x:'-100%',
    })
    gsap.to('#address',{
        left: '0',
        x:'-100%',
        delay: '.1',

    })
    gsap.to('#myWorksText',{
        opacity: '1',
        left: '1rem',
        duration: 1.5,
        ease: "power3.out",
        delay: .5
    })
    gsap.to('.myworks-gallery',{
        x: '0',
        duration: 1,
        width: '100%'
    })
    gsap.to('.profile',{
        x: '-100%',
        duration: 1.1
    })
    gsap.to('.circle',{
        borderRadius: '4%',
        rotate: '45deg',
        scale: .8
    })
    gsap.to('#title',{
        rotate: '-45deg'
    })
    title.textContent = "Some Of My Work."
    lastClickedMenu = menu.getAttribute('id');
}