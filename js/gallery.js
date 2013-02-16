define(['foliage',
        'foliage/foliage-event',
        'template',
	'lodash',
	'foliage/bootstrap',
	'md!gallery/introduction.md',
	'md!gallery/images.md',
        'lightbox',
	'blossom!gallery/style.less'
       ],
       function(f,
                on,
		template, 
		_,
		fbs,
		intro,
	        images,
                lightbox) {
	   

           var makeImage = function(spec) {
               var image = {src: spec.href, alt:spec.alt};
               return function(parent) {
                   var lightBox = lightbox(f.img({src: spec.href, alt:spec.alt}))(parent);
                   return f.img(image, on.click(function(){
                       lightBox.show();
                   }))(parent)
               }
           }

	   var makeItem = function(item) {
	       return {
                   image: makeImage(item[1][1][1]),
                   caption: images.toFoliage(item[2])
               };
	   };

	   var imageItems = _(images.AST[1]).filter(_.isArray).map(function(element) {
	       return _.isArray(element) ? makeItem(element) : "";
	   }).valueOf();
	   
	   return template(
	       'gallery',
	       [
		   fbs.row(
		       f.div({'class': 'span12'}, intro)
		   ),
		   fbs.row(
                       fbs.thumbnails(_.pluck(imageItems, 'image'))
		   )
	       ]
	   );
	   
});
