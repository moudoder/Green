$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");
  $('.buy-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	adaptiveHeight: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });
  $('.single-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	adaptiveHeight: true,
	speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.single-nav__item').on('click', function() {
  	let parent = $(this).parent('.single-nav');
  	parent = $(parent).children('.single-nav__item');
  	let index = $(parent).index(this);
  	$('.single-slider').slick('slickGoTo', index);
  	return false;
  })

  $('.modal').css("display", "flex");
  $('.modal').hide();

  $(document).mouseup( function(e){ // событие клика по веб-документу
  		var div = $( ".modal .inner" ); // тут указываем ID элемента
  		if ( !div.is(e.target) // если клик был не по нашему блоку
  		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
  			$('.modal').fadeOut();
  		}
  	});

  $('.open-contact').on('click', function() {
  	$('.contact-window').fadeIn()
  	return false;
  })
  $('.open-requisites').on('click', function() {
  	$('.modal-requisites').fadeIn()
  	return false;
  })
  $('.open-consultation, .cars-block__link').on('click', function() {
  	$('.modal-consultation').fadeIn()
  	return false;
  })
  $('.open-credit').on('click', function() {
  	$('.modal-credit').fadeIn()
  	return false;
  })

  $('.close-mod').on('click', function() {
  	$('.modal').fadeOut();
  	return false;
  })

  $(".scroll-to").on("click", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
      top = $(id).offset().top;
      let html_zoom = $('html').css('zoom');
      top = top * html_zoom;
      $('.modal-menu').removeClass('active');
      $('body,html').animate({scrollTop: top}, 1500);
    });

  if ($(window).width() > 1180) {
      let slider = $('.drag-slider');
      let isDown = false;
      let startX;
      let scrollLeft;

      for (let i = slider.length - 1; i >= 0; i--) {
        let slider_now = slider[i]


        slider_now.addEventListener('mousedown', (e) => {
          isDown = true;
          slider_now.classList.add('active');
          startX = e.pageX - slider_now.offsetLeft;
          scrollLeft = slider_now.scrollLeft;
        });
        slider_now.addEventListener('mouseleave', () => {
          isDown = false;
          slider_now.classList.remove('active');
        });
        slider_now.addEventListener('mouseup', () => {
          isDown = false;
          slider_now.classList.remove('active');
        });
        slider_now.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider_now.offsetLeft;
          const walk = (x - startX) * 3; //scroll-fast
          slider_now.scrollLeft = scrollLeft - walk;
          console.log(walk);
        });
      }
    }

  $('.single-logo').on('click', function() {
  	let parent = $(this).parent('.single-logos');
  	parent = $(parent).children('.single-logo');
  	let index = $(parent).index(this);
  	$('.single-slider').slick('slickGoTo', index);
  	return false;
  })

  $('.buy-nav__item').on('click', function() {
  	$('.buy-nav__item').removeClass('active');
  	$(this).addClass('active');
  	let index = $('.buy-nav__item').index(this);
  	$('.buy-slider').slick('slickGoTo', index);

  	return false;
  })
})