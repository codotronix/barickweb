$(function(){

    //scroll events
    $(window).on('scroll', handleScroll);

    //scroll to project section
    $('.top-banner .go-down').click(function(){
        scrollTo('project-section');
    });

    //top-links should take usee to relevent section of the page
    $('.top-links').click(function(ev){
        var dataLinkId = $(this).attr('data-link-id');
        if(dataLinkId) {
            scrollTo(dataLinkId);
        }
    });


    function handleScroll () {
        if($(window).scrollTop() <= 40) {
            $('.top-banner').addClass('covered');
        }
        else {
            $('.top-banner').removeClass('covered');
        }
    }


    function init () {
        //console.log('initing scroll...');        
        //Always start from top...
        window.onload = scrollTo;
        // setTimeout(function(){
        //     scrollBackToTop();
        // }, 1000);
    }


    function scrollTo (id, timing) {
        var body = $("html, body");
        var offset = (typeof(id) === "string" && id !== '_top') ? $('#' + id).offset().top : 0;
        timing = timing || 500;
        body.stop().animate({scrollTop: offset}, timing, 'swing', function() { 
           //alert("Finished animating");
        });
    }


    init();

});