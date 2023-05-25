<template>

  <div class="page-container">
    <!-- NAVBAR -->
    <nav class="fixed lg:w-2/3 w-full z-50 top-0 right-0 flex justify-center sm:py-8 py-5 bg-white">
        <ul class="menu-container flex xl:w-2/5 lg:w-2/3 md:w-4/5 sm:w-9/12 w-full justify-evenly">
            <li class="relative">
              <span :class="`home-underline absolute block bottom-0 left-0 h-1/3 bg-yellow-400 z-0 ${activePage === 1 ? 'w-full' : 'w-0'}`">
              </span>
              <a href="#" @click.prevent="setActivePage(1)" id="home-btn" class="menu z-10 lg:text-base sm:text-2xl text-base relative">Home</a>
            </li>
            <li class="relative">
              <span :class="`home-underline absolute block bottom-0 left-0 h-1/3 bg-yellow-400 z-0 ${activePage === 2 ? 'w-full' : 'w-0'}`">
              </span>
              <a href="#" @click.prevent="setActivePage(2)" id="about-btn" class="menu z-10 lg:text-base sm:text-2xl text-base relative">About</a>
            </li>
            <li class="relative">
              <span :class="`home-underline absolute block bottom-0 left-0 h-1/3 bg-yellow-400 z-0 ${activePage === 3 ? 'w-full' : 'w-0'}`">
              </span>
              <a href="#" @click.prevent="setActivePage(3)" id="works-btn" class="menu z-10 lg:text-base sm:text-2xl text-base relative">Works</a>
            </li>
            <li class="relative">
              <a href="/#" id="blog-btn" class="menu z-10  lg:text-base sm:text-2xl text-base relative">Blog</a>
            </li>
        </ul>
    </nav>

    <!-- ASIDE INFO -->
    <aside class="lg:w-1/3 w-full fixed lg:block hidden">

        <!-- ASIDE WHEN HOME IS ON -->
        <div :class="`home-aside relative h-screen ${activePage === 1 ? 'translate-x-0' : activePage === 2 ? '-translate-x-full' : '-translate-x-[200%]'}`">
          <header id="logo" class="swipe-left absolute top-6 left-6 z-50">
            <img src="/icons/myLogo.svg" class="lg:w-10 w-10 md:w-16" alt="">
          </header>
          <div class="profile absolute top-0 left-0 bg-neutral-900 w-full h-full">
              <img src="/images/myself.png" class="w-11/12 absolute bottom-0" alt="">
              <p id="role" class="absolute text-white bottom-6 left-6 lg:text-sm md:text-3xl text-sm font-semibold">Front End Developer</p>
          </div>
        </div>

        <!-- ASIDE WHEN ABOUT IS ON -->
        <div :class="`about-aside absolute top-0 left-0 flex items-center justify-center bg-black h-screen w-full overflow-hidden ${activePage === 1 ? 'translate-x-full' : activePage === 2 ? 'translate-x-0' : '-translate-x-full'}`">
          <h1 class="text-4xl text-white font-extrabold text-5xl tracking-widest" style="writing-mode: vertical-lr;">ABOUT ME</h1>  
          <div class="scroll w-full flex absolute rotate-45 opacity-20">
            <div class="text-white font-extrabold text-9xl whitespace-nowrap">
              IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>
            </div>
            <div class="text-white font-extrabold text-9xl whitespace-nowrap">
              IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>
            </div>
            <div class="text-white font-extrabold text-9xl whitespace-nowrap">
              IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>IRHAM <span>MAULANA • </span>
            </div>
          </div>
        </div>

        <!-- ASIDE WHEN WORKS IS ON -->
        <div :class="`work-aside absolute top-0 left-0 bg-yellow-400 h-screen w-full px-8 py-4 overflow-y-auto overflow-x-hidden ${activePage === 1 ? 'translate-x-[200%]' : activePage === 2 ? 'translate-x-full' : 'translate-x-0'}`">
            <h1 class="font-bold text-2xl mt-8 mb-4">{{workDetails.title}}</h1>
            <p>{{ workDetails.descript }}</p>
            <h2 class="font-bold text-lg mt-8 mb-2">Tech Stack</h2>
            <ul>
              <li v-for="tech in workDetails.techStack" class="list-disc list-inside">{{ tech }}</li>
            </ul>
            <h2 class="font-bold text-lg mt-8 mb-2">Features</h2>
            <ul>
              <li v-for="feature in workDetails.features" class="list-disc list-inside">{{feature}}</li>
            </ul>

            <p class="mt-8">
              <a class="text-base underline text-blue-800" :href="workDetails.url" target="_blank">visit page</a>
            </p>
        </div>
    </aside>
    
    <!-- MAIN SECTION -->
    <main id="scroll-container" class="lg:w-2/3 w-full relative bg-white sm:px-6 px-2 lg:ml-auto">
      
      <!-- HOME CONTENT -->
      <section id="1" class="home-content relative w-full h-screen">
          <!-- THE CIRCLE THING -->
          <div class="sm:w-96 sm:h-96 w-80 h-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-yellow-400 rounded-full">
            <h1 id="title" class="w-80 font-extrabold text-5xl text-center">Make It Simple :)</h1>
          </div>
  
          <!-- SOCIAL MEDIA ON THE RIGHT SIDE -->
          <div class="socmed flex md:flex-col justify-evenly xl:h-2/5 lg:h-2/4 md:h-2/5 md:w-auto w-full absolute md:top-1/2 md:right-10 bottom-8 md:px-0 sm:px-20 px-18 md:-translate-y-1/2 mx-auto">
              <a href="https://github.com/imaulanaazn" target="_blank" class="hover:scale-125 hover:bg-yellow-400 transition-all duration-300">
                <img src="/icons/github.png" alt="" class="lg:w-5 sm:h-7 lg:h-5 sm:w-7 w-6 h-6">
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=i.maulana.azn@gmail.com&bcc=i.maulana.azn@gmail.com" target="_blank" class="hover:scale-125 hover:bg-yellow-400 transition-all duration-300">
                <img src="/icons/mail.png" alt="" class="lg:w-5 sm:h-7  lg:h-5 sm:w-7 w-6 h-6">
              </a>
              <a href="https://t.me/irham_maulana" target="_blank" class="hover:scale-125 hover:bg-yellow-400 transition-all duration-300">
                <img src="/icons/telegram.png" alt="" class="lg:w-5 sm:h-7  lg:h-5 sm:w-7 w-6 h-6">
              </a>
              <a href="https://twitter.com/irham__maulana" target="_blank" class="hover:scale-125 hover:bg-yellow-400 transition-all duration-300">
                <img src="/icons/twitter.png" alt="" class="lg:w-5 sm:h-7  lg:h-5 sm:w-7 w-6 h-6">
              </a>
          </div>
      </section>
  
      <!-- ABOUT CONTENT -->
      <section id="2" class="about-content w-full bg-white pt-20">
          <div class="py-12 w-full xl:pl-52 lg:pl-44 md:px-24 px-4 relative">
            <div class="about-text md:-translate-x-20 w-fit relative md:ml-auto mb-12">
                <span class="absolute w-0 h-1/3 bg-yellow-400 bottom-0 left-0 z-0"></span>
                <h2 class="about-title relative font-black text-left xl:text-8xl md:text-7xl sm:text-6xl text-5xl m-0 w-fit z-10">Irham Maulana</h2>
            </div>
            <h1 class="tagline md:-translate-x-20 lg:w-[30rem] sm:w-96 font-extrabold lg:text-2xl md:text-3xl sm:text-2xl text-xl mb-10">An <span class="bg-yellow-400 px-2"> abstract</span> and <span class="bg-yellow-400 px-2">personal approach</span>, defined by a mood of feeling</h1>
            <h1 class="offer md:-translate-x-20 lg:w-72 sm:w-80 font-bold lg:text-xl md:text-2xl text-lg">With my tastefull sense, I created a product with high taste of art and functionality, high quality is one of my highlighted aspect and cheap price is my prioritise.</h1>
            <p class="lg:w-72 sm:w-80 lg:text-base text-sm md:text-lg mb-5 mt-7">
              Front-end web developer with expertise in HTML, CSS, and JavaScript, with experience in React JS and Vue JS. Optimizing performance and cross-browser compatibility, collaborating with UX designers to create attractive and user-friendly interfaces. Proficient in creating responsive websites using a mobile-first approach
            </p>
            <h1 class="font-bold text-base md:text-xl mt-14 mb-2"><span class="bg-yellow-400 px-2">Programming</span> skils</h1>
            <p class="text-base text-slate-700 mb-4 sm:w-96">I have learned so many thing in web programming field for the past years. some of the skills that i have learned so far are :</p>
            <div class="md:w-8/12 sm:w-4/5 w-full grid grid-cols-5 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-5 gap-3">
              <div class="w-full bg-rose-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/html-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-sky-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/css-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-amber-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/javascript-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-sky-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/reactjs-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-gray-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/nextjs-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-emerald-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/vue-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-teal-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/tailwind-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-violet-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/bootstrap-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-blue-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/mui-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-green-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/mongodb-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
              <div class="w-full bg-slate-100 shadow-md flex items-center justify-center py-2">
                <img src="/images/mysql-icon.svg" class="w-9/12 opacity-80" alt="">
              </div>
            </div>
  
            <div  class="service mt-14 lg:w-96">
              <ul class="service">
                <li><h1 class="font-bold lg:text-base text-base md:text-xl bg-yellow-400 px-2 inline-block">Services</h1></li>
                <li><a href="#" class="text-base lg:text-base md:text-lg">Convert any design to website</a></li>
                <li><a href="#" class="text-base lg:text-base md:text-lg">Convert static web to React web</a></li>
                <li><a href="#" class="text-base lg:text-base md:text-lg">Front end Development</a></li>
                <li><a href="#" class="text-base lg:text-base md:text-lg">Custom web</a></li>
              </ul>
            </div>
          </div>
      </section>
  
      <!-- WORKS CONTENT -->
      <section id="3" class="showcase-content relative w-full lg:h-screen flex items-center justify-center pb-20 lg:pb-0">
        <h1 class="absolute top-1/2 left-0 -translate-y-1/2 font-extrabold text-lg tracking-wide mx-4">SOME MY WORKS</h1>
        <div class="w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          <div v-for="(workData, id) in worksData" @click="updateWorkDetail(id)" class="bg-gray-200 w-full h-0 pb-[100%] bg-cover" :style="`background-image: url(${workData.img});`">
            <a :href="workData.url" target="_blank" class="lg:hidden block w-full h-full pb-[100%]"></a>
          </div>
        </div>
      </section>
    </main>
  </div>

</template>

<script>
  import { worksData } from '../assets/data';
  export default{
    data(){
      return{
        activePage : 1,
        aboutVisible: false,
        worksData: worksData,
        workDetails: worksData[0]
      }
    },
    methods: {
      setActivePage(pageId){
        this.activePage = pageId;
        const element = document.getElementById(pageId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop, 
            behavior: 'smooth'
          });
        }
      },
      toggleAbout(val){
        this.aboutVisible = val
      },
      updateCurrentSection() {
        const sections = document.querySelectorAll('section');
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        
        let activePage = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight - 1) {
            activePage = section.id;
          }
        });
        this.activePage = Number(activePage);
      },
      updateWorkDetail(id){
        this.workDetails = worksData[id];
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateCurrentSection);
    },
    destroyed() {
      window.removeEventListener('scroll', this.updateCurrentSection);
    },
    watch: {
      activePage(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  nav, nav ul li span{
    transition: 1s ease all;
  }
  .showcase-content h1{
    writing-mode: vertical-lr;
  }
  .home-aside, .work-aside, .about-aside {
    transition: 1s ease all .2s;
  }
  .about-aside .scroll div {
    animation: animate 40s linear infinite;
    animation-delay: -40s;
  }
  .about-aside .scroll div:nth-child(2) {
    animation: animate2 40s linear infinite;
    animation-delay: -20s;
  }
  .about-aside .scroll div span {
    -webkit-text-stroke: 2px rgb(255, 255, 255);
    color: transparent;
  }
  .circle{
    animation: rotate 5s cubic-bezier(1,0,.31,.97) infinite;
  }

  @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes animate2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
  
  section .scroll {
    transform: rotate(30deg) translateY(200px) translateX(200px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
</style>