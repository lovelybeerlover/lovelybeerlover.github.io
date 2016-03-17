jQuery(document).ready(function($){
	$(".element").typed({
        strings: ["UI/UX Designer", "Visual Designer", "Web Developer","UI/UX Designer", "Visual Designer", "Web Developer","UI/UX Designer", "Visual Designer", "Web Developer","UI/UX Designer", "Visual Designer", "Web Developer"],
        typeSpeed: 70
    });

    var intro = $('.cd-intro-block'),
		projectsContainer = $('.cd-projects-wrapper'),
		projectsSlider = projectsContainer.children('.cd-slider'),
		singleProjectContent = $('.cd-project-content'),
		sliderNav = $('.cd-slider-navigation');

	intro.on('click', 'a[data-action="show-projects"]', function(event) {
		event.preventDefault();
		intro.addClass('projects-visible');
		projectsContainer.addClass('projects-visible');
		//animate single project - entrance animation
		setTimeout(function(){
			showProjectPreview(projectsSlider.children('li').eq(0));
		}, 200);
	});

	intro.on('click', function(event) {
		//projects slider is visible - hide slider and show the intro panel
		if( intro.hasClass('projects-visible') && !$(event.target).is('a[data-action="show-projects"]') ) {
			intro.removeClass('projects-visible');
			projectsContainer.removeClass('projects-visible');
		}
	});

    // if ($('#btn-contact').click()){
    // 	$(".modal-full-window").addClass("open");
    // }
    // else{
    // 	$(".modal-full-window").removeClass("open");
    // }
    $('#btn-contact').on('click', function(){
		$(".modal-full-window").addClass("open");
    });

    //contact modal close
    $('.cd-close').on('click', function(){
		$(".modal-full-window").removeClass("open");
	});

    $('.mylogo').on('click', function(){
		$(".cd-intro-block projects-visible").removeClass("projects-visible");
	});

	//check if background-images have been loaded and show list items
	$('.cd-single-project').bgLoaded({
	  	afterLoaded : function(){
	   		showCaption($('.projects-container li').eq(0));
	  	}
	});

	//open project
	$('.cd-single-project').on('click', function(){
		var selectedProject = $(this),
			toggle = !selectedProject.hasClass('is-full-width');
		if(toggle) toggleProject($(this), $('.projects-container'), toggle);
		$('.title').css('display','none');
		$('#btn-contact').css('display','none');
		$('#mainlogo').css('display','none');
		intro.addClass('projects-visible-2');

	});
	
	//close project
	$('.projects-container .cd-close').on('click', function(){
		toggleProject($('.is-full-width'), $('.projects-container'), false);
		$('.title').css('display','block');
		$('#btn-contact').css('display','block');
		$('#mainlogo').css('display','block');
		intro.removeClass('projects-visible-2');
	});

	//scroll to project info
	$('.projects-container .cd-scroll').on('click', function(){
		$('.projects-container').animate({'scrollTop':$(window).height()}, 500); 
	});

	//update title and .cd-scroll opacity while scrolling
	$('.projects-container').on('scroll', function(){
		window.requestAnimationFrame(changeOpacity);
	});

	function toggleProject(project, container, bool) {
		if(bool) {
			//expand project
			container.addClass('project-is-open');
			project.addClass('is-full-width').siblings('li').removeClass('is-loaded');
		} else {
			//check media query
			var mq = window.getComputedStyle(document.querySelector('.projects-container'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, ""),
				delay = ( mq == 'mobile' ) ? 100 : 0;

			container.removeClass('project-is-open');
			//fade out project
			project.animate({opacity: 0}, 800, function(){
				project.removeClass('is-loaded');
				$('.projects-container').find('.cd-scroll').attr('style', '');
				setTimeout(function(){
					project.attr('style', '').removeClass('is-full-width').find('.cd-title').attr('style', '');
				}, delay);
				setTimeout(function(){
					showCaption($('.projects-container li').eq(0));
				}, 300);
			});		
		}
	}

	function changeOpacity(){
		var newOpacity = 1- ($('.projects-container').scrollTop())/300;
		$('.projects-container .cd-scroll').css('opacity', newOpacity);
		$('.is-full-width .cd-title').css('opacity', newOpacity);
		//Bug fixed - Chrome background-attachment:fixed rendering issue
		$('.is-full-width').hide().show(0);
	}

	function showCaption(project) {
		if(project.length > 0 ) {
			setTimeout(function(){
				project.addClass('is-loaded');
				showCaption(project.next());
			}, 150);
		}
	}
});

 /*
 * BG Loaded
 * Copyright (c) 2014 Jonathan Catmull
 * Licensed under the MIT license.
 */
 (function($){
 	$.fn.bgLoaded = function(custom) {
	 	var self = this;

		// Default plugin settings
		var defaults = {
			afterLoaded : function(){
				this.addClass('bg-loaded');
			}
		};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);

		// Loop through element
		self.each(function(){
			var $this = $(this),
				bgImgs = window.getComputedStyle($this.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
			$this.data('loaded-count',0);
			$.each( bgImgs, function(key, value){
				var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
				$('<img/>').attr('src', img).load(function() {
					$(this).remove(); // prevent memory leaks
					$this.data('loaded-count',$this.data('loaded-count')+1);
					if ($this.data('loaded-count') >= bgImgs.length) {
						settings.afterLoaded.call($this);
					}
				});
			});

		});
	};
})(jQuery);