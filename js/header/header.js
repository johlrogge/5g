define(['foliage', 'blossom!./header.less'],
       function(f) {
	   var header = f.element('header');
	   return header(
	       f.div({'class': 'container home'}));
});
