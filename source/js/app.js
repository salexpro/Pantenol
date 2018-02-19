/* 
@codekit-prepend '../../node_modules/jquery/dist/jquery.min.js';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
@codekit-prepend '../../node_modules/owl.carousel/dist/owl.carousel.min.js';
*/

$(document).foundation();

$('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: ['', '']
});