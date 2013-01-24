define(['foliage',
        'template',
	'foliage/bootstrap',
	'md!articles/links-intro.md',
	'md!articles/links.md',
	'blossom!links/style.less'
       ],
       function(f,
		template, 
		fbs,
		intro,
		links) {
	   return template(
	       'links',
	       fbs.row(
		   [
		       f.div({'class': 'span6'}, intro),
		       f.div({'id': 'links', 'class': 'span6'}, links),
		   ]
	       ));
	   
});
