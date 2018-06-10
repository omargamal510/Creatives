/* Start navbar functions */

$(document).ready(function () {
    var $bars  = $('.bars');
    var $times = $('.times');
 
    $bars.click(function () {
        $('.popup-nav').fadeIn(500);
    });

    $times.click(function () {
        $('.popup-nav').fadeOut(500);
    });

});    


/* End navbar function */


/* Start Our Team */
$(function () {
   var $section1 = $('.team section:first-of-type'),
       $section2 = $('.team section:nth-of-type(2)'),
       $section3 = $('.team section:nth-of-type(3)'),
       $section4 = $('.team section:nth-of-type(4)');


    $section1.mouseover(function () {
        $('.content1').css({
            opacity: "1",
            marginRight: "0"
        })
    });
    $section1.mouseleave(function () {
        $('.content1').css({
            opacity: "0",
            marginRight: "100px",
        })
    });


    $section2.mouseover(function () {
        $('.content2').css({
            opacity: "1",
            marginRight: "0"

        })
    });
    $section2.mouseleave(function () {
        $('.content2').css({
            opacity: "0",
            marginRight: "100px",
        })
    });

    
    $section3.mouseover(function () {
        $('.content3').css({
            opacity: "1",
            marginRight: "0"
        })
    });
    $section3.mouseleave(function () {
        $('.content3').css({
            opacity: "0",
            marginRight: "100px",
        })
    });



    $section4.mouseover(function () {
        $('.content4').css({
            opacity: "1",
            marginRight: "0"
        })
    });
    $section4.mouseleave(function () {
        $('.content4').css({
            opacity: "0",
            marginRight: "100px",
        })
    });

});


/* End Our Team */


/* Start Scrolling Functions */

$(document).ready(function() {
    $('.slide-down').click(function() {
        $('html, body').animate({
            scrollTop : $('#feat').offset().top
        }, 1000);
    });

    $('.up').click(function () {
        $('html, body').animate({
            scrollTop : $('#up').offset().top
        }, 1000);
    })
});

var upButton = document.getElementById('upbutton');
window.onscroll = function () {
    if (this.pageYOffset >= 150) {
        upButton.setAttribute('style','display:block');
    } else {
        upButton.setAttribute('style','display:none');
    }
}

/* End Scrolling Functions */






