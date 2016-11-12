'use strict';
module.exports = function() {

  var num = Math.random()*1000000;
  return function mySecretNumber(){
    return num;
  };
};

//======================================

// const secret = require('secret_number.js')


// var myNum = secret(); // generates random #, returns: function mysecretNumber

// myNum(); //123
// myNum(); //123

// var myNum2 = secret();

// myNum2(); //567
// myNum2(); //567

// myNum1(); //123


