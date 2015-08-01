
var acc = {
    watchID: null,
    onSuccess: function (acceleration) {
        $('#acelerometro .scroll h2').html('Acceleration X: ' + acceleration.x + '<br>' +
              'Acceleration Y: ' + acceleration.y + '<br>' +
              'Acceleration Z: ' + acceleration.z + '<br>' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    },
    onError: function() {
        alert('onError!');
    },
    start: function(){
        alert();
        if (acc.watchID == null){
            var options = { frequency: 500 };  // Update every 3 seconds
            acc.watchID = navigator.accelerometer.watchAcceleration(acc.onSuccess, acc.onError, options);
            
           
        }
    },
    stop: function(){
        alert();
        if(acc.watchID != null)
            navigator.accelerometer.clearWarch(acc.watchID);
        $('#acelerometro .scroll h2').html("Detenido");
    }
    
    
}
    
    
    

    

   