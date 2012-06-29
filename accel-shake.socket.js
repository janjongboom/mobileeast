document.addEventListener("deviceready", function () {
    var options = { frequency: 100 };
    var prevX = 1.0;
    var threshold = 0.3;
    
    var socket = io.connect('http://mobileeast.herokuapp.com/');
  
    var shaking = false;
    
    var onStartShake = function() {
        $("#shakin").fadeIn();
        
        if (!shaking) {
            socket.emit("shakin");
        }
        
        shaking = true;
    };
    
    var onStopShake = function () {
        $("#shakin").fadeOut();
        
        shaking = false;
    };
    
    setInterval(function () {
        if (shaking) {
            socket.emit("shakin");
        }
    }, 500);
    
    var _shakeTimeout;
    var onShake = function () {
        onStartShake();
        
        if (_shakeTimeout) {
            clearTimeout(_shakeTimeout);
        }
        
        _shakeTimeout = setTimeout(function () {
            onStopShake();
            _shakeTimeout = null;
        }, 500);
    };
    
    var onSuccess = function(acc) {
        if (true === acc.is_updating) {
            return;
        }
        var diffX = Math.abs(acc.x) - prevX;

        if (diffX >= threshold) {
            onShake();
        }
        prevX = Math.abs(acc.x);
    };
    
    var onError = function (err) {
        console.error("oh noes", err);
    };
    
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
});