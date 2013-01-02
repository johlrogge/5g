define(['foliage', 
	'hero-unit',
	'md!articles/intro.md'
       ], 
       function(f, 
		heroUnit,
		intro) {
    return f.div({'class': 'container'},
		 heroUnit,
		 f.div({'class': 'row'},
		       f.div({'class': 'span12'},
			     f.div({'class': 'row'},
				   f.div(intro)))))

})
