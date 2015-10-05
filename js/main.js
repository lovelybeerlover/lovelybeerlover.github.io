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