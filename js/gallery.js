define(['foliage',
        'template',
	'foliage/bootstrap',
	'md!gallery/introduction.md',
	'blossom!gallery/style.less'
       ],
       function(f,
		template, 
		fbs,
		intro) {
	   return template(
	       'gallery',
	       fbs.row(
		   f.div({'class': 'span12'}, intro)
	       ));
	   
});
