/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.timer.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.imageLoader.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.magellan.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.orbit.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.sticky.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min';
@codekit-prepend quiet '../../node_modules/owl.carousel/dist/owl.carousel.min';
*/

$(document).foundation();

const nav = $('.nav');
$(document).scroll(() => {
    if (nav.offset().top > 50){
        nav.addClass('is_fixed');
    } else {
        nav.removeClass('is_fixed');
    }
});

$('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: ['', '']
});