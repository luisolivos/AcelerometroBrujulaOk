//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = 
    {
        davice: function (){
                navigator.addEventListener("deviceready", fn.init, false);
        },
        init: function(){
            $('#acelerometro .individual li').eq(0).tap(acc.start);
            $('#acelerometro .individual li').eq(1).tap(acc.stop);
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

$(fn.davice);