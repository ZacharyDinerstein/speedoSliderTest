

//***** EVENT LISTENERS *****//	


$('.gal-1-btn').click(function(){
	openGalery(gallery1);
});

$('.gal-2-btn').click(function(){
	openGalery(gallery2);
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






