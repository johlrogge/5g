define(['foliage',
	'navigation',
        'header/header'],
       function(f, navigation, header) {
	   return function(content) {
	       return f.all(
		   header,
		   navigation,
		   f.div({'class': 'container'},
			 content));
	   }
});
