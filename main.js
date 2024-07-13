
//first scroll on animation
const hiddenElements  = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.target.id === "argument_one"){
      setTimeout(function(){
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      },200)
    }
    if(entry.target.id === "argument_two"){
      setTimeout(function(){
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      },400)
    }
    if(entry.target.id === "argument_three"){
      setTimeout(function(){
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      },600)
    }
  });
});


hiddenElements.forEach((el) => observer.observe(el));

//Prices scroll on animation
const mmgym_prices = document.querySelectorAll('.price_container');

const observer_prices = new IntersectionObserver((prices) =>{
  prices.forEach((price) => {
    const parentZoneId = price.target.parentNode.id;
    if(parentZoneId === 'priceing_zone1'){
      setTimeout(function(){
        if(price.target.id === 'price_go_left'){
          if(price.isIntersecting){
            price.target.classList.add('move_right');
          }
        }
        if(price.target.id === 'price_go_right'){
          if(price.isIntersecting){
            price.target.classList.add('move_left');
          }
        }
      },0)
    }
    if(parentZoneId === 'priceing_zone2'){
      setTimeout(function(){
        if(price.target.id === 'price_go_left'){
          if(price.isIntersecting){
            price.target.classList.add('move_right');
          }
        }
        if(price.target.id === 'price_go_right'){
          if(price.isIntersecting){
            price.target.classList.add('move_left');
          }
        }
      },200)
    }
    if(parentZoneId === 'priceing_zone3'){
      setTimeout(function(){
        if(price.target.id === 'price_go_left'){
          if(price.isIntersecting){
            price.target.classList.add('move_right');
          }
        }
        if(price.target.id === 'price_go_right'){
          if(price.isIntersecting){
            price.target.classList.add('move_left');
          }
        }
      },400)
    }
  });
});

mmgym_prices.forEach((el2) => observer_prices.observe(el2));

//program scroll on animation1
const program_right_slide = document.querySelectorAll('.program_part1');

const observer4 = new IntersectionObserver((entries4) => {
  entries4.forEach((entry4) => {
    if(entry4.isIntersecting){
      entry4.target.classList.add('program_move_right');
    }
  });
});

program_right_slide.forEach((el4) => observer4.observe(el4));

//program scroll on animation2
const program_left_slide = document.querySelectorAll('.program_part2');

const observer5 = new IntersectionObserver((entries5) => {
  entries5.forEach((entry5) => {
    if(entry5.isIntersecting){
      entry5.target.classList.add('program_move_left');
    }
  })
})

program_left_slide.forEach((el5) => observer5.observe(el5));

//personal trainer scroll on animtion1
const trainer_left_slide = document.querySelectorAll('.personal_trainer_container1');

const observer6 = new IntersectionObserver((entries6) => {
  entries6.forEach((entry6) => {
    if(entry6.isIntersecting){
      entry6.target.classList.add('trainer_move_left');
    }
  })
});

trainer_left_slide.forEach((el6) => observer6.observe(el6));

//personal trainer scroll on animtion2
const trainer_right_slide = document.querySelectorAll('.personal_trainer_container2');

const observer7 = new IntersectionObserver((entries7) => {
  entries7.forEach((entry7) => {
    if(entry7.isIntersecting){
      entry7.target.classList.add('trainer_move_right');
    }
  })
});

trainer_right_slide.forEach((el7) => observer7.observe(el7));

//title scroll on animation
const title_slide_up = document.querySelectorAll('.title_scroll_on');

const observer8 = new IntersectionObserver((entries8) => {
  entries8.forEach((entry8) => {
    if(entry8.isIntersecting){
      entry8.target.classList.add('title_slide_up');
    }
  })
});

title_slide_up.forEach((el8) => observer8.observe(el8));

//about us scroll on animation1
const content_box_slide = document.querySelectorAll('.content_box');

const observer_about_us = new IntersectionObserver((about_us_slide) => {
  about_us_slide.forEach((content_about_us) => {
    setTimeout(function(){
      if(content_about_us.target.id === 'content_box1'){
        if(content_about_us.isIntersecting){
          content_about_us.target.classList.add('about_us_slide1_down');
        }
      }
      if(content_about_us.target.id === 'content_box2'){
        if(content_about_us.isIntersecting){
          content_about_us.target.classList.add('about_us_slide2_right')
        }
      }
      if(content_about_us.target.id === 'content_box3'){
        if(content_about_us.isIntersecting){
          content_about_us.target.classList.add('about_us_slide3_left')
        }
      }
    },300)
  })
});

content_box_slide.forEach((el_about_us) => observer_about_us.observe(el_about_us));

//Dropdown navigation
const barsNavigation = document.querySelector('.navigation_bars');
const dropdownNavigation = document.querySelector('.dropdown_menu_navigation');
let opacity = window.getComputedStyle(dropdownNavigation).getPropertyValue("opacity");

barsNavigation.addEventListener('mouseover', () => {
  opacity = "1";
  barsNavigation.classList.remove("fa-bars");
  barsNavigation.classList.add("fa-xmark");
  dropdownNavigation.style.pointerEvents = "auto";
  dropdownNavigation.style.opacity = opacity;
});
barsNavigation.addEventListener('mouseleave', () => {
  opacity = "0";
  barsNavigation.classList.remove("fa-xmark");
  barsNavigation.classList.add("fa-bars");
  dropdownNavigation.style.pointerEvents = "none";
  dropdownNavigation.style.opacity = opacity;
});
