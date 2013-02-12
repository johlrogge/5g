define(['foliage',
        'js!bootstrap-lb',
        'blossom!bootstrap-lb/less/bootstrap-lightbox.less'],
       function(f) {
           return function(image) {
               return f.div({'class':'lightbox hide fade', 
                             tabindex:'-1', 
                             role:'dialog', 
                             'aria-hidden':'true'},
                            f.div({'class':'lightbox-header'},
                                  f.button({type:'button', 
                                            'class':'close', 
                                            'data-dismiss':'lightbox', 
                                            'aria-hidden':'true'})),
                            f.div({'class':'lightbox-content'}, 
                                  image))}
       });
