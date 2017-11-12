$(document).ready(function(){
    $('nav a').on('click', function() {
        $('nav a').on('click', function(){ 

            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 54;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 300);

        return false;

    })

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();

        if (windscroll >= 1) {
            $('.container section').each(function(i) {
                if ($(this).position().top <= windscroll + 54) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
                }
            });

        } else {
            $('nav').removeClass('fixed');
            $('nav li.active').removeClass('active');
            $('nav li:first').addClass('active');
        }

    }).scroll();




});