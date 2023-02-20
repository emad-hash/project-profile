const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      // ======= show menu
      if(navToggle){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        })
      }
      // =======  menu hidden / close
      if(navClose){
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
        })
      }
      // =======  remove mune mobile
      const navLinks = document.querySelectorAll(".nav-link")

      function linkActive() {
        const navMenu = document.getElementById("nav-menu")
        // when we click on each nav link , we remove the show menu class
        navMenu.classList.remove("show-menu")
      }
      navLinks.forEach(n => n.addEventListener('click', linkActive))
      // change background header
      function scrollHeader(){
        const header = document.getElementById("header")
        // when the scroll is greater than 80 viewprot height , add the class scroll header to the tage header
        if(this.scrollY >= 80 ) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
      }
      window.addEventListener("scroll", scrollHeader)