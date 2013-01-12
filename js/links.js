define(['foliage',
        'template',
	'foliage/bootstrap',
	'md!articles/links.md'
       ],
       function(f,
	       template, 
	       fbs,
	       links) {
	   return template(
	       fbs.row(
		   f.div({'class': 'span12'}, links)
	       ));
	   
});
