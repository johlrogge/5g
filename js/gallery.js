define(['foliage',
        'template',
	'lodash',
	'foliage/bootstrap',
	'md!gallery/introduction.md',
	'md!gallery/images.md',
	'blossom!gallery/style.less'
       ],
       function(f,
		template, 
		_,
		fbs,
		intro,
	        images) {
	   
	   console.log(images.AST);
	   
	   var makeItem = function(item) {

	       return f.div({'class':'item'}, images.toFoliage(item[1]));
	   };

	   var carouselItems = _.map(images.AST, function(element) {
	       return _.isArray(element) ? makeItem(element) : "";
	   })
	   
	   console.log(carouselItems);
	   
	   return template(
	       'gallery',
	       [
		   fbs.row(
		       f.div({'class': 'span12'}, intro)
		   ),
		   fbs.row(
		       f.div({'class':'carousel slide'},
			     function(element) {
				 f.div({'class': 'carousel-inner'},
				       carouselItems )(element);
				 element.carousel({interval:2000});
			     })
		   )
	       ]
	   );
	   
});
