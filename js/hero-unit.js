define(['foliage',
       'md!herotext.md',
       'md!30minutes-rule.md',
       'blossom!style/hero.less'], 
       function(f,
		heroText,
	        rule30min) {
	   return f.div(
	       {'class': 'hero-unit'},
	       heroText,
	       f.div({'class':'rules span4'},
		     f.img({src: 'images/30min.svg'}),
		     rule30min));
})
