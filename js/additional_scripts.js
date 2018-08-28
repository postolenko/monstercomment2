$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(window).resize( function() {

	getRespSliders();

});

$(document).ready(function() {		

	getRespSliders();

});

function getRespSliders() {

	if ( bodyWidth <= 1124 ) {

        if( !$(".slider_2").hasClass("slick-initialized") ) {

            $(".slider_2").slick({
                dots: false,
                arrows: true,
                loop: false,
                // autoplay: true,
                autoplaySpeed: 5000,
                speed: 1200,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
				    {
				      breakpoint: 800,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 530,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
            });

        } 

    } else {
    	
        $(".slider_2").slick("unslick");

    }

    if ( bodyWidth <= 1024 ) {

        if( !$(".slider_1").hasClass("slick-initialized") ) {

            $(".slider_1").slick({
                dots: false,
                arrows: true,
                loop: false,
                // autoplay: true,
                autoplaySpeed: 5000,
                speed: 1200,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
				    {
				      breakpoint: 800,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 530,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
            });

        }

        if( !$(".slider_2").hasClass("slick-initialized") ) {

            $(".slider_2").slick({
                dots: false,
                arrows: true,
                loop: false,
                // autoplay: true,
                autoplaySpeed: 5000,
                speed: 1200,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
				    {
				      breakpoint: 800,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 530,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
            });

        } 

    } else {

        $(".slider_1").slick("unslick");
        $(".slider_2").slick("unslick");

    }

}

