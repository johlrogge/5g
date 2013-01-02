define(['foliage', 
	'hero-unit',
	'md!articles/intro.md',
	'md!articles/log.md'], 
       function(f, 
		heroUnit,
		intro,
	        log) {

	   var row = function (children) {
	       return f.div({'class': 'row'}, children);
	   };
    return f.div({'class': 'container'},
		 heroUnit,
		 row(f.all(f.div({'class': 'span6'}, intro), 
			   f.div({'class': 'span6'}, log))))


})
