define(['foliage',
       'md!herotext.md',
       'md!30minutes-rule.md',
       'md!free-tools-rule.md',
       'blossom!style/hero.less'], 
       function(f,
		heroText,
	        rule30min,
	        freeTools) {
	   return f.div(
	       {'class': 'hero-unit'},
	       heroText,
	       f.div({'class':'rules span4'},
		     f.div({'class':'row'},
			   f.div({'class':'span4'},
				 f.img({src: 'images/30min.svg'}),
				 rule30min),
			   f.div({'class':'span4'},
				 f.img({src: 'images/free.svg'}),
				 freeTools))));
})
