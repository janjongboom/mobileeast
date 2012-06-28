document.addEventListener("deviceready", function () {
    var options = { frequency: 100 };
    
    var onSuccess = function (acc) {
        console.log(acc.x, acc.y);
    };
    
    var onError = function (err) {
        console.error("oh noes", err);
    };
    
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
});