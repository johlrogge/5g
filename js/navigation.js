define(['foliage/bootstrap'],
       function(fbs){
	   return fbs.navbar(
	       fbs.navbar.brand('Title'),
	       fbs.navbar.items(
		   {name: 'Hem', location:'index'},
		   {name: 'Mer inspiration', location:'links'}
	       ));
       });
