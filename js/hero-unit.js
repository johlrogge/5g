define(['foliage',
       'md!herotext.md',
       'css!style/hero-unit.css'], 
       function(f,
		heroText ) {
	   return f.div(
	       {'class': 'hero-unit'},
	       heroText
	   );
})
