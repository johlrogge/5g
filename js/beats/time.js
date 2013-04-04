define(['phloem', 'lodash'], function(phloem, _) {
    var time = phloem.stream();
    var i = 0;
    function beat() {
        var now =  new Date();
        now.setTime(now.getTime() + 60*60*1000);
        var beats = ((now.getUTCHours())*60*60+now.getUTCMinutes()*60+now.getUTCSeconds())*1000/86400;
        time.push('@'+parseFloat(Math.round(beats*100)/100).toFixed(0));
        _.delay(beat, 1000);
    };

    beat();
    return time.read;
})
