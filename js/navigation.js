define(['foliage/bootstrap', 'jquery'],
       function(fbs, $){
	   var docked = false;
	   function scrollTop() {
               return document.body.scrollTop || document.documentElement.scrollTop;
           }

	   return fbs.navbar(
	       function(menu) {
		   var docked = false;
		   var init = menu.offset().top;
		   $(window).scroll(function() {
		       
		       console.log("menu: ", menu);
		       console.log("menu.offset().top: ", menu.offset().top);
		       if (!docked && (menu.offset().top - scrollTop() < 0)) {
			   menu.css('top', 0);
			   menu.css('position', 'fixed'); 
			   docked = true;
		       } else if (docked && scrollTop() <= init) { 
			   menu.css('top', init+'px');
			   menu.css('position', 'absolute'); 
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
