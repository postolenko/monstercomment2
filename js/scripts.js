var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var shapeLineWidht;
var defaultHeight;

$(window).load(function() {

    detectIE();
    getHeaderParams();
    getLinesWidth();
    getTHumbsHeight();
    getAdaptivePositionElements();
    getGetPromoCenterPosition();
    getTableHeaderBg();
    getRespDropdownHeight();
    getFooterPosition();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    
    getHeaderParams();
    getLinesWidth();

    $(".set_height .thumb .inner").css({"height" : "auto"});
    getTHumbsHeight();

    getAdaptivePositionElements();
    getGetPromoCenterPosition();
    getTableHeaderBg();
    getRespDropdownHeight();
    getFooterPosition();

});

$(document).scroll(function() {

    getHeaderParams();

});

$(document).ready(function() {

    $(".respmenubtn").click(function() {

        if( $(".main-nav_wrapp").is(":hidden") ) {

            $(".main-nav_wrapp").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".main-nav_wrapp").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".main-nav_wrapp").is(":visible") ) {

                $(".main-nav_wrapp").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });

    // -----------------------

    $(".respmenubtn_2").click(function() {

        if( $(".resp_nav").is(":hidden") ) {

            $(".resp_nav").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".resp_nav").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".resp_nav").is(":visible") ) {

                $(".resp_nav").fadeOut(300);

                $(".respmenubtn_2").removeClass("active");

        }

    });

    // -----------------------
   
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

    });

    // ----------------

    $(".count-box button").click(function(e) {

        e.preventDefault();

        parentBlock= $(this).closest(".count-box");

        var countInput = parentBlock.find(".count-num input");

        var countVal = countInput.val();

        if(countVal == "") {

            countVal = 1;

        }

        if( $(this).hasClass("minus-btn") && countVal > 1 ) {

            countVal--;

        } else if( $(this).hasClass("plus-btn")) {

            countVal++;

        }

        countInput.val(countVal);

    });

    // ------------------
        
    $(".dropdown-menu").css({
        "display" : "none"
    });

    $(".blue-circle-pill").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown-thumb");

        var dropdownMenu = parentBlock.find(".dropdown-menu");

        if( dropdownMenu.is(":hidden") ) {

            dropdownMenu.slideDown(300);
            parentBlock.addClass("active");
            setTimeout(function() {                
                dropdownMenu.find(".scroll_menu").mCustomScrollbar();
            }, 400);

        } else {

            dropdownMenu.slideUp(300);
            parentBlock.removeClass("active");
            setTimeout(function() {                
                dropdownMenu.find(".scroll_menu").mCustomScrollbar('destroy');
            }, 400);

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".dropdown-menu").is(":visible") ) {

                $(".dropdown-menu").slideUp(300);
                $(".dropdown-menu").closest(".dropdown-thumb").removeClass("active");
                setTimeout(function() {                
                    $(".dropdown-menu").mCustomScrollbar('destroy');
                }, 400);

            }

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.dropdown-menu');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.slideUp(300);
            hide_element.closest(".dropdown-thumb").removeClass("active");
            setTimeout(function() {                
                hide_element.mCustomScrollbar('destroy');
            }, 400);
        }

    });

    // ----------------------------

    $(".tabs").each(function() {

        $(this).find(".tab-link").each(function() {

            if( $(this).hasClass("active") ) {

                indexActiveTab = $(this).index(".tab-link");

                $(this).click();

                return false;

            } else {

                indexActiveTab = 0;

            }

        });

        attrForTabLink = $(this).find(".tab-link").eq(indexActiveTab).attr("for");
        activeTabRadio = $(this).find(".radio-tab[id = '"+ attrForTabLink +"']");
        activeTabRadio.prop("checked", true);
        $(this).find(".tab-link").eq(indexActiveTab).addClass("active");

    });

    $(".tab-link").click(function (e) {

        if( $(this).hasClass("active") ) {

            e.preventDefault();

        } else {

            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);

            tabsParent.find(".tab-link").each(function () {
                
                if( $(this).hasClass("active") ) {

                    $(this).removeClass("active");

                }

            });

            $(this).addClass("active");

        }

    });

    // -------------------------

    $(".eye_btn").click(function(e) {
        
        e.preventDefault();

        parentBlock = $(this).closest(".password");

        var inputPass = parentBlock.find("input");

        if( inputPass.attr("type") == "password" ) {

            inputPass.attr("type", "text");

        } else {

            inputPass.attr("type", "password");

        }

    });

    // -------------------------

    $(".slidedown_btn").click(function(e) {

        e.preventDefault();

        var slideDownBox = $("[data-slidedownbox = '" + $(this).attr("data-slidedownbox-btn") + "']");

        defaultHeight = parseInt( slideDownBox.attr("data-defaultheight") );
        var fullHeight = slideDownBox.children(".inner").height();

        if( slideDownBox.outerHeight() < fullHeight ) {

            $(this).addClass("active");

            slideDownBox.animate({
                "height" : fullHeight + "px"
            }, 300);

            setTimeout(function() {
                slideDownBox.css({
                    "height" : "auto"
                });

                slideDownBox.addClass("shoved");

            }, 500);

        } else {

            slideDownBox.animate({
                "height" : defaultHeight + "px"
            }, 300);
            $(this).removeClass("active");
            slideDownBox.removeClass("shoved");

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

function getTableHeaderBg() {
    $(".table-3_wrapp").each(function() {
        $(this).find(".table-3_bg").css({
            "height" : $(this).find(".table-3 .table-row:eq(0)").height() + "px"
        });
    });
}

function getFooterPosition() {

    $(".footer_sect").css({
        "margin-top" : -$(".footer_sect").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_sect").height() + "px"
    });

}

function getRespDropdownHeight() {    

    $(".slidedownbox").each(function() {

        if( bodyWidth > 768 || $(this).hasClass("shoved") ) {

            $(this).attr("style", "");

        } else {

            defaultHeight = parseInt( $(this).attr("data-defaultheight") );

            $(this).css({
                "height" : defaultHeight + "px"
            });

        }

    });

}

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');

    if ( msie > 0 || trident > 0 || edge > 0 ) {
        document.getElementsByTagName("html")[0].classList.add("ie");
    }

    return false;

}