

//***** EVENT LISTENERS *****//	


$('.gallery1').on('click', function(){
	openGalery(gallery1);
    playSlideShowAudio('gallery1-audio');
});

$('.gallery2').on('click', function(){
	openGalery(gallery2);
    playSlideShowAudio('gallery2-audio');
});



//***** PHOTOSWIPE JAVASCRIPT *****//


var pswpElement = document.querySelectorAll('.pswp')[0];

// build first items array
var items1 = [
    {
        src: 'https://placekitten.com/1100/600',
        w: 1100,
        h: 600,
        title: 'Image Caption'
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900,
        title: 'Image Captionasdfsadf'
    }
];

// build second items array
var items2 = [
    {
        src: 'https://placekitten.com/1000/1000',
        w: 600,
        h: 600,
        title: 'Image Caption'
    },
    {
        src: 'https://placekitten.com/1200/1200',
        w: 1200,
        h: 1200,
        title: 'Image Captionasdfsadf'
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery1 = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items1, options);
var gallery2 = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items2, options);



//***** HELPER FUNCTIONS *****//


function openGalery(gallery){
	gallery.init();
}

function playSlideShowAudio(audioTrack){
    $('#' + audioTrack).get(0).play();
}

function stopAndResetSlideshowAudio(audioTrack){
    var currentTrack = $('#' + audioTrack).get(0);
    currentTrack.pause();
    currentTrack.currentTime = 0;
}


//***** FUNCTIONAL CODE *****//

gallery1.listen('close', function() {
    stopAndResetSlideshowAudio('gallery1-audio');
});

gallery2.listen('close', function() {
    stopAndResetSlideshowAudio('gallery2-audio');
});



