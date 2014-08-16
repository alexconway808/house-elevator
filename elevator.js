/*jslint node: true */
'use strict';

module.exports = {
  //setting the goto object of function
  goto: function(currentfloor, buttonpressed){
    var start = currentfloor;
    var convertButtonToInteger = parseInt(buttonpressed);
    var rideUp = start + convertButtonToInteger;
    var rideDown = convertButtonToInteger - start;
    if (currentfloor === 0) {
      return rideUp;
    }
    if (currentfloor <= 3 && currentfloor > 0) {
      return rideDown;
    }
  }
};
