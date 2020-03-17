$(function(){

    'use strict'
    //nice scroll
  $('html').niceScroll();
    //header height
    $('.header').height($(window).height());
    //scroll to features
    $('.header .arrow i').click(function (){

        $('html, body').animate({
            scrollTop: $('.features').offset().top
        } , 1000);

    }
    );
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(1000);
    });
    //check testimonials
    var  rightArrow = $('.testim .fa-chevron-right'),
         leftArrow =$('.testim .fa-chevron-left') ; 
    function check () {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut () : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut () : rightArrow.fadeIn();
    }
    check();
    $('.testim i').click( function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                check();

            });
        }
        else
        {
            $('.testim .active').fadeOut(100, function () {
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            check();
            });


        }
    });
    //My task
    $('.links').click(function(){
        if($(this).hasClass('open')){
            $('.table-row').removeClass('hidden');
            $('.task').addClass("hidden");
            $(this).removeClass('open');
        }
        else{
            $('.table-row').addClass('hidden');
            $('.task').removeClass("hidden");
            $(this).addClass('open');
        }


    });

    $(".goto").click(function(){
        console.log($(this).attr('id'));
        $('html,body').animate({
            scrollTop:$($(this).attr('id')).offset().top
        }, 2000)
    })
  
  

});
