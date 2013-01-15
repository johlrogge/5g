define(['foliage', 'blossom!./header.less'],
       function(f) {
	   console.log("define element");
	   var header = f.element('header');
	   
	   return header(
	       f.div({'class': 'container'},
			 f.div({'class': 'row'},
			       f.div({'class': 'span8'}, 
				     f.img({src: 'images/logo.svg'})))));
});
