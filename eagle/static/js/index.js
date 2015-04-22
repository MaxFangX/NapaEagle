/* Responsive navbar */
var sectionIndexList = [];
var sectionList = [];
var updateLocked = false;
var updateSectionIndexes = function() {
    if (!updateLocked) {
        updateLocked = true;
        var sections = $('.nav-menu-item');
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var name = section.dataset.name;
            var offset = $('#' + name).offset().top;
            if (sectionList.length < sections.length) {
                sectionList.push(name);
                sectionIndexList.push(offset);
            } else {
                sectionIndexList[i] = offset;
            }
        }
        setTimeout(function() {
            console.log("Updated section indexes");
            updateLocked = false;
        }, 1000);
    }
};
updateSectionIndexes();

var previouslyActive = $('#wines-nav');
var scrollLocked = false;
var scrollOffset;
$(document).on('scroll', function(e) {
    if (!scrollLocked) {
        console.log("Running onScroll");
        scrollOffset = $(document).scrollTop();
        scrollLocked = true;
        var resultIndex = 0;
        for (var i = 0; i < sectionIndexList.length; i++) {
            if (scrollOffset > sectionIndexList[i]) {
                resultIndex = i;
            }
        }
        console.log(resultIndex);
        var sectionName = sectionList[resultIndex];
        var newlyActive = $('#' + sectionName + '-nav');
        previouslyActive.removeClass('active');
        newlyActive.addClass('active');
        previouslyActive = newlyActive;
        scrollLocked = false;
    }
});

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
