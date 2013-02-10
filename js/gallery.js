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
	   
	   var makeItem = function(item) {
               console.log("make item", item);
	       return {
                   image: images.toFoliage(item[1][1]),
                   caption: images.toFoliage(item[2])
               };
	   };

	   var carouselItems = _(images.AST[1]).filter(_.isArray).map(function(element) {
	       return _.isArray(element) ? makeItem(element) : "";
	   }).valueOf();
	   
	   return template(
	       'gallery',
	       [
		   fbs.row(
		       f.div({'class': 'span12'}, intro)
		   ),
		   fbs.row(
		       fbs.carousel('carousel', 'slide', carouselItems)
		   )
	       ]
	   );
	   
});
