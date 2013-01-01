define(['foliage', 
	'md!articles/intro.md'
       ], 
       function(f, 
		intro) {
    return f.div({'class': 'container'},
		 f.div({'class': 'row'},
		       f.div({'class': 'span12'},
			     f.div({'class': 'row'},
				   f.div(intro)))))

})
