define(['foliage/bootstrap'],
       function(fbs){
	   return fbs.navbar(
	       fbs.navbar.brand('Title'),
	       fbs.navbar.items(
		   {name: 'Home', location:'index'}

	       ));
       });
