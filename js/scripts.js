
jQuery(document).ready(function() {
	
    /*
        Background slideshow
    */
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
	
});
