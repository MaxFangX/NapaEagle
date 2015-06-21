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
            //console.log("Updated section indexes");
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
        //console.log("Running onScroll");
        scrollOffset = $(document).scrollTop();
        scrollLocked = true;
        var resultIndex = 0;
        for (var i = 0; i < sectionIndexList.length; i++) {
            if (scrollOffset + 5 > sectionIndexList[i]) {
                resultIndex = i;
            }
        }
        //console.log(resultIndex);
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


var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'http://i.imgur.com/7XJKPA7.jpg',
        w: 600,
        h: 400
    },
    {
        src: 'http://upload.wikimedia.org/wikipedia/commons/2/23/Chinese_railroad_workers_sierra_nevada.jpg',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();

