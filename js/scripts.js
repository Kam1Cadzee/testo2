$(document).ready(function () {

    function initAboutUsBlock() {
        if($(window).width() >= 992) {
            $('.about-us_link').on('click', function () {
                $(this).toggleClass('rotate');
                $(this).next('.about-us_info').toggleClass('show');
            });
            $('.aboutus-slider').trigger('destroy.owl.carousel');
        }

        if($(window).width() <= 991) {
            $('.aboutus-slider').owlCarousel({
                loop:false,
                margin:0,
                nav:true,
                dots:true,
                items:1
            })
        }
    };

    initAboutUsBlock();
    $(window).resize(initAboutUsBlock);

    $(window).scroll(function () {
        var windScroll = $(window).scrollTop();
        if (windScroll >= 1) {
            $('.header').addClass("scroll");
        } else {
            $('.header').removeClass("scroll");
        }
    }).scroll();


    //scroll to top button
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 1; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        loop:true,
        margin:0,
        items: 1,
        nav: true,
        responsive: {
            0:{
                dots:false
            },
            1024:{
                dots:true
            }
        },
        responsiveRefreshRate: 200
    }).on('changed.owl.carousel', syncPosition);

    sync2
      .on('initialized.owl.carousel', function() {
          sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: false,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });


    $('.floor-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        items:1
    })
});
