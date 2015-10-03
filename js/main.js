// $(document).ready(function() {
//     $('#fullpage').fullpage();
// });

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});


function aboutmeModal() {
	console.log('open');
    $('#aboutme').css('display','block');
}
   $('.modal-window').click(function(){
        $('.modal-window').css('display','none')
    });

function contactModal() {
	console.log('open2');
    $('#contact').css('display','block');
}
   $('.modal-window').click(function(){
        $('.modal-window').css('display','none')
    });


jQuery(function( $ ){

	console.log('hello');

	if( $( document ).scrollTop() > 0 ){
		$( '.nav-menu' ).addClass( 'opac1' );	
		console.log('hello2');		
	}

	// Add opacity class to site header
	$( document ).on('scroll', function(){

		if ( $( document ).scrollTop() > 0 ){
			$( '.nav-menu' ).addClass( 'opac1' );
			console.log('hello3');	

		} else {
			$( '.nav-menu' ).removeClass( 'opac1' );
			console.log('hello4');		
		}

	});
});