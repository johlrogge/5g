define(['foliage', 
	'template',
	'foliage/bootstrap',
	'md!articles/intro.md',
	'md!articles/log.md'], 
       function(f, 
		template,
		fbs,
		intro,
	        log) {


    return template(
	fbs.row(f.all(f.div({'class': 'span6'}, intro), 
		      f.div({'class': 'span6'}, log))));
})
