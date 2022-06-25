gsap.to('.blog-underline',{
    width: '100%',
})

const menus = document.querySelectorAll('.menu');
menus.forEach(menu => menu.addEventListener('click',()=>{
    sessionStorage.setItem('clickedMenu',`${menu.getAttribute('id')}`)
    sessionStorage.setItem('prevClickedMenu',`blog-btn`)
}))
