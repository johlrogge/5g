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
	   
	   return {
	       navbar: navbar,
	       row: row
	   }
	   
       });
       
