$('.mob_menu').click(function () {
    $('.mob_menu').toggleClass('open')
    $('.naavbar').toggleClass('show')
});

// HEADER 

$(window).scroll(function () {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
});
$("#return-to-top").click(function () {
    // When arrow is clicked
    $("body,html").animate(
        {
            scrollTop: 0 // Scroll to top of body
        },
        500
    );
});