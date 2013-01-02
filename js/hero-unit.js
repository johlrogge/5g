define(['foliage',
       'md!herotext.md'], 
       function(f,
		heroText ) {
	   return f.div(
	       {'class': 'hero-unit'},
	       heroText
	   );
})
