$(function () {
    $(".icon").click(function () {

        $(".links ul").toggleClass("show")
    })
    
    // Smoothly Scroll To Elment
    $(".links ul li a").click(function (e) {

        e.preventDefault();

        $(".links ul").toggleClass("show");

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        });

    });

    // Show The Arrow-up If Window scrollY Is >= 700
    $(window).scroll(function () {

        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })
})
