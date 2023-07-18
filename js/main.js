$(document).ready(function(){

    // navbar jQuery functionalty

    $("#navigation").sticky({
        topSpacing : 75,
    });

    $('#nav').onePageNav({
        currentClass: 'current',
		changeHash: false,
		scrollSpeed: 15000,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
    });

    $('#top-nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 1200
   });

   
});