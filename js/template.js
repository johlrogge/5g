define(['foliage',
	'hero-unit',
	'navigation',
        'header/header'],
       function(f, heroUnit, navigation, header) {
	   return function(content) {
	       return f.all(
		   header,
		   navigation,
		   f.div({'class': 'container'},
			 heroUnit,
			 content));
	   }
});
