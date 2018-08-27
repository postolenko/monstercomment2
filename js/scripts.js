var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var shapeLineWidht;

$(window).load(function() {

    getGetPromoCenterPosition();
    getHeaderParams();
    getLinesWidth();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getGetPromoCenterPosition();
    getHeaderParams();
    getLinesWidth();

});

$(document).scroll(function() {

    getHeaderParams();

});

$(document).ready(function() {
   


});

function getGetPromoCenterPosition() {    

    var centerWrapp = $(".full_height");
    var centerBlok = $(".center-position");
    var centerTopOffset;

    centerTopOffset = ( centerWrapp.height() - centerBlok.height() ) / 2;

    if( centerTopOffset <= $(".header-site").height() ) {

        centerTopOffset = $(".header-site").height();

    }

    centerBlok.css({
        "padding-top" : centerTopOffset + "px"
    });

}

function getHeaderParams() {

    if( $(".header-site").offset().top >= 20 ) {

        $(".header-site").addClass("active");

    } else {

        $(".header-site").removeClass("active");

    }

}


function getLinesWidth() {

    $(".thumbnails-7 .thumb-7").each(function() {

        $(this).find(".circle_shape .line").each(function() {

            parentBlock = $(this).closest(".thumb-7");

            if(parentBlock.next(".thumb-7").length > 0) {

                shapeLineWidht =  parentBlock.next(".thumb-7").find(".circle_shape").offset().left - parentBlock.find(".circle_shape").offset().left - parentBlock.find(".circle_shape").width();
     
                $(this).css({
                    "width" : shapeLineWidht + "px"
                });

            }

        });

    });

}