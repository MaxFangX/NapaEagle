/* Responsive navbar */
var transparent = false;
var locked = false;
$(document).on('scroll', function(e) {
    if (transparent && $(document).scrollTop() == 0 && !locked) {
        locked = true;
        $('.navbar').animate({
            'opacity': 1
        }, 500);
        transparent = false;
        locked = false;
    } else if (!transparent && $(document).scrollTop() != 0 && !locked) {
        locked = true;
        $('.navbar').animate({
            'opacity': 0
        }, 500);
        transparent = true;
        locked = false;
    };
});
