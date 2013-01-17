define(['foliage', 
	'template',
	'hero-unit',
	'foliage/bootstrap',
	'md!articles/intro.md',
	'md!articles/log.md'], 
       function(f, 
		template,
		heroUnit,
		fbs,
		intro,
	        log) {


    return template(
	f.all(
	    heroUnit,
	    fbs.row(f.all(f.div({'class': 'span6'}, intro), 
			  f.div({'class': 'span6'}, log)))));
})
