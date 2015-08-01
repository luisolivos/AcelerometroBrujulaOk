//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = 
    {
        ready: function (){
                navigator.addEventListener("deviceready", fn.init, false);
        },
        init: function(){
            $('#acelerometro .individual li').tap(fn.acc);
            //fn.acc();
        },
        acc: function(){
            if($(this).index() == 0)
            {
                alert();
               acc.start();
            }
            else
            {
                alert();
                acc.stop();
            }
        }
    };

$(fn.ready);