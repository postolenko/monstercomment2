var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var shapeLineWidht;

$(window).load(function() {

    getHeaderParams();
    getLinesWidth();
    getTHumbsHeight();
    getAdaptivePositionElements();
    getGetPromoCenterPosition();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    
    getHeaderParams();
    getLinesWidth();

    $(".set_height .thumb .inner").css({"height" : "auto"});
    getTHumbsHeight();

    getAdaptivePositionElements();
    getGetPromoCenterPosition();

});

$(document).scroll(function() {

    getHeaderParams();

});

$(document).ready(function() {
   
    $(".show_popup").click(function(e) {

        $(".popup_wrapp").fadeOut(300);

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

    // -------------------------------

    $(".dropdown_wrapp").each( function() {

        $(this).find(".dropdown_list").css({
            "display" : "none"
        });

        if( $(this).find(".dropdown_list ul li").length > 0 ) {

            $(this).addClass("actual");
        }

    });


    $(".actual .dropdown_title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown_wrapp");

        var dropdownList = parentBlock.find(".dropdown_list");

        if( dropdownList.is(":hidden") ) {

            dropdownList.slideDown(300);
            parentBlock.addClass("active");

        } else {

            dropdownList.slideUp(300);
            parentBlock.removeClass("active");

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.dropdown_list');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            parentBlock = hide_element.closest(".dropdown_wrapp");
            hide_element.slideUp(300);
            parentBlock.removeClass("active");
        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $('.dropdown_list').slideUp(300);

        }

    });

    $(".dropdown_wrapp .dropdown_list li").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown_wrapp");

        var dropdownTitleVal = parentBlock.find(".dropdown_title .val");
        var numVal = $(this).find(".val").text();
        dropdownTitleVal.text(numVal);

        console.log(numVal);

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

    if( $(".header-site").length > 0 ) {

        if( $(".header-site").offset().top >= 20 ) {

            $(".header-site").addClass("active");

        } else {

            $(".header-site").removeClass("active");

        }

    } else if($(".header-site_2").length > 0) {

        $(".wrapper").css({
            "padding-top" : $(".header-site_2").height() + "px"
        });

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