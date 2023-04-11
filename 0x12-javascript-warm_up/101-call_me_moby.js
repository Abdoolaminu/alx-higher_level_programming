#!/usr/bin/node
module.exports = {
  /**
   * Proto - Invokes a function t times.
   * @param {Number} x - The number of times to invoke the function.
   * @param {Number} theFunction - The function to be invoked.
   */
  Proto: function (t, theFunction) {
    for (let i = 0; i < t; i++) {
      theFunction();
    }
  }
};
