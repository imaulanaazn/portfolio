const title = document.getElementById('title');
const menus = document.querySelectorAll('.menu');

  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    sessionStorage.setItem('prevClickedMenu','home-btn');
    sessionStorage.setItem('clickedMenu','home-btn');
  } 

menus.forEach(menu => menu.addEventListener('click',()=>{
    sessionStorage.setItem('clickedMenu',`${menu.getAttribute('id')}`)

    if(menu.getAttribute('id') === 'about-btn'){
        showAbout();
    }else{
        mbuh();
    }
}))

function mbuh(){
    const clickedMenu = sessionStorage.getItem('clickedMenu');
    const prevClickedMenu = sessionStorage.getItem('prevClickedMenu');
    if(clickedMenu === 'works-btn' &&  prevClickedMenu === null ){
        runWorks();
        showWorksUnderline();
    }
    if(clickedMenu === 'works-btn' && prevClickedMenu === 'home-btn'){
        runWorks();
        showWorksUnderline();
        sessionStorage.setItem('prevClickedMenu',clickedMenu);
    }
    if(clickedMenu === 'home-btn' && prevClickedMenu === 'works-btn'){
        runHome();
        showHomeUnderline();
        sessionStorage.setItem('prevClickedMenu',clickedMenu);
    }
    if(clickedMenu === 'works-btn' && prevClickedMenu === 'blog-btn'){
        runWorks();
        showWorksUnderline();
        sessionStorage.setItem('prevClickedMenu',clickedMenu);
    }
    if(clickedMenu === 'about-btn' && prevClickedMenu === 'blog-btn'){
        showAbout();
        sessionStorage.setItem('prevClickedMenu',clickedMenu);
    }
}

function runHome(){
    
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
    
}

function runWorks(){
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
}

function showAbout(){
    gsap.to('.about-underline',{
        width: '100%',
        duration: 1
    })
    gsap.to('.bg-circle',{
        scale: 5,
        duration: .6
    })
    gsap.to('.circle',{
        opacity: 0,
        duration: .6
    })
    gsap.to('.about',{
        display: 'block'
    })
    gsap.to('.about header',{
        opacity: 1,
        delay: .6,
        duration: .6
    })
    gsap.to('.about .main',{
        opacity: 1,
        delay: .6,
        duration: .6
    })
    gsap.to('main',{
        display: 'none',
        delay: .6
    })
    document.querySelector('body');
}

function hideAbout(){
    gsap.to('main',{
        display: 'flex',
    })
    gsap.to('.about .main',{
        opacity: 0,
        duration: .6
    })
    gsap.to('.about header',{
        opacity: 0,
        duration: .6
    })
    gsap.to('.about',{
        display: 'none'
    })
    gsap.to('.circle',{
        opacity: 1,
        duration: .6,
        delay: 1
    })
    gsap.to('.bg-circle',{
        scale: 1,
        duration: .6,
        delay: .6
    })
}

function showWorksUnderline(){
    gsap.to('.home-underline',{
        width: 0
    })
    gsap.to('.works-underline',{
        width: '100%'
    })
}

function showHomeUnderline(){
    gsap.to('.home-underline',{
        width: '100%'
    })
    gsap.to('.works-underline',{
        width: 0
    })
}

const aboutToHomeBtn = document.getElementById('about-to-home-btn');
aboutToHomeBtn.addEventListener('click',()=>{
    hideAbout()
    showHomeUnderline();
    setTimeout(()=>{
        runHome();
    },1000)
    sessionStorage.setItem('prevClickedMenu','home-btn');
    sessionStorage.setItem('clickedMenu','home-btn');
})

const aboutToWorksBtn = document.getElementById('about-to-works-btn');
aboutToWorksBtn.addEventListener('click',()=>{
    hideAbout()
    showWorksUnderline();
    setTimeout(()=>{
        runWorks();
    },1000)
    sessionStorage.setItem('prevClickedMenu','works-btn');
    sessionStorage.setItem('clickedMenu','works-btn');
})