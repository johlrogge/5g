define(['foliage',
        'js!bootstrap-lb',
        'blossom!bootstrap-lb/less/bootstrap-lightbox.less'],
       function(f) {
           var item = 0;
           return function(image) {
               return function(parent) {
                   var id = '__lightbox' + item++;
                   var handle = f.div({'class':'lightbox hide fade', 
                          id: id,
                          tabindex:'-1', 
                          role:'dialog', 
                          'aria-hidden':'true'},
                         f.div({'class':'lightbox-header'},
                               f.button({type:'button', 
                                         'class':'close', 
                                         'data-dismiss':'lightbox', 
                                         'aria-hidden':'true'})),
                         f.div({'class':'lightbox-content'}, 
                               image))(parent);
                   handle.show = function() {
                       $('#'+id).lightbox();
                   };
                   return handle;
               }
           }
       });
