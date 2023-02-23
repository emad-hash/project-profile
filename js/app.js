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

      // =============== SCROLL SECTIONS ACTIVE LINK =============== // 
      const sections = document.querySelectorAll("section[id]");

      // add an event listener listening for scroll
      window.addEventListener("scroll", navHighlighter);
      function navHighlighter (){
        // get current scroll position
        let scrollY = window.pageYOffset;
        // now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
          const sectionHeight  = current.offsetHeight;
          const sectionTop  = current.offsetTop - 50 ,
          sectionId = current.getAttribute("id");
          /* If our current scroll position enters the space where current section on screen is , add .active
          class to corresponding navigation link, else remove it
          -To know which link needs an active class , we use sectionId variable we are getting while looping through
          sections as an selector
          */
         if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
          document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add("active-link");
         }
         else{
          document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove("active-link")
         }

        })
      }
      // =============== PROTFOLIO ITEM FILTER =============== // 
        const filterContainer = document.querySelector(".protfolio-filter-inner"),
          filterBtns = filterContainer.children;
          // console.log(fillterBtns);
          totalFilterBtn = filterBtns.length;
          portfolioItems = document.querySelectorAll(".protfolio-item");
          // console.log(portfolioItems);
          totalPortfolioItem = portfolioItems.length;
          // console.log(totalPortfolioItem);
          
          for (let  i= 0;  i<totalFilterBtn; i++) {
            // console.log(fillterBtns[i]);
            filterBtns[i].addEventListener("click", function() {
              // console.log(this.innerHTML)
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              // console.log(filterValue);
              for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                  portfolioItems[k].classList.remove("hide");            
                  portfolioItems[k].classList.add("show");            
                }
                else{
                  portfolioItems[k].classList.add("hide");
                  portfolioItems[k].classList.remove("show");            
                }
                if(filterValue === "all"){
                  portfolioItems[k].classList.remove("hide");            
                  portfolioItems[k].classList.add("show");   
                }
              }
              
            })            
          }
      // =============== THEME / DISPLAY CUSTOMIZATION =============== //
         const theme = document.querySelector("#theme-button");
         const themeModel = document.querySelector(".customize-theme");
         const fontSizs = document.querySelectorAll(".choose-size span");
         const colorPalette = document.querySelectorAll(".choose-color span");
         let root = document.querySelector(":root");
         const Bg1 = document.querySelector(".bg-1");
         const Bg2 = document.querySelector(".bg-2");
         const Bg3 = document.querySelector(".bg-3");

         // open model
         const openThemeModel = () => {
          themeModel.style.display = 'grid';
         }
         // close model 
         const closeThemeModel = (e) => {
          if(e.target.classList.contains('customize-theme')){
          themeModel.style.display = 'none';
          }
         }
         theme.addEventListener("click", openThemeModel);
         themeModel.addEventListener("click", closeThemeModel);
      // =============== FONTS =============== //

      // remove active class from spans or font size selectors
      const removeSizeSelector = () => {
        fontSizs.forEach(size => {
          size.classList.remove("active")
        })
      }
        fontSizs.forEach(size =>{
          size.addEventListener('click', () => {
            removeSizeSelector();
            let fontSizs;
            size.classList.toggle('active');
            if (size.classList.contains('font-size-1')) {
              fontSizs = '12px';
            }
            else if (size.classList.contains('font-size-2')) {
              fontSizs = '14px';
            }
            else if (size.classList.contains('font-size-3')) {
              fontSizs = '16px';
            }
            else if (size.classList.contains('font-size-4')) {
              fontSizs = '18px';
            }
            // change font size of the root html element
            document.querySelector('html').style.fontSize = fontSizs;
          })
        })
      // =============== PRIMARY COLORS =============== //
     // remove active class from color
     const changeActiveColorClass = () => {
      colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active")
      })
    }
      colorPalette.forEach(color =>{
        color.addEventListener('click', () => {
            let primaryHue;
            changeActiveColorClass();
            if (color.classList.contains('color-1')) {
              primaryHue = 252;
            }
            else if (color.classList.contains('color-2')) {
              primaryHue = 52;
            }
            else if (color.classList.contains('color-3')) {
              primaryHue = 352;
            }
            else if (color.classList.contains('color-4')) {
              primaryHue = 152;
            }
            else if (color.classList.contains('color-5')) {
              primaryHue = 202;
            }
            color.classList.add("active");
            root.style.setProperty('--primary-color-hue', primaryHue);
          })
        })
      // =============== THEME BACKGROUND =============== // 
      let lightColorLightness;
      let whiteColorLightness;
      let darkColorLightness;
       
      // change background color
      const changeBG = () => {
        root.style.setProperty('--light-color-lightness',lightColorLightness);
        root.style.setProperty('--white-color-lightness',whiteColorLightness);
        root.style.setProperty('--dark-color-lightness',darkColorLightness);
      }
      Bg1.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        // add active class
        Bg1.classList.add('active');
        // remove active class from the others
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        // remove customized changes from local storage
        window.location.reload();
      })

      Bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

        // add active class
        Bg2.classList.add('active');
        // remove active class from the others
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
      })
      Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        // add active class
        Bg3.classList.add('active');
        // remove active class from the others
        Bg2.classList.remove('active');
        Bg1.classList.remove('active');
        changeBG();
      })



