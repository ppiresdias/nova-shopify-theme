// import { tns } from "tiny-slider/dist/tiny-slider";

// simple print function
function c() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

$(window).on("load", function() { 

  // GALLERY HOVER
  $(".gallery__image-container").on({
    mouseenter: function() {
      // when mouse enters, if carousel is right, move it left; if it's left, move it right
      if($(this).hasClass("gallery__image-container--right")) {
        shiftLeft($(this));
      } else {
        shiftRight($(this));
        // restore right shift upon mouse leave
        $(this).on("mouseleave", function() {shiftRight($(this));});
      }
    },
    mouseleave: function() {
      shiftRight($(this));
    }
  });

  // COLLECTIONS CARD ARROW HANDLER
  $(".gallery__image-container .gallery__icon--arrow--left").on({
    click: function() {
      shiftRight($(this).parent());
    }
  });
  $(".gallery__image-container .gallery__icon--arrow--right").on({
    click: function() {
      // when right arrow is clicked, temporarily remove the on mouseleave right shift
      shiftLeft($(this).parent());
      $(this).parent().off('mouseleave');
    }
  });

  function shiftLeft(carousel_parent) {
    $(carousel_parent).removeClass("gallery__image-container--right");
    $(carousel_parent).addClass("gallery__image-container--left");
  }

  function shiftRight(carousel_parent) {
    $(carousel_parent).removeClass("gallery__image-container--left");
    $(carousel_parent).addClass("gallery__image-container--right");
  }
  
  // GALLERY FA-HEART-O and FA-HEART
  $(".gallery__icon--heart").on({
    click: function() {
      let i = $(this).find("i");
      let active = "gallery__icon--heart--active";

      if($(this).hasClass(active)) {
        $(this).removeClass(active);
        $(i).removeClass("fa-heart");
        $(i).addClass("fa-heart-o");
      } else {
        $(this).addClass(active);
        $(i).removeClass("fa-heart-o");
        $(i).addClass("fa-heart");
      }

    }
  })

  // SWATCH HANDLER
  $(".swatch").on({
    click: function() {
      let active = "swatch--active";
      if($(this).hasClass(active)) {
        $(this).removeClass(active);
      } else {
        $(this).parent().find("." + active).removeClass(active);
        $(this).addClass(active);
      }
    }
  });

  // COLLECTIONS FILTER MODAL ON MOBILE DEVICES
  let collections_modal = $("#collections__modal");
  $("#gallery__filter").on({
    click: function() {
      $(collections_modal).addClass("collections__modal--active");
    }
  });
  
  $("#collections__modal-close").on({
    click: function() {
      $(collections_modal).removeClass("collections__modal--active");
    }
  });

  // TINY SLIDER
  let slider = tns({
    // autoplay: true,
    container: '.carousel__slider',
    controls: true,
    controlsPosition: "top",
    controlsText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    gutter: 20,
    items: 5,
    lazyload: false,
    loop: true,
    mode: 'carousel',
    nav: true,
    navPosition: "top",
    preventScrollOnTouch: "auto",
    responsive: {
      414: {
        items: 2
      },
      640: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }},
    rewind: true,
    slideBy: 'page',
    speed: 750,
    touch: true
  });
  // BOOTSTRAP BREAKPOINTS
  // $breakpoint: (lg: 1199.98px, md: 991.98px, sm: 767.98px, xs: 575.98px);
});
