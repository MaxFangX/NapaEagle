/* Responsive navbar */
var sectionIndexes = {};
var updateLocked = false;
var updateSectionIndexes = function() {
    if (!updateLocked) {
        updateLocked = true;
        var sections = $('.nav-menu-item');
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var name = section.dataset['name'];
            sectionIndexes[name] = $('#' + name).offset().top;
        }
        setTimeout(function() {
            console.log("Updated section indexes");
            updateLocked = false;
        }, 1000);
    }
}
updateSectionIndexes();

$(document).on('scroll', function(e) {

})

window.onresize = function(event) {
    updateSectionIndexes();
};
/*var transparent = false;
var locked = false;
$(document).on('scroll', function(e) {
    if (transparent && $(document).scrollTop() === 0 && !locked) {
        locked = true;
        $('.navbar').animate({
            'opacity': 1,
            'color': '#888'
        }, 500);
        $('.navbar-header').animate({
            'color': '#FFF'
        }, 500);
        transparent = false;
        locked = false;
    } else if (!transparent && $(document).scrollTop() !== 0 && !locked) {
        locked = true;
        $('.navbar').animate({
            'opacity': 0.2,
            'color': 'transparent'
        }, 500);
        $('.navbar-header').animate({
            'color': '#FFF'
        }, 500);
        transparent = true;
        locked = false;
    }
});
*/
