jQuery.fn.exists = function () {
    return $(this).length;
};

jQuery(document).ready(function ($) {

});


$(".tab_content").hide();
$(".tab_content:first").show();
/* в режиме вкладок */
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
/* в режиме аккордеона */
$(".tab_accordion").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab_accordion").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
$('ul.tabs li').last().addClass("tab_last");


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        400: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
});

$(document).ready(function () {
    $('select').niceSelect();
});