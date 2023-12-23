//javascript to initialize and edit owl carousel properties
$('.owl-carousel').owlCarousel({
    nav:true,
    loop:true,
  dots:false,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        420:{
            items:2
        },
        800:{
          items:3
      },
  
        1100:{
            items:4
        }
    }
  });