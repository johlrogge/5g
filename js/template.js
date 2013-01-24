define(['foliage',
	'navigation',
        'header/header'],
       function(f, navigation, header) {
	   return function(location, content) {
	       return f.all(
		   header(location),
		   navigation,
		   f.div({'class': 'container'},
			 content));
	   }
});
