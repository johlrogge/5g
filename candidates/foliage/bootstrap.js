define(['foliage', 
	'foliage/foliage-event',
	'twig',
	'lodash',
	'require'],
       function(f, on, twig, _, require) {

	   var row = function (children) {
	       return f.div({'class': 'row'}, children);
	   };

	   var navbar = function() {
	       return f.div({'class': 'navbar navbar-inverse'},
			    f.div({'class': 'navbar-inner'},
				  _.toArray(arguments)))};

	   navbar.brand = function(brand) {
	       return f.div({'class': 'brand'},
			    brand);
	   };

	   navbar.items = function() {
	       return f.ul({'class':'nav'}, _.map(arguments, function(item) {
		   return f.li(f.a({href: '#'+item.location}, item.name));
	       }));
	   };



	   var directions = {
	       left: {
		   cls:'left',
		   text: '&lsaquo;',
		   slide: 'prev'
	       },
	       right: {
		   cls: 'right',
		   text: '&rsaquo;',
		   slide: 'next'
	       }
	   };

	   function carouselControl(direction, id) {
	       var dir = directions[direction];
	       return f.a({'class':'carousel-control', 
			   href: '#'+id,
			   'data-slide':dir.slide}, f.addClass(dir.cls), dir.text);
	   }

	   var carousel = function (id, transition, items, options) {
               console.log();
	       return f.div({'id':id,  'class':'carousel'},
			    f.addClass(transition),
                            f.ol(
                                {'class':'carousel-indicators'},
                                _.map(items, function(item, index) {
                                    return f.li({'data-target': ('#'+id),
                                                 'data-slide-to': ''+index},
                                                index === 0 ? f.addClass('active') : undefined);
                                })
                            ),
			    function(element) {
				f.div({'class': 'carousel-inner'},
				      _.map(items, function(image, index){
                                          return f.div({'class':'item'}, 
                                                       index == 0  ? f.addClass('active') : undefined,
                                                       image.image,
                                                       f.div({'class':'carousel-caption'},
                                                             image.caption
                                                            ))}))
                                (element);
				element.carousel(options);
			    },
			    carouselControl('left', id),
			    carouselControl('right', id)
			   )
	   }
	   


           var thumbnails = function(items, span) {
               return f.ul({'class': 'thumbnails'},
                           _.map(items, function(item) {
                               return f.li({'class':span||'span4'},
                                           f.div({href:'#', 'class':'thumbnail'},
                                                 item))}),
                           function(parent) {
                               console.log(parent);
                               var thumbs = $('* .thumbnail', parent);
                               _.each(thumbs, function(child) {$(child).height(300);});
                           });
           }


	   return {
	       navbar: navbar,
	       row: row,
	       carousel: carousel,
               thumbnails: thumbnails
	   }
	   
       });
       
