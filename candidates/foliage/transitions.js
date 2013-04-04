define(['jquery', 'foliage'], function($, f) {
    return {
        fadeInOut: function(time){
            time = time || 500;
            var elemToFade =  {
                fadeOut:function(time, next){
                    return next();
                }
            };
            return function(value) {
                return function(parent) {
                    var p = f.span(value, function(elem){$(elem).fadeIn(time); elemToFade = elem;});
                    
                    var undo = {
                        undo:function() {}
                    };
                    elemToFade.fadeOut(time, function() {
                        undo = p(parent);
                    });

                    return {
                      undo: function() {
                          elemToFade.fadeOut(time, function() {
                              undo.undo();
                          })
                      }
                  };
                }
            }
        }
    }
});
