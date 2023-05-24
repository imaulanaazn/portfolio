<template>
    <div class="about bg-white lg:px-28 md:px-10 px-4 absolute z-50 top-0 left-0 w-full">
    <!-- ABOUT NAVBAR -->
    <header class="w-full lg:h-20 md:h-28 h-20 flex justify-between items-center transition-all">
        <div class="logo">
            <img src="/images/myLogo.svg" alt="" class="lg:w-10 w-10 md:w-16 ">
        </div>
        <nav class="w-2/3 flex justify-end">
            <ul class="flex lg:w-2/4 w-full justify-between">
                <li class="relative">
                    <router-link to="/" >
                        <a id="about-to-home-btn" @click="setActivePage(1)" href="#" class="z-10 md:text-2xl text-base lg:text-base relative">Home</a>
                    </router-link>
                </li>
                <li class="relative">
                  <span class="absolute w-0 block bottom-0 left-0 w-full h-1/3 bg-yellow-400 z-0"></span>
                  <a href="#" class="z-10 md:text-2xl text-base lg:text-base relative">About</a>
                </li>
                <li class="relative">
                    <router-link to="/" @click="setActivePage(3)">
                        <a id="about-to-works-btn" href="#" class="z-10 md:text-2xl text-base lg:text-base relative">Works</a>
                    </router-link>
                </li>
                <li class="relative">
                  <a href="pages/blog.html" class="z-10 md:text-2xl text-base lg:text-base relative">Blog</a>
                </li>
            </ul>
        </nav>
    </header>
  
    <!-- ABOUT PAGE MAIN CONTENT -->
    <div class="main py-12 w-full lg:pl-52 md:px-24 px-4 relative border-y-2 border-dashed border-slate-600">
    <h1 class="tagline -translate-x-20 md:w-96 font-extrabold lg:text-2xl md:text-3xl text-xl">An abstract and personal approach, defined by a mood of feeling</h1>
    <div class="about-text -translate-x-20 w-fit relative ml-auto mt-12 mb-16">
        <span class="absolute w-0 h-1/3 bg-yellow-400 bottom-0 left-0 z-0"></span>
        <h2 class="about-title relative font-black text-left lg:text-9xl md:text-7xl text-5xl m-0 w-fit z-10"> About</h2>
    </div>
    <h1 class="offer -translate-x-20 lg:w-72 md:w-80 font-bold lg:text-xl md:text-2xl text-lg">With our tastefull crew, web created a product with high taste of art and functionality, high quality is one of our highlighted aspect and cheap price is our prioritise.</h1>
      <p class="lg:w-72 md:w-80 lg:text-sm text-sm md:text-lg mb-5 mt-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur molestias similique dignissimos voluptatem eum accusamus a, animi sequi debitis consequuntur esse voluptas blanditiis sapiente deserunt, sint fugiat? Recusandae dignissimos architecto, rerum laborum tempore perspiciatis alias doloribus libero fugit animi veniam autem quae.</p>
      <div  class="service_and_clients mt-40 flex lg:w-96 justify-between">
        <ul class="service pr-2">
          <li><h1 class="font-bold lg:text-base text-base md:text-xl">Services</h1></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Convert any design to website</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Convert static web to React web</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Front end Development</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Custom web</a></li>
        </ul>
        <ul class="clients pl-2">
          <h1 class="font-bold lg:text-base text-base md:text-xl">Tools</h1>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Html, Css, Javascript</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Sass</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Tailwind / Bootstrap</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">React Js</a></li>
          <li><a href="#" class="text-base lg:text-base md:text-lg">Next Js</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['activePage', 'setActivePage']
  }
</script>