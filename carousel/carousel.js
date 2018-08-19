/* 
Add div with id "danvopCarousel" to init carousel
Add var slides like:
*/
var slides = [
  {
    "img" : "http://via.placeholder.com/300x300/?text=slide0",
    "header" : "slide0",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
  },
  {
    "img" : "http://via.placeholder.com/300x300/?text=slide1",
    "header" : "slide1",
    "content" : "Lorem ipsum <b>dolor sit</b> amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
  },
  {
    "img" : "http://via.placeholder.com/300x300/?text=slide2",
    "header" : "slide2",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
  }
];

// Images preloadin. Without preloading image loads when slide turns

var images = new Array();
function preload() {
  for (i = 0; i < slides.length; i++) {
    images[i] = new Image()
    images[i].src = slides[i].img;
  }
}
preload();


document.getElementById("danvopCarousel").innerHTML = 
  '<div id="carousel" class="slide">\
    <div class="slide-image">\
      <img id="slideImg"src="">\
    </div>\
   <div class="slide-content">\
    <h4 id="slideHeader"></h4>\
    <div id="slideContent"></div>\
    <div class="slide-navs">\
      <a class="prev" onclick="plusSlides(-1)">&#8920;</a>\
      <a class="next" onclick="plusSlides(1)">&#8921;</a>\
    </div>\
   </div>\
  </div>';



var slideIndex = 0;
var slidesTimeout;
showSlides();

function showSlides() {
    var carousel = document.getElementById("carousel");
    var slideImg = document.getElementById("slideImg");
    var slideHeader = document.getElementById("slideHeader");
    var slideContent = document.getElementById("slideContent");
    var slide;
  
    
    if (slideIndex >= slides.length) {slideIndex = 0;}
    if (slideIndex < 0) {slideIndex = slides.length - 1;}
    
    slide = slides[slideIndex];
    
    //render slides
    carousel.style.opacity = "";
    fadeInCust(carousel);
           
    slideImg.src = slide.img;
    slideHeader.innerHTML = slide.header;
    slideContent.innerHTML = slide.content;
  
    slideIndex++;
    
    slidesTimeout = setTimeout(showSlides, 5000); // Change image every 2 seconds
    
}
function plusSlides(num) {
    if(num === -1) {
      slideIndex-=2;
    }
    clearTimeout(slidesTimeout);    
    showSlides();
    
}

function fadeInCust(elem) {
  var op = elem.style.opacity;
  if ((op === "") || (op < 1)) {
    op = (op * 100 + 0.05 * 100)/100;
    elem.style.opacity = op;
    
    setTimeout(function(){
      fadeInCust(elem);
      }, 50);
  }
}



