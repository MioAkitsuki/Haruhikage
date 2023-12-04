/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. page scroll
  4. navigation
  5. animate elements
  6. home fadeOut animation
  7. slick slider
  8. facts counter
  9. skills bar
  10. google maps zoom ON/OFF
  11. owl carousel
  12. swiper slider
  13. magnificPopup
  14. clone function
  15. items selector
  16. datepicker
  17. Select2
  18. toggle blog panels
  19. contact form
    19.1. contact modal
  20. reservation form
  21. blog comment form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. page scroll
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        console.log("click");
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
            if (target.length) {
                if ($(window).width() < 768) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 69
                    }, 1000);
                } else {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 69
                    }, 1000);
                }
                return false;
            }
        }
    });
	
    // 4. navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 79
    });
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
	
    $(window).on("scroll", function() {
        // 5. animate elements
        if ($(this).scrollTop() > 50) {
            $(".border-top").addClass("top-position-primary");
			$(".navbar-bg-switch").addClass("navbar-bg-switch-color");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".main-navigation").addClass("main-navigation-home-call");
            $(".to-top-arrow").addClass("show");
			$(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".border-top").removeClass("top-position-primary");
			$(".navbar-bg-switch").removeClass("navbar-bg-switch-color");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $(".to-top-arrow").removeClass("show");
			$(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 6. home fadeOut animation
    });
	
	
    // 12. swiper slider
    var swiper1 = new Swiper(".swiper-container-wrapper .swiper-container.swiper1", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: true,
        effect: "slide",
        pagination: false,
		scrollbar: false,
        enabled: false
    });
	
    // 13. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: ".popup-photo-gallery-open",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 14. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    $("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");
    $("<div class='vertical-effect'></div>").duplicate(3).appendTo(".vertical-lines-wrapper");
	
    // 15. items selector
    const buttons = document.querySelectorAll(".item-button");
    const menus = document.querySelectorAll(".menu");
    function handleClick(e) {
        e.preventDefault();
        const targetMenu = document.querySelector(`#${this.dataset.target}`);
        menus.forEach(menu => {
            menu.classList.remove("menu-visible");
            targetMenu.classList.add("menu-visible");
        });
    }
    buttons.forEach(button => button.addEventListener("click", handleClick));
    
    // 16. datepicker
    $(".datepicker").datepicker({
        orientation: "auto"
    });
	
	// 17. Select2
    $(".select2").select2({
        minimumResultsForSearch: Infinity
    });
	
	// 18. toggle blog panels
    $(".blog-side-launcher").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".blog-side-launch, .blog-side-text").on("click", function() {
        $(".panel-from-left-blog, .panel-overlay-from-right-blog").removeClass("open");
    });
	
	
});