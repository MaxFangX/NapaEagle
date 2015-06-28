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

document.querySelector('#gallery-nav').addEventListener("click", function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'http://i.imgur.com/Vaow4Y1.png',
            w: 323,
            h: 353,
        },
        {
            src: 'http://i.imgur.com/HNnDas5.jpg',
            w: 3800,
            h: 5000,
        },
        {
            src: 'http://i.imgur.com/xME2RDe.jpg',
            w: 3800,
            h: 5000,
        },
        {
            src: 'http://i.imgur.com/lsGSO9I.jpg',
            w: 4800,
            h: 7200,
        },
        {
            src: 'http://i.imgur.com/9uqkbl8.jpg',
            w: 4800,
            h: 4800,
        },
        {
            src: 'http://i.imgur.com/2Itcxcy.jpg',
            w: 1363,
            h: 2048,
        },
        {
            src: 'http://i.imgur.com/OW3LobV.jpg',
            w: 1363,
            h: 2048,
        },
        {
            src: 'http://i.imgur.com/UcAr97n.jpg',
            w: 1363,
            h: 2048,
        },
        {
            src: 'http://i.imgur.com/tY71ss0.jpg',
            w: 1366,
            h: 2048,
        },
        {
            src: 'http://i.imgur.com/FzcEs5I.jpg',
            w: 1363,
            h: 2048,
        },
        {
            src: 'http://i.imgur.com/iVL1NhJ.jpg',
            w: 1362,
            h: 2048,
        },
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
});


