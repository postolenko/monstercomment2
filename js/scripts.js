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
    getTHumbsHeight();
    getAdaptivePositionElements();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getGetPromoCenterPosition();
    getHeaderParams();
    getLinesWidth();
    getTHumbsHeight();
    getAdaptivePositionElements();

});

$(document).scroll(function() {

    getHeaderParams();

});

$(document).ready(function() {
   
    $(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

     $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup").click(function() {

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });


    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

    $(".show_pass").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".input_wrapp");

        var passInput = parentBlock.find("input");

        if(passInput.attr("type") == "password") {

            passInput.attr("type", "text");

        } else {

            passInput.attr("type", "password");

        }

    });

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

function getAdaptivePositionElements() {

    $(".append-elem").each(function() {

        screenParam = parseInt( $(this).attr("data-min-screen") );

        indexElem = $(this).attr("data-append-desktop-elem");

        if( bodyWidth <= screenParam ) {

            $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

        }

         if( bodyWidth > screenParam ) {

            $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

        }

    });

}

function getTHumbsHeight() {

    $(".set_height .thumb .inner").css({"height" : "auto"});

    $(".set_height").each(function() {

        thumbsHeightArr = [];

        thumb = $(this).find(".thumb");

        thumb.each(function() {

            thumbHeight = $(this).find(".inner").height();

            thumbsHeightArr.push(thumbHeight);

        });

        maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

        thumb.find(".inner").height(maxThumbHeight);

    });

}