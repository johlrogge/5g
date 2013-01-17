define(['foliage/bootstrap', 'jquery'],
       function(fbs, $){
	   var docked = false;
	   function scrollTop() {
               return document.body.scrollTop || document.documentElement.scrollTop;
           }

	   return fbs.navbar(
	       function(parent) {
		   var init;
		   var docked = false;
		   $(window).scroll(function() {
		       var menu = parent.parent();
		       init = init || parent.offset().top;
		       if (!docked && (menu.offset().top - scrollTop() < 0)) {
			   menu.addClass('navbar-fixed-top');
			   docked = true;
		       } else if (docked && scrollTop() <= init) { 
			   menu.removeClass('navbar-fixed-top');
			   docked = false;  
		       }
		   });
	       },
	       fbs.navbar.brand('Title'),
	       fbs.navbar.items(
		   {name: 'Hem', location:'index'},
		   {name: 'Mer inspiration', location:'links'}
	       ));
       });
