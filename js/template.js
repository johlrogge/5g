define(['foliage',
	'hero-unit',
	'navigation'],
       function(f, heroUnit, navigation) {
	   return function(content) {
	       return f.all(
		   navigation,
		   f.div({'class': 'container'},
			 heroUnit,
			 content));
	   }
});
