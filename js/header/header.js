define(['foliage', 'blossom!./header.less'],
       function(f) {
	   var header = f.element('header');
	   return function(location) {
	       return header(
		   f.div({'class': 'container '+location}))
	   };
});
