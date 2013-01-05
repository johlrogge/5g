define(['foliage',
       'md!herotext.md',
       'blossom!style/hero.less'], 
       function(f,
		heroText ) {
	   return f.div(
	       {'class': 'hero-unit'},
	       heroText
	   );
})
